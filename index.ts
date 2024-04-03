import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoute from "./routes/test";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

//use middleware and routes
app.use(cookieParser());
app.use(cors());
app.use('/test', testRoute);


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  // gracefully handle error
  throw new Error(error.message);
});