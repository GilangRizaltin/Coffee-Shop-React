import React from 'react'
import Header from "../components/header";
import Footer from "../components/footer";

function profile() {
  return (
    <>
    <Header/>
    <main className='px-2 md:px-10 desk:px-def font-primary'>
    <p className='pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] font-semibold text-2xl lg:text-3xl desk:text-5xl'>Profile</p>
      <div className='flex flex-col gap-[19px] md:flex-row'>
      <div className="w-full md:w-[428px] h-fit border-2 border-solid border-order py-3 flex flex-col items-center gap-y-4 rounded-lg">
        {/* <div class="name-photo"> */}
          <p className='text-lg font-bold lg:text-2xl'>Gilang Rizaltin</p>
          <p className='text-sm text-footer'>gilangzaltin@gmail.com</p>
          <div class="image lg:w-[113px] lg:h-[113px]">
            <img height={"80px"} width={"80px"} src="/svg/Ellipse 185 (1).svg" className='rounded-full w-full' alt="photo-profile" />
          </div>
          <button className='w-[226px] px-[18px] py-3 bg-primary font-semibold flex justify-center items-center rounded-lg'>Upload New Photo</button>
          <p className='text-base text-footer'>Since <strong>July 2023</strong></p>
        {/* </div> */}
      </div>
      <div className="w-full h-fit border-2 border-solid border-order py-3 px-3 flex flex-col gap-y-4 rounded-lg">
        <p>Full Name</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" placeholder="Enter your fullname" className='flex-1 outline-none'/>
        </div>
        <p>Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" placeholder="Enter your E-Mail"  className='flex-1 outline-none'/>
        </div>
        <p>Phone</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="call-outline"></ion-icon>
          <input type="number" placeholder="Enter your phone number" className='flex-1 outline-none' />
        </div>
        <div className='flex'>
          <p className='flex-1'>Password</p>
          <a href="#" className='flex-1 flex justify-end text-primary'>Set New Password</a>
        </div>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" placeholder="Enter your password"  className='flex-1 outline-none'/>
        </div>
        <p>Address</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="location-outline"></ion-icon>
          <input type="text" placeholder="Enter your address"  className='flex-1 outline-none'/>
        </div>
        <div className='w-full bg-primary p-3 flex items-center justify-center rounded-lg'>
          <p>Submit</p>
        </div>
      </div>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default profile
