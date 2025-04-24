import mongoose from "mongoose"

// export const connectionStr = process.env.CONNECTION_STR


const connectDatabase = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already Database connected!!");
        return
    }

    try {
        await mongoose.connect(process.env.CONNECTION_STR)
        console.log("Database connection SuccessFully!!");

    } catch (error) {
        console.log("failed to connect with databse :", error);

    }
}
export default connectDatabase