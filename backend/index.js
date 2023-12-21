import express from 'express'
import { dbConnect } from './database/db.js';
import newschema from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

dbConnect();

app.use(cors());
app.use(bodyParser.json())
app.use(express.json())
app.use('/api', newschema);

const port = process.env.PORT
app.listen(port,()=>{
    console.log("server is running on port ", port)
})