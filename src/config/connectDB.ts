import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err: any) {
    console.error(`Error Connecting The Database : ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
