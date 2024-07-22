import { NextResponse } from "next/server";
import PostModel from "@/app/models/post";
import DatabaseConnection from "@/lib/mongo/db";
import mongoose from "mongoose";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json(
      { message: "Post ID is required" },
      { status: 400 }
    );
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid Post ID format" },
      { status: 400 }
    );
  }

  try {
    // Connect to the database
    await DatabaseConnection();
    console.log("Database connected successfully !!!");

    // Find the post by ID
    const post = await PostModel.findById(id).lean();
    console.log("Retrieved post for ID:", id);

    // Check if the post was found and return the appropriate response
    if (post) {
      console.log("Post found:", post);
      return NextResponse.json(post);
    } else {
      console.log("Post not found for ID:", id);
      return NextResponse.json(
        { message: `Post not found for ID: ${id}` },
        { status: 404 }
      );
    }
  } catch (error: any) {
    console.warn("Error connecting DB", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
