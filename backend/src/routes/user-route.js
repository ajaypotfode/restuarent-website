import { Router } from "express";
import { addUser, getUser } from "../controllers/signUp-controller.js";
import { loginUser} from "../controllers/login-controller.js";

const router = Router()

router.route("/auth/add/user").post(addUser)
router.route("/auth/get/user").get(getUser)
router.route("/auth/login/user").post(loginUser)

export default router;