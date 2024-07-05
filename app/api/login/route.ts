import { NextRequest, NextResponse } from "next/server";
import DatabaseConnection from "@/lib/mongo/db";
import UserModel from "@/app/models/user";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await DatabaseConnection();
    console.log("MongoDB connected successfully!");

    // Extract login credentials from request body
    const { email, password } = await req.json();

    // Find user by email
    const user = await UserModel.findOne({ email });

    // If user not found, return error
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check if password matches (for simplicity, assuming plain text comparison)
    if (password !== user.password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // If credentials are correct, return success message
    return NextResponse.json(
      { message: "Login successful", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { message: "Failed to login", error },
      { status: 500 }
    );
  }
}
