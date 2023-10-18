import { useState } from 'react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { useUserContext } from "../context/context";
import { loginUser } from '../https/login';

function login() {
  const navigate = useNavigate();
  const [isPwdWrong, setIsPwdWrong] = useState(false);
  const setShowPwdWrongModal = () => {
    setIsPwdWrong((state) => !state);
  }
  const [isPwdShown, setIsPwdShown] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  }
  const [msg, setMsg] = useState('');
  const {changeUser} = useUserContext();
  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.user_email.value,
      password: e.target.pwd.value,
    };
    // console.log(loginInformation);
    loginUser(body)
    .then((res) => {
      //   console.log(res.data); 
        changeUser({isUserAvailable: true,
                    userInfo: res.data.data});
        localStorage.setItem("token", res.data.data.token)
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        setMsg(err.response.data.msg)
        setShowPwdWrongModal()});
  };
  return (
    <>
    <div className="flex h-screen">
      <div className="hidden md:block">
        <img
          src="/webp/Rectangle 289 (1).webp"
          alt="image"
          className='h-screen'
        />
      </div>
      <form onSubmit={submitHandler} className="flex-1 flex justify-center flex-col gap-y-5 px-2 md:px-10 desk:pr-def py-9">
        <div className="flex gap-2 items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
            <path d="M23 8.5H1C0.734784 8.5 0.48043 8.60536 0.292893 8.79289C0.105357 8.98043 0 9.23478 0 9.5V15.5C0.00298857 17.2025 0.367076 18.885 1.06822 20.4364C1.76937 21.9878 2.79163 23.3728 4.0675 24.5H1C0.734784 24.5 0.48043 24.6054 0.292893 24.7929C0.105357 24.9804 0 25.2348 0 25.5C0 25.7652 0.105357 26.0196 0.292893 26.2071C0.48043 26.3946 0.734784 26.5 1 26.5H23C23.2652 26.5 23.5196 26.3946 23.7071 26.2071C23.8946 26.0196 24 25.7652 24 25.5C24 25.2348 23.8946 24.9804 23.7071 24.7929C23.5196 24.6054 23.2652 24.5 23 24.5H19.9325C21.464 23.1426 22.6254 21.4182 23.3075 19.4888C24.5776 19.4105 25.7701 18.8509 26.642 17.924C27.5139 16.997 27.9995 15.7725 28 14.5V13.5C28 12.1739 27.4732 10.9021 26.5355 9.96447C25.5979 9.02678 24.3261 8.5 23 8.5ZM26 14.5C25.9996 15.147 25.79 15.7765 25.4025 16.2946C25.015 16.8127 24.4705 17.1917 23.85 17.375C23.9491 16.7549 23.9993 16.128 24 15.5V10.6725C24.5848 10.8792 25.0911 11.2621 25.4492 11.7685C25.8074 12.2749 25.9998 12.8798 26 13.5V14.5ZM11 5.5V1.5C11 1.23478 11.1054 0.98043 11.2929 0.792893C11.4804 0.605357 11.7348 0.5 12 0.5C12.2652 0.5 12.5196 0.605357 12.7071 0.792893C12.8946 0.98043 13 1.23478 13 1.5V5.5C13 5.76522 12.8946 6.01957 12.7071 6.20711C12.5196 6.39464 12.2652 6.5 12 6.5C11.7348 6.5 11.4804 6.39464 11.2929 6.20711C11.1054 6.01957 11 5.76522 11 5.5ZM15 5.5V1.5C15 1.23478 15.1054 0.98043 15.2929 0.792893C15.4804 0.605357 15.7348 0.5 16 0.5C16.2652 0.5 16.5196 0.605357 16.7071 0.792893C16.8946 0.98043 17 1.23478 17 1.5V5.5C17 5.76522 16.8946 6.01957 16.7071 6.20711C16.5196 6.39464 16.2652 6.5 16 6.5C15.7348 6.5 15.4804 6.39464 15.2929 6.20711C15.1054 6.01957 15 5.76522 15 5.5ZM7 5.5V1.5C7 1.23478 7.10536 0.98043 7.29289 0.792893C7.48043 0.605357 7.73478 0.5 8 0.5C8.26522 0.5 8.51957 0.605357 8.70711 0.792893C8.89464 0.98043 9 1.23478 9 1.5V5.5C9 5.76522 8.89464 6.01957 8.70711 6.20711C8.51957 6.39464 8.26522 6.5 8 6.5C7.73478 6.5 7.48043 6.39464 7.29289 6.20711C7.10536 6.01957 7 5.76522 7 5.5Z" fill="#8E6447"/>
          </svg>  
          <p className='font-logo text-brown text-2xl'>
            Coffee Shop
          </p>
        </div>
        <p className='text-xl'>Login</p>
        <p className='text-sm lg:text-base'>Fill out the form correctly</p>
        <p className='text-sm lg:text-base'>Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" placeholder="Enter your Email" name='user_email' className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p className='text-sm lg:text-base'>Password</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="bag-outline"></ion-icon>
          <input type={isPwdShown ? "text" : "password"} placeholder="Enter your password" name='pwd'  className='flex-1 outline-none text-sm lg:text-base'/>          
          <div onClick={showPwdHandler}>
            <ion-icon name="eye-off-outline"></ion-icon>
          </div>
        </div>
        <div className="flex">
          <p className='flex-1 hidden text-red-600'>Incorrect Password</p>
          <p onClick={() => navigate("/resetpassword")} className='flex-1 flex justify-end text-primary text-sm'>Lupa password?</p>
        </div>
        <div className="">
          <button type='submit' className='w-full bg-primary p-3 flex items-center justify-center rounded-lg'>Log In</button>
        </div>
        <div className='flex gap-2 justify-center'>
          <p  className='text-sm lg:text-base flex justify-center gap-2'>
            Not Have An Account? 
          </p>
          <p className='text-sm lg:text-base text-primary cursor-pointer' onClick={() => navigate("/register")}>Register</p>
        </div> 
        <p className="flex justify-center">or</p>
        <div className="flex gap-4">
          <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solid border-order rounded-lg flex justify-center items-center gap-2">
            <img
              src="/webp/bx_bxl-facebook-circle.webp"
              alt="facebook"
            />
            <p className='hidden mobile:block'>Facebook</p>
          </div>
          <div className="cursor-pointer flex-1 h-10 w-10 border-2 border-solid border-order rounded-lg flex justify-center items-center gap-2">
            <img src="/webp/flat-color-icons_google.webp" alt="google" />
            <p className='hidden mobile:block'>Google</p>
          </div>
        </div>
      </form>
    </div>
    <div
      className={`${isPwdWrong ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="myModals"
    >
      <div
        className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
      >
        <p className="text-red-700">{msg}</p>
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="closeModalBtn" onClick={setShowPwdWrongModal}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default login
