import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from "morgan";
import cors from 'cors';
import { json, urlencoded } from "body-parser";
import { run } from "./config/mongoDb"
import { router } from './routes/route'
import './config/firebase'
const app: Express = express();
const port = 4000;

run()


app.use(express.static("public"));
app.use(json()); 
app.use(urlencoded({ extended: true })); 
app.use(morgan("dev")); 
app.use(cors())
app.use(router)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});