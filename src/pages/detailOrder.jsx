import React from 'react'
import Header  from '../components/Header';
import Footer from "../components/Footer";
import { detailProductOrder } from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { getOrderIdDetail } from '../https/order';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function detailOrder() {
  let { id } = useParams();
  // const getUserData = JSON.parse(localStorage.getItem('dataUser'))
  const user = useSelector(state => state.user.userInfo)
  const jwt = user.token
  const [userData, setUserData] = useState({})
  const [orderData, setOrderData] = useState(null)
  useEffect(() => {
    getOrderIdDetail(id, jwt)
    .then((res) => {
      console.log(res)
      setUserData(res.data.data[0])
      setOrderData(res.data.result)
    }) .catch((err) => {
      console.log(err)
    })
  }, []);
  const saipul = () => {
    console.log(userData)
  }
  const hotOrNot = () => {
    if (orderData.Hot = true) 
    {return "Hot"} return "Ice";
  }
  return (
    <>
    <Header />
    <main className='px-2 py-2 pt-[38px] md:px-10 md:pt-[58px] desk:px-def desk:pt-[78px] flex flex-col gap-2'>
      <p className='text-2xl font-semibold lg:text-3xl desk:text-5xl'>Order #{userData.Order_id}</p>
      <p className='text-footer text-sm lg:text-base'>21 March 2023 at 10:30 AM</p>
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-8'>
      <section className='text-base flex-1'>
        <p className='text-xl lg:text-2xl mb-4'>Order Information</p>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="person-outline"></ion-icon>
            <p onClick={saipul}>Fullname</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.User_Name}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="location-outline"></ion-icon>
            <p>Address</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.Address}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="call-outline"></ion-icon>
            <p>Phone</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.Phone}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="card-outline"></ion-icon>
            <p>Payment Method</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.Payment_Type}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="cube-outline"></ion-icon>
            <p>Shipping</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.Serving_Type}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="repeat-outline"></ion-icon>
            <p>Status</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>{userData.Status}</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5'>
          <div className='flex items-center gap-2 text-footer'>
            <p>Total Transaksi</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>IDR {userData.Total_Transactions}</p>
          </div>
        </div>
      </section>
      <section className='flex-1'>
        <p className='text-xl lg:text-2xl mb-4'> Your Order</p>
        <div className='flex flex-col'>
          {/* {productOrder()}
          {productOrder()}
          {productOrder()} */}
          {orderData ? (
                    orderData.map((order, index) => (
                    <div key={index}>
                    {detailProductOrder({
                      title: order.Product,
                      hot: hotOrNot(),
                      size: order.Size,
                      quantity: order.Quantity,
                      serve_id: userData.Serving_Type,
                      price: order.Price_per_product,
                    })}
                  </div>
                  ))
                  ) : (
                  <div className='absolute text-xl md:text-2xl lg:text-2xl justify-center font-semibold text-footer'>
                      No product information available.
                  </div>
                   )}
        </div>
      </section>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default detailOrder
