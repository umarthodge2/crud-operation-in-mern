import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/routes.js"



const app = express();
const PORT = 8000;


//cors
app.use(cors());


//middleware
app.use(express.json());


//dotenv
dotenv.config();


app.use('/',Routes);


//body parser
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true})); 



//default endpoint
// app.use('/',Routes);


//dotenv username and password
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

//mongoose connect
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
//   console.log("Connected successfully");
});

Connection(username,password);

//server listen
app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))