"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react"

const AllMenu = ({
  foodItem,
  getFoodItems,
  removeFoodItem,
  // filterCategory,
  resetCurrentFoodItem,
  imageInputRef }) => {


  useEffect(() => {
    getFoodItems("all")
  }, [])

  return (
    <>
      <table className="data-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            foodItem.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td><Image src={`${item.image || ""}`} width="50" alt=" image not Found" height="50" /></td>
                  <td>{item.name}</td>
                  <td>{item.price} rs</td>
                  <td>{item.type}</td>
                  <td>
                    <div className='action-btn'>
                      <button className="admin-btn"><Link href={`/admin/${item._id}`} >Edit</Link></button>
                      <button className="admin-btn" id='delete-btn' onClick={() => { removeFoodItem(item._id) }}>Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default AllMenu