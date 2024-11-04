
import AllMenu from './AllMenu'
import AddMenu from './AddMenu'
import Link from 'next/link'
import Image from 'next/image'
const Admin = () => {
  return (
    <div className="dashboard">
      <AllMenu />
      <AddMenu />
    </div>
  )
}

export default Admin