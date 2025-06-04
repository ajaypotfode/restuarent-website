import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteOrderItem, fetchOrderItems } from '../redux/slice/orderSlice'

const UseOrderItem = () => {
  const dispatch = useDispatch()

  const { orderItem } = useSelector(state => state.orderItem)
  const { loading, error,formError } = useSelector((state) => state.globalComponent)


  const getOrderData = () => {
    dispatch(fetchOrderItems())
  }

  const getDeleteOrder = (orderId) => {
    dispatch(deleteOrderItem(orderId))
  }


  return {
    getOrderData,
    orderItem,
    getDeleteOrder,
    loading,
    error,
    formError
  }
}

export default UseOrderItem