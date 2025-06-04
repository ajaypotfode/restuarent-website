import FoodItem from "../models/fooditem-model.js";

// get data from mongo db
export const getFoodItem = async (req, res) => {
  const category = req.query.category
  try {

    let fooditem
    if (category === "all") {
      fooditem = await FoodItem.find()
    } else {
      fooditem = await FoodItem.find({ type: category })
    }
    res.status(200).json({ message: "Food-Item is fetched successfully!", success: true, result: fooditem })
  } catch (error) {
    res.status(500).json({ message: "Error fetching food items", success: false, error });
  }
}

// send data to the mongo db
export const addFoodItem = async (req, res) => {

  const data = req.body
  try {
    const foodItem = await FoodItem.findOne({ name: data.name })

    if (foodItem) {
      return res.status(200).json({ message: "Food-Item is Already present!!", success: false })
    }

    const newfoodItem = new FoodItem(data)
    await newfoodItem.save()
    //  console.log(data);
    return res.status(200).json({ message: "foodItem Added SuccessFully!!", success: true, result: newfoodItem })
  } catch (error) {
    res.status(400).json({ message: "Error creating food item", success: false, error });
  }
}

// uodate existing data 
export const updateFoodItem = async (req, res) => {
  const { id } = req.params
  const data = req.body
  try {
    // Use { new: true } when you want to immediately work with the modified version of the document,
    const updateItem = await FoodItem.findByIdAndUpdate(id, data, { new: true })
    if (updateItem) {
      return res.status(200).json({ message: "foodItem Added SuccessFully!!", success: true, result: updateItem })
    } else {
      return res.status(404).json({ message: "Food item not found", success: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating food item", success: false, error });
  }

}

// delete existing data
export const deleteFoodItem = async (req, res) => {
  const { id } = req.params
  try {
    const deleteItem = await FoodItem.findByIdAndDelete(id)
    // console.log("delete item is :",deleteItem);

    // Send a 204 No Content response to indicate success 
    // res.status(204).end();
    if (!deleteItem) {
      return res.status(404).json({ message: "Food item not found", success: false });
    }
    res.status(200).json({ message: "Food deleted Success!!", success: true, result: deleteItem });
  } catch (error) {
    res.status(500).json({ message: "Error deleting food item", error });
  }
}

export const getFoodById = async (req, res) => {
  const { id } = req.params
  try {
    const foodItem = await FoodItem.findById(id)
    if (foodItem) {
      res.status(200).json({ message: "Food-Item is fetched successfully!", success: true, result: foodItem })
    } else {
      res.status(404).json({ message: "Fooditem not Found ", success: false })
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting food item", error });
  }
}