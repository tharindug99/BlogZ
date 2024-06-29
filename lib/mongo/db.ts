import mongoose from "mongoose";

const URL = process.env.NEXT_PUBLIC_MONGODB_URI

const DatabaseConnection = async () => {
  try {
    await mongoose.connect(URL), {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        connectTimeoutMS: 30000,
        keepAlive: 1
    }
    
  } catch (error) {
    throw new Error("Error in connecting to MongoDB Database");
  }
} 

export default DatabaseConnection;