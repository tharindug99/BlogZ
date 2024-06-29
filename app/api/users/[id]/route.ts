import { NextResponse } from 'next/server';
import {users} from '@/lib/data'

const USERS_URL = users;

export async function GET(req: Request) {
    const url = new URL(req.url);
    const id = url.pathname.split('/').pop();

    if (!id) {
        return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    try {
        const response = await fetch(USERS_URL);

        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.statusText}`);
        }

        const users = await response.json();
        const user = users.find((user: { id: number }) => user.id === parseInt(id, 10));

        if (user) {
            return NextResponse.json(user);
        } else {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
