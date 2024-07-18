import { NextRequest, NextResponse } from "next/server";
import DatabaseConnection from "@/lib/mongo/db";
import UserModel from "@/app/models/user";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await DatabaseConnection();
    console.log("MongoDB connected successfully!");

    const userData = await req.json(); 
    const newUser = new UserModel(userData);
    console.log("newUser" + userData);

    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User created successfully", user: savedUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user", error },
      { status: 500 }
    );
  }
}
