import React from 'react'
import { useDispatch } from 'react-redux';
import { getLoginData, getSignUpData, loginUser, logoutUser, signupUser } from '../redux/slice/userSlice';

const UseUserAuth = () => {
    const { signUpData, loginData } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLoginData = (e) => {
        const { name, value } = e.target

        dispatch(getLoginData({ [name]: value }))
    }

    const handleSignUpData = (e) => {
        const { name, value } = e.target

        dispatch(getSignUp({ [name]: value }))
    }


    const getUserSignUp = () => {
        dispatch(signupUser(signUpData))
    }

    const getUserLogin = () => {
        dispatch(loginUser(loginData))
    }

    const getUserLogout = () => {
        dispatch(logoutUser())
    }

    return {
        signUpData,
        loginData,
        handleLoginData,
        handleSignUpData,
        getUserLogin,
        getUserSignUp,
        getUserLogout
    }
}

export default UseUserAuth