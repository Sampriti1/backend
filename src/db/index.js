import mongoose from "mongoose"
import { DB_NAME } from "../constants.js";


const connectDB = async () => { //database connection function
    try {
    const connectionInstance =     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`); //here connection is an object
      }  catch(error){
            console.log("MONGODB connection error")
            process.exit(1)
        }
    }

    export default connectDB
