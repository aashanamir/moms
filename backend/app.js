import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";


const app = express();

config({
  path : './config/.env'
});


connectDB();



const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};



// Using Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({extended : true}));


// Routes
import User from "./routes/userRoutes.js";
import Subscriber from "./routes/subscriberRoute.js";

//app.use("/api/v1/user" , User);
app.use("/api/v1/user" , Subscriber);


export default app;