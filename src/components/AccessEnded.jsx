import React from 'react'
import { logOutUser } from '../https/login';
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux';

function AccessEnded() {
    const user = useSelector(state => state.user.userInfo);
    const navigate = useNavigate();
    const onLogOutHandler = () => {
        logOutUser(user.token)
        localStorage.removeItem("persist:lib")
        window.location.reload();
        navigate("/")
      }
  return (
    <div
      className={`flex fixed inset-0 items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
    >
      <div
        className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
      >
        <p className="text-red-700">Access Ended. Please Re-Login</p>
        <div className="flex justify-end items-center gap-4 text-black">
          <button onClick={onLogOutHandler}
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="closeModalBtn"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default AccessEnded
