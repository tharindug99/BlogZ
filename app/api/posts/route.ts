import { NextRequest, NextResponse } from "next/server";
import DatabaseConnection from "@/lib/mongo/db";
import PostsModel from "@/app/models/post";

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await DatabaseConnection();
    console.log("Posts Table connected successfully!!!");

    // Fetch posts from the database
    const posts = await PostsModel.find();

    return NextResponse.json(
      { message: "GET request received", posts },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error handling GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error hii" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log(body);
    // Validate the request body
    const { title, content, author, badges, image } = body;
    if (!title || !content || !author || !badges || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await DatabaseConnection();
    console.log("Posts Table connected successfully!!!");

    // Create a new post
    const newPost = new PostsModel({
      title,
      content,
      author,
      badges,
      image,
      created_at: new Date(),
      updated_at: new Date(),
    });

    // Save the new post to the database
    await newPost.save();

    return NextResponse.json(
      { message: "Post created successfully", post: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
