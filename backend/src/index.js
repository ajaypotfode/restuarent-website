import express from "express"
import dotenv from "dotenv"
import foodItem from "./routes/foodItem-routes.js"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
const app = express()

// It enables your Express app to understand and parse JSON-formatted request bodies automatically
app.use(express.json())
// app.use(bodyParser.json());

// Enable CORS to allow requests from a different origin (frontend)
app.use(cors());


// configur .env file to get data from it
dotenv.config({
    path: './.env'
})

//routes declaration 
app.use("/api", foodItem)

// server code 
async function serverStart(){
         try {
                await mongoose.connect(process.env.CONNECTION_STR)
        
                // it is use to handle error of express 
                app.on("error", () => {
                    console.log("Error :", error);
                })
        
                app.listen(process.env.PORT ||3000 , () => {
                    console.log("server started at 3000 port");
                })
            } catch (error) {
                console.log("database connection failed", error);
        
            }
}
serverStart()
