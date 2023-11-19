import express, { Request, Response } from "express";
import doctorRouter from "./src/routes/doctorRouter";
import specialistRouter from "./src/routes/specialistRouter";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/connectDB";
import helmet from "helmet";
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "*",
  })
);
connectDB();
app.get("/", (req: Request, res: Response) => {
  res.send("Server Running !");
});
app.use("/api/doctors", doctorRouter);
app.use("/api/specialists", specialistRouter);

app.listen(port, () => {
  console.log(`CareJar Running !`);
});
