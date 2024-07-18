import { NextRequest, NextResponse } from "next/server";
import DatabaseConnection from "@/lib/mongo/db";
import PostsModel from "@/app/models/post";
import mongoose from "mongoose";
import UserModel from "@/app/models/user";

export async function GET(req: NextRequest) {
  try {
    const segments = req.url.split("/");
    const userIdIndex = segments.indexOf("users") + 1;
    const userId =
      userIdIndex >= 0 && userIdIndex < segments.length
        ? segments[userIdIndex]
        : null;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error("Invalid userId in URL path");
    }

    // Connect to the database
    await DatabaseConnection();
    console.log("Connected to MongoDB");

    // Fetch posts from the database

    const user = await UserModel.findById(userId);
    const posts = await PostsModel.findById(user.posts);
    console.log(`Posts found for userId ${userId}:`, posts);

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error: any) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
