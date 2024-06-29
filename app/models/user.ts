import mongoose, { Document, Schema } from 'mongoose';

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
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
  posts: mongoose.Types.ObjectId[]; // Use mongoose.Types.ObjectId for posts
}

const geoSchema = new Schema<Geo>({
  lat: { type: String, required: true },
  lng: { type: String, required: true }
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  suite: { type: String, required: true },
  city: { type: String, required: true },
  zipcode: { type: String, required: true },
  geo: { type: geoSchema, required: true }
});

const companySchema = new Schema<Company>({
  name: { type: String, required: true },
  catchPhrase: { type: String, required: true },
  bs: { type: String, required: true }
});

const userSchema = new Schema<User>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: addressSchema, required: true },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: { type: companySchema, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }] // Use Schema.Types.ObjectId for posts
});

// Ensure model is defined only once
const UserModel = mongoose.models.User || mongoose.model<User>('User', userSchema);

export default UserModel;
