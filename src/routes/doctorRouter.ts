import express from "express";
import {
  addDoctor,
  getDoctors,
  getDoctorsbyRole,
} from "../controllers/doctorController";

const doctorRouter = express.Router();

doctorRouter.post("/add", addDoctor);
doctorRouter.get("/", getDoctors);
doctorRouter.get("/:role", getDoctorsbyRole);

export default doctorRouter;
