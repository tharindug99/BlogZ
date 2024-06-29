import mongoose, { Document, Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

export interface Post extends Document {
  id: string;
  title: string;
  content: string;
  author: ObjectId;
  created_at: Date;
  updated_at: Date;
}

const postSchema = new Schema<Post>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const PostModel = mongoose.models.Post || mongoose.model<Post>('Post', postSchema);

export default PostModel;
