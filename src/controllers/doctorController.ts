import { Request, Response } from "express";
import Doctor, { IDoctor } from "../models/doctors";

const addDoctor = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    image,
    role,
    experience,
    fees,
    place,
    chamber,
    rating,
    patients,
    availability,
  } = req.body as IDoctor;

  if (
    name === undefined ||
    image === undefined ||
    role === undefined ||
    experience === undefined ||
    fees === undefined ||
    place === undefined ||
    chamber === undefined ||
    rating === undefined ||
    patients === undefined ||
    availability === undefined
  ) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const newDoctor: IDoctor = new Doctor({
      name,
      image,
      role,
      experience,
      fees,
      place,
      chamber,
      rating,
      patients,
      availability,
    });

    await newDoctor.save();
    res.status(201).json({ status: 201, message: "Doctor added successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctors = async (_req: Request, res: Response): Promise<void> => {
  let doctors: IDoctor[];
  try {
    doctors = await Doctor.find();
    res.status(200).json({ status: 200, doctors });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getDoctorsbyRole = async (
  __req: Request,
  res: Response
): Promise<void> => {
  let doctorsbyrole: IDoctor[];
  const role = __req.params.role as string;
  const decodedRole = decodeURIComponent(role!);
  try {
    doctorsbyrole = await Doctor.find({ role: decodedRole }).collation({
      locale: "en",
      strength: 2,
    });

    res.status(200).json({ status: 200, doctorsbyrole });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const updateDoctorbyId = async (req : Request, res : Response) : Promise<void> => {
  const { id } = req.params;
  try{
    const updatedDoctor = await Doctor.findByIdAndUpdate(id , {$set: req.body} , {new:false});
    if (updatedDoctor) {
      res.status(200).json({
        status: 200,
        message: "Doctor updated successfully",
        updatedDoctor,
      });
    } else {
      res.status(404).json({ status: 404, message: "Doctor not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

const deleteDoctorbyId = async (req : Request, res : Response) : Promise<void> => {
  const { id } = req.params;
  try{
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    if (deletedDoctor) {
      res.status(200).json({
        status: 200,
        message: "Doctor deleted successfully",
        deletedDoctor,
      });
    } else {
      res.status(404).json({ status: 404, message: "Doctor not found" });
    }
  }
  catch(error:any){
    res.status(500).json({ message: error.message });
  }
}

export { addDoctor, getDoctors, getDoctorsbyRole , updateDoctorbyId , deleteDoctorbyId };
