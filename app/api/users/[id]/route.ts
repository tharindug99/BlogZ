import { NextResponse } from 'next/server';
import UserModel from '@/app/models/user'; 
import DatabaseConnection from '@/lib/mongo/db';

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    let client;
    try {
        client = await DatabaseConnection();
        console.log('Database connected successfully !!!');

        const user = await UserModel.findById(id);
        console.log("This is " + id);

        if (user) {
            return NextResponse.json(user);
        } else {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (error: any) {
        console.warn('Error connecting DB', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
