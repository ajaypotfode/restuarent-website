"use client"
import '../../assets/css/login.css'
import Link from 'next/link'
import UseUserAuth from '../../hooks/useUserAuth'
import { FormSpinner, PageSpinner } from '../../components/Loaders'


const SignUp = () => {
  const { signUpData, handleSignUpData, getUserSignUp, setShowPassword, showPassword, formError, loading } = UseUserAuth()

  return (
    <>
      <div className="signup-container">
        {/* <div className='signup-form-wrapper scrollbar-hidden'> */}
        {/* {
          loading['user/signup'] ? <FormSpinner />
            : ( */}
        <div className="signup-form ">
          {
            loading['user/signup'] ? <PageSpinner />
              : (
                <>
                  <h1 className='mb-5'>Sign Up</h1>
                  <form onSubmit={getUserSignUp}>
                    <div className="inputBox">
                      <span ><i className="bi bi-person-circle"></i></span>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={signUpData.username || ""}
                        onChange={handleSignUpData}
                        placeholder="Username" />
                    </div>
                    {formError.username && <p style={{ color: "red", margin: "0px" }} >{formError.username}</p>}

                    <div className="inputBox">
                      <span ><i className="bi bi-envelope"></i></span>
                      <input
                        type="email"
                        id='mail'
                        name="email"
                        value={signUpData.email || ""}
                        onChange={handleSignUpData}
                        placeholder="Email"
                      // onChange={(e) => { setEmail(e.target.value) }} />
                      />
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
                        value={signUpData.password || ""}
                        onChange={handleSignUpData}
                        placeholder="Password"
                      // onChange={(e) => { setPassword(e.target.value) }} />
                      />
                    </div>
                    {formError.password && <p style={{ color: "red", margin: "0px" }} >{formError.password}</p>}

                    <button type="submit"
                      className="signup-button "
                    >Sign Up</button>
                  </form>
                  <div className="sign-up-link ">
                    <p>Already Have Account? <Link href="/login">Login</Link></p>
                  </div>
                </>
              )
          }
        </div>


        {/* </div> */}
      </div>
    </>)
}

export default SignUp