import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(express.json()); // convert the body of api request in json
app.use(express.urlencoded({extended: true})); //parse  the URL to get the create parameters
app.use(cors());


app.get("/api/test", async (req: Request, res: Response)=>{
    res.json({message: "hello"})
})

app.listen(7000,()=>{
    console.log("server is running at localhost 7000")
})