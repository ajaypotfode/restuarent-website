"use client"
import { UserAuthContext } from "@/context/userContext";
import Link from "next/link";
import { useContext} from "react"

const AllMenu = () => {
  const context = useContext(UserAuthContext);
  const {foodData, handleDelete} = context
  
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
            foodData.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td><img src={`${item.image}`} width="50" /></td>
                  <td>{item.name}</td>
                  <td>{item.price} rs</td>
                  <td>{item.type}</td>
                  <td>
                    <div className='action-btn'>
                      <button className="admin-btn"><Link href={`/admin/${item._id}`} >Edit</Link></button>
                      <button className="admin-btn"  id='delete-btn' onClick={()=>{handleDelete(item._id)}}>Delete</button>
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