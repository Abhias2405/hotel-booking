import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
import userRoutes from './routes/users'
import authRoutes from './routes/auth'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string); // when we import form env it is undefine so we use string

const app = express();
app.use(express.json()); // convert the body of api request in json
app.use(express.urlencoded({extended: true})); //parse  the URL to get the create parameters
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }));

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);

app.listen(7000,()=>{
    console.log("server is running at localhost 7000")
})