import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "FullName is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const User = mongoose.models.users || mongoose.model("users", userModel);

export default User