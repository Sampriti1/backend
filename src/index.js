//require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express";
//import mongoose from "mongoose";
 // import {DB_NAME} from "./constants";
import connectDB from "./db/index.js"; 
dotenv.config({
    path: './env'
})
const app = express();
connectDB();
const PORT = process.env.PORT || 8000;
app.listen(PORT,() =>
{
    console.log(`Server running on port ${PORT}`)
});
