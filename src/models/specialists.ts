import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISpecialist extends Document {
  title: string;
  image: string;
  description: string;
}

const specialistSchema: Schema<ISpecialist> = new Schema<ISpecialist>({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Specialist: Model<ISpecialist> = mongoose.model<ISpecialist>(
  "Specialist",
  specialistSchema
);
export default Specialist;
