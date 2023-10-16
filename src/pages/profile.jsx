import React, { useState } from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import { useUserContext } from '../context/context';
import { updateDataUser } from '../https/profile';

function profile() {
  const {user, changeUser} = useUserContext();
  const [isUploadImage, setImage] = useState(false)
  const setUploadImage = () => {
    setImage((state) => !state)
  }
  const url = import.meta.env.VITE_BACKEND_HOST
  let imageUrl = (user.userInfo ? url + user.userInfo.photo : url + "/img/user_image-1695737375917-95805558.jpeg")
  const submitUpdateImage = (e) => {
    e.preventDefault();
    // const id = user.userInfo.userId
    // const user_Image = e.target.a.files[0];
    // user_Image.append("user_photo_profile", e.target.a.files[0]);
    const body = {
      id: user.userInfo.userId,
      user_photo_profile: e.target.a.files[0],
    };
    updateDataUser(body)
    .then((res) => {
      console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  }
  return (
    <>
    <Header/>
    <main className='px-2 md:px-10 desk:px-def font-primary'>
    <p className='pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] font-semibold text-2xl lg:text-3xl desk:text-5xl'>Profile</p>
      <div className='flex flex-col gap-[19px] md:flex-row'>
      <div className="w-full md:w-[428px] h-fit border-2 border-solid border-order py-3 flex flex-col items-center gap-y-4 rounded-lg">
        {/* <div class="name-photo"> */}
          <p className='text-lg font-bold lg:text-2xl'>{user.userInfo ? `${user.userInfo.fullName}` : " . . . "}</p>
          <p className='text-sm text-footer'>{user.userInfo ? `${user.userInfo.email}` : " . . . "}</p>
          <div class="image lg:w-[80px] lg:h-[80px] my-4">
            <img height={"80px"} width={"80px"} src={imageUrl} className='rounded-full h-[80px] w-[80px]' alt="photo-profile" />
          </div>
          <button className='w-[226px] px-[18px] py-3 bg-primary font-semibold flex justify-center items-center rounded-lg' onClick={setUploadImage}>Upload New Photo</button>
          <p className='text-base text-footer'>Since <strong>July 2023</strong></p>
        {/* </div> */}
      </div>
      <div className="w-full h-fit border-2 border-solid border-order py-3 px-3 flex flex-col gap-y-4 rounded-lg">
        <p>Full Name</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" placeholder="Enter your fullname" className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" placeholder="Enter your E-Mail"  className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Phone</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="call-outline"></ion-icon>
          <input type="number" placeholder="Enter your phone number" className='flex-1 outline-none text-sm lg:text-base' />
        </div>
        <div className='flex'>
          <p className=''>Password</p>
          <a href="#" className='flex-1 flex justify-end text-primary'>Set New Password</a>
        </div>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" placeholder="Enter your password"  className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Address</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="location-outline"></ion-icon>
          <input type="text" placeholder="Enter your address"  className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <div className='w-full bg-primary p-3 flex items-center justify-center rounded-lg'>
          <p>Submit</p>
        </div>
      </div>
      </div>
    </main>
    <div
      className={`${isUploadImage ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="modalsImage"
    >
      <form
        onSubmit={submitUpdateImage} className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
      >
        <input type="file" name="image" id="a" />
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="closeModalBtn" onClick={setUploadImage}
          >
            Cancel
          </button>
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="sendModalBtn" type='submit'
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default profile
