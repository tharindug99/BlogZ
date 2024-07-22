import mongoose, { Document, Schema } from "mongoose";
import { ObjectId } from "mongodb";

// Define the possible values for badges as an enum
const BADGES = ["dogs", "cats", "fish", "birds", "hamsters", "all"] as const;
type BadgeType = (typeof BADGES)[number];

export interface Post extends Document {
  title: string;
  content: string;
  author: ObjectId;
  badges: BadgeType[];
  image: string;
  created_at: Date;
  updated_at: Date;
}

const postSchema = new Schema<Post>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  badges: { type: [String], enum: BADGES, default: [] },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
const PostModel =
  mongoose.models.Post || mongoose.model<Post>("Post", postSchema);

export default PostModel;
