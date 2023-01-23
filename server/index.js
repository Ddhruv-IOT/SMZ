import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import {router, rot} from './routes/route.js';



const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));
app.use("/register", router);
app.use("/login", rot);

mongoose.connect('mongodb://localhost:27017/stack1').then(()=>{
    const port = 5000
    app.listen(port, console.log(`Started on Port ${port}`));
})
