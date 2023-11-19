import express from "express";
import {
  addDoctor,
  getDoctors,
  getDoctorsbyRole,
  updateDoctorbyId,
  deleteDoctorbyId
} from "../controllers/doctorController";

const doctorRouter = express.Router();

doctorRouter.post("/add", addDoctor);
doctorRouter.get("/", getDoctors);
doctorRouter.get("/:role", getDoctorsbyRole);
doctorRouter.put("/update/:id", updateDoctorbyId);
doctorRouter.delete("/:id", deleteDoctorbyId);

export default doctorRouter;
