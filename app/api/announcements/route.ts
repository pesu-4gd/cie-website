import { NextRequest, NextResponse } from 'next/server';
import { getAnnouncements, createAnnouncement, getAllAnnouncements } from '@/lib/database';
import { verifyToken, hasPermission } from '@/lib/auth';

// GET - Fetch announcements (public)
export async function GET() {
  try {
    const announcements = await getAnnouncements();
    return NextResponse.json({ success: true, announcements });
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch announcements' },
      { status: 500 }
    );
  }
}

// POST - Create new announcement (admin only)
export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('admin-token')?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Authentication required' },
        { status: 401 }
      );
    }

    const tokenPayload = verifyToken(token);
    if (!tokenPayload) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Check permissions
    if (!hasPermission(tokenPayload.permissions, 'create_announcements')) {
      return NextResponse.json(
        { success: false, error: 'Insufficient permissions' },
        { status: 403 }
      );
    }

    const announcementData = await request.json();

    // Validate required fields
    const { title, message, type, priority, category } = announcementData;
    if (!title || !message || !type || !priority || !category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create announcement
    const newAnnouncement = await createAnnouncement({
      ...announcementData,
      createdBy: tokenPayload.username,
      isActive: true,
    });

    return NextResponse.json({ 
      success: true, 
      announcement: newAnnouncement,
      message: 'Announcement created successfully'
    });
  } catch (error) {
    console.error('Error creating announcement:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create announcement' },
      { status: 500 }
    );
  }
}
