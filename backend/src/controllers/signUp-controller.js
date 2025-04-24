// import { User } from "../models/signUp-model"
import { hash } from "bcryptjs"
import User from "../models/signUp-model.js"

export const addUser = async (req, res) => {
    const { email, username, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "user Already Created!!", success: false })
        }
        const hashedPassword = await hash(password, 10);
        const newUser = new User({
            email, username, password: hashedPassword
        })

        const response = await newUser.save()
        return res.status(200).json({ message: "user created Successfully!!", success: true, result: response })
    } catch (error) {
        return res.status(500).json({ message: "failed to create User!", success: false, error })
    }
}


export const getUser=async (req,res)=>{
   try {
      const user= await User.find()
      res.status(200).json({ message: "user is fetched successfully!", success: true, result: user})
    } catch (error) {
      res.status(500).json({ message: "Error fetching User", success: false, error });
    }
}