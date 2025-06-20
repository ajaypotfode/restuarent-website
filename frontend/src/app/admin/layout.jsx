"use client"
import '../../assets/css/admin.css'
import Image from 'next/image'
import UseFoodData from '../../hooks/useFoodItem'


export default function RootLayout({ children }) {
  const { backToPage } = UseFoodData()
  return (
    <div>
      <nav className="navbar" >
        {/* <nav className="navbar"> */}
        <ul>
          <li>
            <a href="#" className="logo">
              <Image src="/Images/logo.png" alt="Example Image" width={70} height={200} />
            </a>
          </li>
          <li> <h1 className="heading">Admin <span>Dashboard</span></h1></li>
          <li><div onClick={backToPage} className="btn">Back</div></li>
        </ul>
      </nav>
      <div className='admin-dashboard-container scrollbar-hidden'>
        {children}
      </div>
    </div>
  );
}