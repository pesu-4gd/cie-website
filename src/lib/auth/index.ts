import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByUsername, updateUserLastLogin, type User } from '../database';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

export async function authenticateUser(username: string, password: string): Promise<AuthResult> {
  try {
    // Get user from database
    const user = await getUserByUsername(username);
    if (!user) {
      return { success: false, error: 'Invalid credentials' };
    }

    // Verify password
    const isValidPassword = await bcryptjs.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return { success: false, error: 'Invalid credentials' };
    }

    // Update last login
    await updateUserLastLogin(username);

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user.id, 
        username: user.username,
        role: user.role,
        permissions: user.permissions
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    return { 
      success: true, 
      user: { ...user, passwordHash: '' }, // Don't send password hash
      token 
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return { success: false, error: 'Authentication failed' };
  }
}

export interface TokenPayload {
  userId: string;
  username: string;
  role: 'admin' | 'moderator';
  permissions: string[];
  iat: number;
  exp: number;
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  return userPermissions.includes(requiredPermission);
}

// Hash password utility (for creating new users)
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return await bcryptjs.hash(password, saltRounds);
}

// Default credentials for demo (password: "admin123" and "moderator123")
export const DEFAULT_CREDENTIALS = {
  admin: {
    username: 'admin',
    password: 'admin123'
  },
  moderator: {
    username: 'moderator', 
    password: 'moderator123'
  }
};
