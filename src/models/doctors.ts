import mongoose, { Document, Model, Schema } from "mongoose";

export interface IDoctor extends Document {
  name: string;
  image: string;
  role: string;
  experience: number;
  fees: number;
  place: string;
  chamber: string;
  rating: number;
  patients: number;
  availability: boolean;
}

const doctorSchema: Schema<IDoctor> = new Schema<IDoctor>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  chamber: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  patients: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});

const Doctor: Model<IDoctor> = mongoose.model<IDoctor>("Doctor", doctorSchema);
export default Doctor;
