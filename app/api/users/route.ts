import { NextResponse } from 'next/server';
import UserModel from '@/app/models/user'; 
import DatabaseConnection from '@/lib/mongo/db';


export async function GET() {
  let client;
  try {
   
    client = await DatabaseConnection();
    console.log('Database connected successfully !!!');

    const users = await UserModel.find(); 
    return NextResponse.json({ users });
    
  } catch (error: any) {
    console.warn('Error connecting DB', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
