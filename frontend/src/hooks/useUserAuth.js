"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData, getSignUpData, loginUser, logoutUser, signupUser } from '../redux/slice/userSlice';
import { toast } from 'react-toastify';
import { signUpFormValidate } from '../formValidation/signUpFormValidate';
import { loginFormValidate } from '../formValidation/loginFormValidate';
import token from '../service/accessToken-service';
import { setIsHydrated, setIsToken, setRole } from '../redux/slice/globalSlice';
import { useRouter } from 'next/navigation';

const UseUserAuth = () => {
    const { signUpData, loginData } = useSelector((state) => state.user);
    const { loading, error, formError, isHydrated, isToken, role } = useSelector((state) => state.globalComponent)
    const router = useRouter()

    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)

    const handleLoginData = (e) => {
        const { name, value } = e.target
        dispatch(getLoginData({ ...loginData, [name]: value }))
    }

    const handleSignUpData = (e) => {
        const { name, value } = e.target
        dispatch(getSignUpData({ ...signUpData, [name]: value }))
    }


    const getUserSignUp =async (e) => {
        e.preventDefault()

        if (signUpFormValidate(signUpData, dispatch)) {
            const response =await dispatch(signupUser(signUpData)).unwrap()
            if (response.success) {
                toast.success("User created Successfully!!!")
                router.push("/login")
            }
        }
    }


    const getUserLogin = async (e) => {
        e.preventDefault()
        if (loginFormValidate(loginData, dispatch)) {
            const response = await dispatch(loginUser(loginData)).unwrap()
            if (response.success) {
                toast.success("User Login Successfully!!!")
            }
        }
    }

    const getUserLogout = () => {
        dispatch(logoutUser())
    }

    const getToken = () => {
        dispatch(setIsToken(token))
    }

    const getSetIsHydrated = () => {
        dispatch(setIsHydrated())
    }

    const getSetRole = () => {
        let role
        if (typeof window !== "undefined") {
            role = localStorage.getItem("role");
            role = role ? JSON.parse(role) : null;
        }
        dispatch(setRole(role))
    }

    return {
        signUpData,
        loginData,
        handleLoginData,
        handleSignUpData,
        getUserLogin,
        getUserSignUp,
        getUserLogout,
        setShowPassword,
        showPassword,
        loading,
        error,
        formError,
        isHydrated,
        isToken,
        getToken,
        getSetIsHydrated,
        role,
        getSetRole
    }
}

export default UseUserAuth