import express from "express";
import {
  addSpecialist,
  getSpecialists,
  updateSpecialistByTitle,
  deleteSpecialistByTitle
} from "../controllers/specialistController";

const specialistRouter = express.Router();

specialistRouter.post("/add", addSpecialist);
specialistRouter.get("/", getSpecialists);
specialistRouter.put("/update/:title", updateSpecialistByTitle);
specialistRouter.delete("/:title", deleteSpecialistByTitle);

export default specialistRouter;
