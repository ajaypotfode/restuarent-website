"use client"
import '../../assets/css/admin.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';


export default function RootLayout({ children }) {
  const pathname = usePathname()

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
          {
            pathname === '/admin' ? <li><Link href="/" className="btn">Home</Link></li> :
              <li><Link href="/admin" className="btn">back</Link></li>
          }
        </ul>
      </nav>
      <div className='admin-dashboard-container scrollbar-hidden'>
        {children}
      </div>
    </div>
  );
}