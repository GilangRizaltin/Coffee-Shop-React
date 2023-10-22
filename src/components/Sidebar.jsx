import React from 'react'
import Header from './header'
// import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
  const yeyeye = {
    image: "...",
    product_id: 12,
    product_name: "stringify",
    hot_or_not: true,
    size_id: 12,
    quantity: 2,
    price: 3000,
  }
  // const dispatch = useDispatch();
  // const clicked =  () => {
  //   dispatch({
  //     type: "ADD_PRODUCT",
  //     data: yeyeye
  //   })
  // }
  return (
    <>
    <Header />
    <section className='fixed w-[262px] h-screen border-2 border-solid border-black pl-[42px] pr-[12px] py-[24px] text-base font-bold flex flex-col gap-4 '>
        <button className='flex items-center gap-2 w-full p-4 bg-primary rounded-lg'>
        <ion-icon name="apps-outline"></ion-icon>
        <p>Dashboard</p>
        </button>
        <button className='flex items-center gap-2 w-full p-4 rounded-lg'>
        <ion-icon name="apps-outline"></ion-icon>
        <p>Dashboard</p>
        </button>
        <button className='flex items-center gap-2 w-full p-4 rounded-lg'>
        <ion-icon name="apps-outline"></ion-icon>
        <p>Dashboard</p>
        </button>
        <button className='flex items-center gap-2 w-full p-4 rounded-lg'>
        <ion-icon name="apps-outline"></ion-icon>
        <p>Dashboard</p>
        </button>
    </section>
    </>
  )
}

export default Sidebar
