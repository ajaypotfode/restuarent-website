import Order from "../models/order-model.js"

export const getOrder = async (req, res) => {
    // const userId = req.params
    const userId= req.user.userId
    // console.log("userId :",userId);
    
    try {
        const order = await Order.find({userId})
        return res.status(200).json({ message: "order data fetched SuccessFully!!", success: true, result: order })
    } catch (error) {
        return res.status(200).json({ message: "failed to fetch order data", success: false, error })
    }
}

export const addOrder = async (req, res) => {
    // const {}
    const userId = req.user.userId
    const cartItem = req.body

    try {
        if (!cartItem || cartItem.length === 0) {
            return res.status(400).json({ message: 'No items in the cart.' });
        }

        const orderItem = cartItem.map((item) => {
            // console.log("cart Item Is :", item)
            return {
                orderId: item._id,
                name: item.name,
                type: item.type,
                image: item.image,
                price: item.price,
                quantity: item.quantity,
            }
        })

        const totalAmount = orderItem.reduce((sum, item) => sum + item.price * item.quantity, 0)

        const newOrder = new Order({
            userId: userId,
            items: orderItem,
            totalAmount: totalAmount
        })

        await newOrder.save()

        res.status(201).json({ message: 'Order placed successfully.', success: true,result:newOrder });

    } catch (error) {
        res.status(500).json({ message: 'Failed to place order.', success: false, error:error });
    }
}


export const deleteOrder = async (req, res) => {
    const { id } = req.params
    try {
        const deleteOrder = await Order.findByIdAndDelete(id)
        if (!deleteOrder) {
            return res.status(404).json({ message: "Order not found", success: false });
        }
        res.status(200).json({ message: "Order deleted Success!!", success: true, result: deleteOrder });
    } catch (error) {
        res.status(500).json({ message: "failed to delete order", error });
    }
}