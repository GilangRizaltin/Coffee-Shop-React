import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
  const navigate = useNavigate()
  return (
    <>
    <section className='w-screen flex-row h-fit px-2 sm:w-[15%] lg:w-[20%] sm:h-screen border-r-2 border-solid border-order sm:pl-10 sm:pr-[12px] py-[24px] text-base font-bold flex sm:flex-col gap-y-4 bg-white'>
        <button onClick={() => navigate("/admin")} className='flex justify-center lg:justify-start items-center gap-2 w-full p-4 bg-primary rounded-lg'>
          <ion-icon name="apps-outline"></ion-icon>
          <p className='hidden lg:block'>Dashboard</p>
        </button>
        <button onClick={() => navigate("/admin/product")} className='flex justify-center lg:justify-start items-center gap-2 w-full p-4 rounded-lg'>
          <ion-icon name="beaker-outline"></ion-icon>
          <p className='hidden lg:block'>Product</p>
        </button>
        <button onClick={() => navigate("/admin/order")} className='flex justify-center lg:justify-start items-center gap-2 w-full p-4 rounded-lg'>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <p className='hidden lg:block'>Order</p>
        </button>
        <button onClick={() => navigate("/admin/user")} className='flex justify-center lg:justify-start items-center gap-2 w-full p-4 rounded-lg'>
          <ion-icon name="people-outline"></ion-icon>
          <p className='hidden lg:block'>User</p>
        </button>
        <button className='flex justify-center lg:justify-start items-center gap-2 w-full p-4 rounded-lg'>
          <ion-icon name="log-out-outline"></ion-icon>
          <p className='hidden lg:block'>Log Out</p>
        </button>
    </section>
    </>
  )
}

export default Sidebar
