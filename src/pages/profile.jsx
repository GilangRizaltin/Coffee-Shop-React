import React, { useState, useEffect } from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import { updateDataUser, getUser } from '../https/profile';
import { useNavigate } from 'react-router-dom';

function profile() {
  const getUserData = JSON.parse(localStorage.getItem('dataUser'))
  const jwt = getUserData.token
  const [profileData, setProfileData] = useState({})
  const [valueData, setValueData] = useState({})
  const [image, setImage] = useState('')
  useEffect(() => {
    // Fetch data only once after the component is mounted
    getUser(jwt)
      .then((res) => {
        setProfileData(res.data.res[0]);
        setValueData(res.data.res[0]);
        // console.log(profileData)
        // console.log(res.data.res[0])
        setImage(import.meta.env.VITE_BACKEND_HOST + res.data.res[0].user_photo_profile)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const timestamp = profileData.since;
  const date = new Date(timestamp);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const body = {};
  const [bodyUpdate, seBodyUpdate] = useState({})
  const [modalSubmit, setModalSubmit] = useState(false)
  const setShowModalSubmit = () => {
    setModalSubmit((state) => !state)
  }
  const clearanceBeforeSubmit = () => {
    for (const key in profileData) {
      if (profileData[key] !== valueData[key]) {
        body[key] = valueData[key];
      }
    }
    console.log(body)
    setShowModalSubmit();
    seBodyUpdate(body)
  }
  const [showSuccessUpdateModal, setSuccessUpdateModal] = useState(false)
  const [updateMsg, setUpdateMsg] = useState('')
  const confirmUpdates = () => {
    updateDataUser(bodyUpdate, jwt)
    .then((res) => {
      setShowModalSubmit();
      setUpdateMsg(res.data.msg)
      console.log(res)
      setSuccessUpdateModal(true);
    })
    .catch((err) => {
      console.log(err)
    });
  }
  const okButtonClick = () => {
    window.location.reload();
  };
  const [updatePhoto, setUpdatePhoto] = useState(false)
  const setShowUpdatePhoto = () => {
    setUpdatePhoto((state) => !state)
  }
  const [selectedImage, setSelectedImage] = useState()
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
      const { name } = e.target;
      setValueData((prevData) => ({
      ...prevData,
      [name]: e.target.files[0],
    }));
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setImage(URL.createObjectURL(selectedImage))
  }
  return (
    <>
    <Header/>
    <main className='px-2 md:px-10 desk:px-def font-primary mb-16'>
    <p className='pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] font-semibold text-2xl lg:text-3xl desk:text-5xl'>Profile</p>
      <div className='flex flex-col gap-[19px] md:flex-row'>
      <div className="w-full md:w-[428px] h-fit border-2 border-solid border-order py-3 flex flex-col items-center gap-y-4 rounded-lg">
        {/* <div class="name-photo"> */}
        <p className='text-lg font-bold lg:text-2xl'>{profileData.full_name}</p>          
          <p className='text-sm text-footer'>{profileData.email}</p>
          <div className="image lg:w-[80px] lg:h-[80px] my-4">
            <img height={"80px"} width={"80px"} src={image} className='rounded-full h-[80px] w-[80px]' alt="photo-profile" />
          </div>
          <button onClick={setShowUpdatePhoto} className='w-[226px] px-[18px] py-3 bg-primary font-semibold flex justify-center items-center rounded-lg' >Upload New Photo</button>
          <p className='text-base text-footer'>Since <strong>{month} {year}</strong></p>
        {/* </div> */}
      </div>
      <div className="w-full h-fit border-2 border-solid border-order py-3 px-3 flex flex-col gap-y-4 rounded-lg">
        <p>Full Name</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" value={valueData.full_name} name='full_name' onChange={handleChange} className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" value={valueData.email} name='email' onChange={handleChange} placeholder="Enter your E-Mail"  className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Phone</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="call-outline"></ion-icon>
          <input type="text" value={valueData.phone} name='phone' onChange={handleChange} placeholder="Enter your phone number" className='flex-1 outline-none text-sm lg:text-base' />
        </div>
        <div className='flex'>
          <p className=''>Password</p>
          <a href="#" className='flex-1 flex justify-end text-primary'>Set New Password</a>
        </div>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="lock-closed-outline"></ion-icon>
          <input type="password" value="password"  placeholder="Enter your password"  className='flex-1 outline-none text-sm lg:text-base text-gray-400'/>
        </div>
        <p>Address</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="location-outline"></ion-icon>
          <input type="text" value={valueData.address} name='address' onChange={handleChange} placeholder="Enter your address"  className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <div className='w-full bg-primary p-3 flex items-center justify-center rounded-lg'  onClick={clearanceBeforeSubmit}>
          <p>Submit</p>
        </div>
      </div>
      </div>
    </main>
    <div
      className={`${modalSubmit ? "flex" : "hidden"} fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="clearanceSubmit"
    >
      <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center text-center">
        <p>Update data?</p>
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="closeModalBtn" onClick={setShowModalSubmit}
          >
            Cancel
          </button>
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="confirmUpdate" onClick={confirmUpdates}
          >
            Update
          </button>
        </div>
      </div>
    </div>
    <div
      className={`${showSuccessUpdateModal ? "flex" : "hidden" } fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="successUpdateSubmit"
    >
      <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center text-center">
        <p>Update Success</p>
        <p>{updateMsg}</p>
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="successUpdate" onClick={okButtonClick}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
    <div
      className={`${updatePhoto ? "flex" : "hidden" } fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="updatePhotoModals"
    >
      <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
        <p>Select Photo</p>
        <form onSubmit={onSubmit} className='flex flex-col gap-8'>
        <input type="file" name="user_photo_profile" id="photoFile" className='w-full' onChange={imageChange}/>
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="cancelUpdatePhoto" onClick={setShowUpdatePhoto}
          >
            Cancel
          </button>
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="setUpdatePhoto" type='submit' onClick={setShowUpdatePhoto}
          >
            Ok
          </button>
        </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default profile
