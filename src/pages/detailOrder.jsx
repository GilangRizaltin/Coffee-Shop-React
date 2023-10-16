import React from 'react'
import Header  from '../components/header';
import Footer from "../components/footer";
import { productOrder } from '../components/productCard';

function detailOrder() {
  return (
    <>
    <Header />
    <main className='px-2 py-2 pt-[38px] md:px-10 md:pt-[58px] desk:px-def desk:pt-[78px] flex flex-col gap-2'>
      <p className='text-2xl font-semibold lg:text-3xl desk:text-5xl'>Order #12354-09893</p>
      <p className='text-footer text-sm lg:text-base'>21 March 2023 at 10:30 AM</p>
      <div className='flex flex-col gap-2 lg:flex-row lg:gap-8'>
      <section className='text-base flex-1'>
        <p className='text-xl lg:text-2xl mb-4'>Order Information</p>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="person-outline"></ion-icon>
            <p>Fullname</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Ghaluh Wizard Anggoro</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="location-outline"></ion-icon>
            <p>Address</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Griya bandung indah</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="call-outline"></ion-icon>
            <p>Phone</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>082116304338</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="card-outline"></ion-icon>
            <p>Payment Method</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Cash</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="cube-outline"></ion-icon>
            <p>Shipping</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Dine In</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5 border-b-2 border-solid border-order'>
          <div className='flex items-center gap-2 text-footer'>
            <ion-icon name="repeat-outline"></ion-icon>
            <p>Status</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Done</p>
          </div>
        </div>
        <div className='flex px-2.5 py-5'>
          <div className='flex items-center gap-2 text-footer'>
            <p>Total Transaksi</p>
          </div>
          <div className='flex-1 flex justify-end font-semibold'>
            <p>Idr 40.000</p>
          </div>
        </div>
      </section>
      <section className='flex-1'>
        <p className='text-xl lg:text-2xl mb-4'> Your Order</p>
        <div className='flex flex-col'>
          {productOrder()}
          {productOrder()}
          {productOrder()}
        </div>
      </section>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default detailOrder
