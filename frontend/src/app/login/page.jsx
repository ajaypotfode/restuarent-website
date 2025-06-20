"use client"
import "../../assets/css/login.css"
import Link from 'next/link'
import UseUserAuth from '../../hooks/useUserAuth';
import Image from 'next/image';
import { FormSpinner, PageSpinner } from "../../components/Loaders";

const Login = () => {
    const { loginData, handleLoginData, getUserLogin, setShowPassword, showPassword, loading, error, formError } = UseUserAuth()

    return (
        <>
            <div className="login-container">
                <nav className="login-navbar">
                    <ul className="navbar-list">
                        <li className="logo-item">
                            <a href="#" className="logo">
                                <Image src="/Images/logo.png" alt="Example Image" width={70} height={200} />
                            </a>
                        </li>
                        <li className="heading-item">
                            <h1 className="heading">
                                Your <span>Orders</span>
                            </h1>
                        </li>
                        <li className="nav-links">
                            <Link href="/" className="btn">Home</Link>
                            {/* <Link href="/menu" className='btn'>Menu</Link> */}
                        </li>
                    </ul>
                </nav>

                <div className="login-form">
                    {
                        loading['user/login'] ?
                            <PageSpinner />
                            : (
                                <>
                                    <h1>Login</h1>
                                    {/* <form action="/login" method="post" onSubmit={userLogin}> */}
                                    <form action="/login" method="post" onSubmit={getUserLogin}>
                                        <div className="inputBox">
                                            <span ><i className="bi bi-envelope"></i></span>
                                            <input
                                                type="email"
                                                id="mail"
                                                name="email"
                                                value={loginData.email || ""}
                                                onChange={handleLoginData}
                                                placeholder="Email" />
                                        </div>
                                        {formError.email && <p style={{ color: "red", margin: "0px" }} >{formError.email}</p>}

                                        <div className="inputBox">
                                            <span onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <i className="bi bi-eye-slash"></i> : <i className="bi bi-eye"></i>
                                                }
                                            </span>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                id='password'
                                                name="password"
                                                value={loginData.password || ""}
                                                onChange={handleLoginData}
                                                placeholder="Password"
                                            // onChange={(e) => { setPassword(e.target.value) }} />
                                            />
                                        </div>
                                        {formError.password && <p style={{ color: "red", margin: "0px" }} >{formError.password}</p>}

                                        <button type="submit" className='login-button'>Login</button>
                                    </form>
                                    <div className="sign-up-link ">
                                        {/* <p>Don't have account? <Link to="/signup">Sign UP</Link></p> */}
                                        <p>Don't have an account ? <Link href="/signup">Sign UP</Link></p>
                                    </div>
                                </>
                            )
                    }
                </div>

            </div>
            {/* <Outlet/> */}
        </>
    )
}

// export const LogOutUser=()=>{
//     const context = useContext(UserAuthContext);
//       return context.LogOut();
// }

export default Login