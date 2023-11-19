import express from "express";
import {
  addSpecialist,
  getSpecialists,
} from "../controllers/specialistController";

const specialistRouter = express.Router();

specialistRouter.post("/add", addSpecialist);
specialistRouter.get("/", getSpecialists);

export default specialistRouter;
