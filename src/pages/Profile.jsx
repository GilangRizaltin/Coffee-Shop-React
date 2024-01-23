import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import { updateDataUser, getUser } from '../https/profile';
import { useSelector } from 'react-redux';

function profile() {
  //Authorization
  const user = useSelector(state => state.user.userInfo);
  const jwt = user.token
  //State
  const [profileData, setProfileData] = useState({})
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState('')
  const [imageUpdate, setImageUpdate] = useState(false)

  useEffect(() => {
    getUser(jwt)
      .then((res) => {
        setProfileData(res.data.data[0]);
        setFullName(res.data.data[0].Full_name)
        // setValueData(res.data.data[0]);
        // console.log(res.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const timestamp = profileData.created_at;
  const date = new Date(timestamp);
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  // const formDataa = new FormData();

  const handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // formDataa.append("Full_name", value);
  };

  const changeImageHandler = (e) => {
    setImage(e.target.files[0]);
    setImageUpdate(true)
  };

  const consol = () => {
    if (formDataa.has("Full_name")) {
      console.log(`The value for ${"Full_name"} is present in the FormData.`);
    } else {
      console.log(`The value for ${"Full_name"} is not present in the FormData.`);
    }
    // console.log(valueData)
  }
  const [modalSubmit, setModalSubmit] = useState(false)
  const setShowModalSubmit = () => {
    setModalSubmit((state) => !state)
  }
  const clearanceBeforeSubmit = () => {
    // for (const key in profileData) {
    //   if (profileData[key] !== valueData[key]) {
    //     body[key] = valueData[key];
    //   }
    // }
    // console.log(body)
    setShowModalSubmit();
    // console.log("a")
    // for (const value of formDataa.values()) {
    //   console.log(value);
    // }
    // seBodyUpdate(body)
  }

  const [showSuccessUpdateModal, setSuccessUpdateModal] = useState(false)
  const [updateMsg, setUpdateMsg] = useState('')

  const confirmUpdates = () => {
    const formData = new FormData();
    formData.append("Full_name", profileData.Full_name);
    formData.append("Phone", profileData.Phone);
    formData.append("Address", profileData.Address);
    if (imageUpdate === true) {
      formData.append("Photo_profile", image);
    }
    updateDataUser(formData, jwt)
    .then((res) => {
      setShowModalSubmit();
      setUpdateMsg(res.data.message)
      console.log(res)
      setSuccessUpdateModal(true);
    })
    .catch((err) => {
      setUpdateMsg("Data failed to update")
      console.log(err)
      setSuccessUpdateModal(true);
    });
  }

  // const okButtonClick = () => {
  //   window.location.reload();
  // };
  return (
    <>
    <Header/>
    <main className='px-2 md:px-10 desk:px-def font-primary mb-16'>
    <p className='pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] font-semibold text-2xl lg:text-3xl desk:text-5xl'>Profile</p>
      <div className='flex flex-col gap-[19px] md:flex-row'>
      <div className="w-full md:w-[428px] h-fit border-2 border-solid border-order py-3 flex flex-col items-center gap-y-4 rounded-lg">
        {/* LEFT SIDE INFORMAION */}
        <p className='text-lg font-bold lg:text-2xl'>{fullName}</p>          
          <p className='text-sm text-footer'>{profileData.Email}</p>
          <div className="image lg:w-[80px] lg:h-[80px] my-4">
            <img height={"80px"} width={"80px"} src={image ? URL.createObjectURL(image) : profileData.Photo_profile} className='rounded-full h-[80px] w-[80px]' alt="photo-profile" />
          </div>
          {/* <button onClick={setShowUpdatePhoto} className='w-[226px] px-[18px] py-3 bg-primary font-semibold flex justify-center items-center rounded-lg' >Upload New Photo</button> */}
          <input
              type="file"
              id="image"
              name="users_image"
              className="hidden"
              onChange={changeImageHandler}
            />
            <label
              htmlFor="image"
              className="text-sm font-medium text-dark py-3 px-6 bg-primary hover:bg-amber-600 rounded-md w-fit lg:text-xs xl:text-sm active:ring active:ring-orange-300 outline-none flex justify-center items-center text-center cursor-pointer"
            >Upload New Image</label>
          <p className='text-base text-footer' onClick={consol}>Since <strong>{month} {year}</strong></p>
      </div>
      {/* FORM */}
      <div className="w-full h-fit border-2 border-solid border-order py-3 px-3 flex flex-col gap-y-4 rounded-lg">
        <p>Full Name</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="person-outline"></ion-icon>
          <input type="text" value={profileData.Full_name} name='Full_name' onChange={handleChange} className='flex-1 outline-none text-sm lg:text-base'/>
        </div>
        <p>Email</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="mail-outline"></ion-icon>
          <input type="text" value={profileData.Email} name='Email' placeholder="Enter your E-Mail"  className='flex-1 outline-none text-sm lg:text-base text-gray-400'/>
        </div>
        <p>Phone</p>
        <div className="w-full border-2 border-solid border-order p-3 flex items-center gap-2 rounded-lg">
          <ion-icon name="call-outline"></ion-icon>
          <input type="text" value={profileData.Phone} name='Phone' onChange={handleChange} placeholder="Enter your phone number" className='flex-1 outline-none text-sm lg:text-base' />
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
          <input type="text" value={profileData.Address} name='Address' onChange={handleChange} placeholder="Enter your address"  className='flex-1 outline-none text-sm lg:text-base'/>
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
            id="successUpdate" onClick={() => {setSuccessUpdateModal(false)}} 
          >
            Ok
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default profile
