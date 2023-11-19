import { Request, Response } from "express";
import Specialist, { ISpecialist } from "../models/specialists";

const addSpecialist = async (req: Request, res: Response): Promise<void> => {
  const { title, image, description } = req.body as ISpecialist;

  if (title === undefined || image === undefined || description === undefined) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const newSpecialist: ISpecialist = new Specialist({
      title,
      image,
      description,
    });

    await newSpecialist.save();
    res
      .status(201)
      .json({ status: 201, message: "Specialist added successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getSpecialists = async (_req: Request, res: Response): Promise<void> => {
  let specialists: ISpecialist[];
  try {
    specialists = await Specialist.find();
    res.status(200).json({ status: 200, specialists });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { addSpecialist, getSpecialists };
