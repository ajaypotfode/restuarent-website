import { Router } from "express";
// import verifyToken from '../middleware/verifyToken.js'
import { addOrder, deleteOrder, getOrder } from "../controllers/order-controller.js";

const router = Router()
// router.use(verifyToken)
router.route("/get/order").get(getOrder)
router.route("/add/order").post(addOrder)
router.route("/delete/order/:id").delete(deleteOrder)
// router.route("/update-status/order").put()

export default router