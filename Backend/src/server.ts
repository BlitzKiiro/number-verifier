import express, { Application } from "express";
import { config } from "dotenv";
import colors from "colors";
import morgan from "morgan";
import errorMiddleware from "./middlewares/errorMiddleware";
import connectDB from "./config/db";
import usersRoute from "./routes/usersRoutes";
import numbersRoute from "./routes/numbersRoute";

import cors from "cors";
import path from "path";

//clearing console on start/restart
console.clear();

//enabling colors string type extending
colors.enable();

//using  dotenv config
config();
const port = process.env.PORT;

//connecting to db
connectDB();

//express app
const app: Application = express();

//enabling cors
app.use(cors());

//express middlewares
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: false }));

//morgan requests logging middleware
app.use(morgan("dev"));

//USING ROUTES
app.use("/api/users", usersRoute);
app.use("/api/numbers", numbersRoute);

//error handle middleware
app.use(errorMiddleware);

//server static frontend
app.use(express.static(path.join(__dirname, "../static/")));
app.use("/*", express.static(path.join(__dirname, "../static/")));

//listening to port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`.blue.bold);
});
