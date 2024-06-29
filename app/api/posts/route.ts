import { NextRequest, NextResponse } from 'next/server';
import DatabaseConnection from '@/lib/mongo/db';
import PostsModel from '@/app/models/post';

export async function GET(req: NextRequest) {
  try {
    
    // Connect to the database
    await DatabaseConnection();
    console.log('Posts Table connected successfully!!!');

    // Fetch posts from the database
    const posts = await PostsModel.find();

    return NextResponse.json({ message: 'GET request received', posts }, { status: 200 });
  } catch (error: any) {
    console.error('Error handling GET request:', error);
    return NextResponse.json({ error: 'Internal Server Error hii' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log('POST request to /api/blogs');
    return NextResponse.json({ message: 'POST request received' });
  } catch (error: any) {
    console.error('Error handling POST request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
