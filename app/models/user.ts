import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User extends Document {
  id: number;
  name: string;
  username: string;
  password: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: mongoose.Types.ObjectId[]; // Use mongoose.Types.ObjectId for posts
}

const geoSchema = new Schema<Geo>({
  lat: { type: String },
  lng: { type: String },
});

const addressSchema = new Schema<Address>({
  street: { type: String },
  suite: { type: String },
  city: { type: String },
  zipcode: { type: String },
  geo: { type: geoSchema },
});

const companySchema = new Schema<Company>({
  name: { type: String },
  catchPhrase: { type: String },
  bs: { type: String },
});

const userSchema = new Schema<User>({
  id: { type: Number, unique: true },
  name: { type: String },
  username: { type: String, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: addressSchema },
  phone: { type: String },
  website: { type: String },
  company: { type: companySchema, default: null },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

// Ensure model is defined only once
const UserModel =
  mongoose.models.User || mongoose.model<User>("User", userSchema);

export default UserModel;
