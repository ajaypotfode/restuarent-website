import mongoose from "mongoose";

const orderItemsModel = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    image: { type: String },
    price: { type: String, required: true },
    quantity: { type: String, default: 1, required: true },
    createdAt: { type: Date, dafault: Date.now }

})

const orderModel = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    items: [orderItemsModel],
    totalAmount: { type: String, required: true },
    status: { type: String, default: 'panding', required: true },
    createdAt: { type: Date, default: Date.now }
    // productId:
    // mongoose.Schema.Types.ObjectId
})


const Order = mongoose.models.myorders|| mongoose.model("myorders", orderModel)

export default Order
