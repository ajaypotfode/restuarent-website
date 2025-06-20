import express from "express"
import dotenv from "dotenv"
import foodItem from "./routes/foodItem-routes.js"
import user from "./routes/user-route.js"
import order from './routes/orders-route.js'
// import verifyToken from '../middleware/verifyToken.js'
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import connectDatabase from "./utils/db.js"

const app = express()

// It enables your Express app to understand and parse JSON-formatted request bodies automatically
app.use(express.json())
// app.use(bodyParser.json());

// Enable CORS to allow requests from a different origin (frontend)
app.use(cors())
// app.use(cors({
//     origin:"http://localhost:3000",
//     methods:['GET' ,'POST','PUT', 'DELETE'],
//     credentials:true
// }));


// configur .env file to get data from it
dotenv.config({
    path: './.env'
})

//routes declaration 
app.use("/api", user)
// app.use(verifyToken)
app.use("/api", foodItem)
app.use('/api', order)


// server code 
async function serverStart() {
    await connectDatabase()
    try {
        // await mongoose.connect(process.env.CONNECTION_STR)

        // it is use to handle error of express 
        app.on("error", () => {
            console.log("Error :", error);
        })

        app.listen(process.env.PORT || 4000, () => {
            console.log("server started at 4000 port");
        })
    } catch (error) {
        console.log("database connection failed", error);

    }
}
serverStart()
