import { compare } from "bcryptjs"
import User from "../models/signUp-model.js"
import jwt from "jsonwebtoken"

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(200).json({ message: "invalid Email!!", success: false })
        }

        const isMatch = await compare(password, user.password)
        if (!isMatch) {
            return res.status(200).json({ message: "invalid Password!!", success: false })
        }

        // to handle Admin Role via jwt Token 
        let token

        if (email == process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSWORD) {
            token = jwt.sign({ userId: user._id, role: "admin" }, process.env.JWT_SECRET, {
                expiresIn: '1d'
            })
            return res.status(200).json({ message: "user Login Success!!", token, success: true, result: user })
        }

        // to handle user Role via jwt token
        token = jwt.sign({ userId: user._id, role: "user" }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        return res.status(200).json({ message: "user Login Success!!", token, success: true, result: user })

    } catch (error) {
        return res.status(500).json({ message: "Login Failed!!", success: false, error })
    }
}
