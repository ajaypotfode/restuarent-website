import { Router } from "express"
import { addFoodItem, deleteFoodItem, getFoodItem, getFoodById, updateFoodItem } from "../controllers/foodItem-cotrollers.js";
import verifyToken from '../middleware/verifyToken.js'
import { addUser, getUser } from "../controllers/signUp-controller.js";
import { loginUser } from "../controllers/login-controller.js";

const router = Router()
// router.use(verifyToken)
router.route("/get/foodItem").get(getFoodItem)
router.use(verifyToken)
router.route("/add/foodItem").post(addFoodItem)
router.route("/update/foodItem/:id").put(updateFoodItem)
router.route("/delete/foodItem/:id").delete(deleteFoodItem)
router.route("/get/foodItem/:id").get(getFoodById)


export default router;