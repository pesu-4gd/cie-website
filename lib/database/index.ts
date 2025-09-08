import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.join(process.cwd(), 'lib/database');

export interface Announcement {
  id: string;
  title: string;
  message: string;
  type: 'urgent' | 'info' | 'success' | 'warning';
  priority: 'high' | 'medium' | 'low';
  category: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
  isActive: boolean;
  createdBy: string;
  actionButton?: {
    text: string;
    url: string;
  };
}

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  role: 'admin' | 'moderator';
  name: string;
  isActive: boolean;
  createdAt: string;
  lastLogin?: string;
  permissions: string[];
}

// Announcement CRUD operations
export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const filePath = path.join(DATABASE_PATH, 'announcements.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const announcements = JSON.parse(data) as Announcement[];
    
    // Filter active and non-expired announcements
    const now = new Date();
    return announcements
      .filter(ann => ann.isActive)
      .filter(ann => !ann.expiresAt || new Date(ann.expiresAt) > now)
      .sort((a, b) => {
        // Sort by priority (high > medium > low) then by creation date (newest first)
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        const priorityDiff = priorityOrder[b.priority] - priorityOrder[a.priority];
        if (priorityDiff !== 0) return priorityDiff;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  } catch (error) {
    console.error('Error reading announcements:', error);
    return [];
  }
}

export async function getAllAnnouncements(): Promise<Announcement[]> {
  try {
    const filePath = path.join(DATABASE_PATH, 'announcements.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data) as Announcement[];
  } catch (error) {
    console.error('Error reading all announcements:', error);
    return [];
  }
}

export async function createAnnouncement(announcement: Omit<Announcement, 'id' | 'createdAt' | 'updatedAt'>): Promise<Announcement> {
  try {
    const announcements = await getAllAnnouncements();
    const newAnnouncement: Announcement = {
      ...announcement,
      id: `ann-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    announcements.push(newAnnouncement);
    
    const filePath = path.join(DATABASE_PATH, 'announcements.json');
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));
    
    return newAnnouncement;
  } catch (error) {
    console.error('Error creating announcement:', error);
    throw new Error('Failed to create announcement');
  }
}

export async function updateAnnouncement(id: string, updates: Partial<Announcement>): Promise<Announcement | null> {
  try {
    const announcements = await getAllAnnouncements();
    const index = announcements.findIndex(ann => ann.id === id);
    
    if (index === -1) return null;
    
    announcements[index] = {
      ...announcements[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    const filePath = path.join(DATABASE_PATH, 'announcements.json');
    fs.writeFileSync(filePath, JSON.stringify(announcements, null, 2));
    
    return announcements[index];
  } catch (error) {
    console.error('Error updating announcement:', error);
    throw new Error('Failed to update announcement');
  }
}

export async function deleteAnnouncement(id: string): Promise<boolean> {
  try {
    const announcements = await getAllAnnouncements();
    const filteredAnnouncements = announcements.filter(ann => ann.id !== id);
    
    if (filteredAnnouncements.length === announcements.length) return false;
    
    const filePath = path.join(DATABASE_PATH, 'announcements.json');
    fs.writeFileSync(filePath, JSON.stringify(filteredAnnouncements, null, 2));
    
    return true;
  } catch (error) {
    console.error('Error deleting announcement:', error);
    throw new Error('Failed to delete announcement');
  }
}

// User operations
export async function getUserByUsername(username: string): Promise<User | null> {
  try {
    const filePath = path.join(DATABASE_PATH, 'users.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(data) as User[];
    return users.find(user => user.username === username && user.isActive) || null;
  } catch (error) {
    console.error('Error reading user:', error);
    return null;
  }
}

export async function updateUserLastLogin(username: string): Promise<void> {
  try {
    const filePath = path.join(DATABASE_PATH, 'users.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(data) as User[];
    
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
      users[userIndex].lastLogin = new Date().toISOString();
      fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    }
  } catch (error) {
    console.error('Error updating user last login:', error);
  }
}
