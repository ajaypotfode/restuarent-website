import mongoose from "mongoose"

const foodItemModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "food Name is required"]
    },
    description: {
        type: String
    },
    type: {
        type: String,
        required: [true, "Food Type is required"]
    },
    price: {
        type: String,
        required: [true, "price is required"]
    },
    image: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now

    }
})

const FoodItem = mongoose.models.foodItems|| mongoose.model("foodItems", foodItemModel);
export default FoodItem