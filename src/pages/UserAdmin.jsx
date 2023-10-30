import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { insertUser, getAllUser, searchUser, updateUserByAdmin } from '../https/userAdmin';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import AccessEnded from '../components/AccessEnded';

function UserAdmin() {
const consol = () => {
  console.log(type)
  console.log(input)
}
//jwt
// const getUserData = JSON.parse(localStorage.getItem('dataUser'))
const user = useSelector(state => state.user.userInfo)
const jwt = user.token
const [showAccessEnded, setShowAccessEnded] = useState(false);
//Set Params
const [searchParams, setSearchParams] = useSearchParams({
  full_name: "",
  page: 1
});
//Generalze axios get user
const url = import.meta.env.VITE_BACKEND_HOST + "/users?" + searchParams.toString()
const userGet = (url, jwt) => {
  getAllUser(url, jwt)
    .then((res) => {
      console.log(res.data.result)
      setUserData(res.data.result);
      setMetaData(res.data.meta)
    })
    .catch((err) => {
      console.error(err);
      if (err.response.status === 401)
      setShowAccessEnded(true)
    });
}
//state for getUser
const [userData, setUserData] = useState(null)
//state for total data
const [metaData, setMetaData] = useState(0)
//Get user
useEffect(() => {
  userGet(url, jwt)
}, []);
//modals for add user
const [addModals, showAddModals] = useState(false)
const setShowAddModals = () => {
  showAddModals((state) => !state)
}
//modal for filter
const [filter, showFilter] = useState(false)
const setShowFilter = () => {
showFilter((state) => !state)
}
//state for edit details
const [userDetails , setUserDetails] = useState({})
const [valueUser, setValueUser] = useState({})
//modal for edit user
const [editModals, showEditModals] = useState(false)
const setShowEditModals = (idx) => {
  setUserDetails(userData[idx]);
  setValueUser(userData[idx]);
  showEditModals((state) => !state)
}
//handler edit
const handleChange = (event) => {
  const { name, value } = event.target;
  setUserDetails((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
//toggle show password
const [isPwdShown, setIsPwdShown] = useState(false);
const showPwdHandler = () => {
  setIsPwdShown((state) => !state);
}
//password
const [pwdCorrect, setPwdCorrection] = useState(true)
const [firstPassword, setFirstPassword] = useState('');
const [secondPassword, setSecondPassword] = useState('');
const handleFirstPwdChange = (e) => {
  setFirstPassword(e.target.value);
};
const handleSecondPwdChange = (e) => {
  setSecondPassword(e.target.value);
};
//photo
const [image, setImage] = useState('')
const [selectedImage, setSelectedImage] = useState()
const [updatePhoto, setUpdatePhoto] = useState(false)
  const setShowUpdatePhoto = () => {
    setUpdatePhoto((state) => !state)
}
const imageChange = (e) => {
  e.preventDefault()
  setSelectedImage(e.target.files[0])
}
const onSubmit = () => {
  setImage(URL.createObjectURL(selectedImage))
  setUpdatePhoto(false)
  // console.log(URL.createObjectURL(selectedImage))
}
//modals for res msg
const [modals, setModals] = useState(false)
const setShowModals = () => {
  setModals((state) => !state)
}
const [message, setMessage] = useState('')
//submit add user
const submit = (e) => {
  e.preventDefault();
  const body = {
    user_photo_profile: selectedImage,
    user_name: e.target.userName.value,
    full_name: e.target.fullName.value,
    phone: e.target.userPhone.value,
    address: e.target.userAddress.value,
    email: e.target.userEmail.value,
    user_type: "Admin",
    password: e.target.userFirstPwd.value,
  }
  insertUser(body)
  .then((res) => {
    console.log(res)
    setMessage(res.data.msg);
    setShowModals();
    setImage('')
  }) .catch((err) => {
    console.log(err)
    setMessage(err.response.data.msg);
    setShowModals()
  })
}
//search bar
const onChangeSearch = (e) => {
  e.preventDefault()
  setSearchParams((prevState) => {
    return {
      ...prevState,
      full_name: e.target.value
    }
  });
}
const search = (e) => {
  e.preventDefault();
  userGet(url, jwt)
}
//search by modal
const [type, setType] = useState("user_name")
const [input, setInput] = useState()
const onSelect = (e) => {
  e.preventDefault();
  setType(e.target.value)
  // console.log(data)
}
const onInput = (e) => {
  e.preventDefault();
  setInput(e.target.value)
  setSearchParams({
    [type]: input
  })
  // console.log(data)
}
const serchFilter = () => {
  searchUser(url, jwt)
  .then((res) => {
    console.log(res)
    setUserData(res.data.result);
    setMetaData(res.data.meta)
  })
  .catch((err) => {
    console.log(err)
  })
}
//edit user
const body = {};
const [bodyUpdate, seBodyUpdate] = useState({})
const clearanceBeforeSubmit = () => {
  for (const key in userDetails) {
    if (userDetails[key] !== valueUser[key]) {
      body[key] = userDetails[key];
    }
  }
  console.log(body)
  // setShowModalSubmit();
  seBodyUpdate(body)
}
const confirmUpdates = () => {
  updateUserByAdmin(bodyUpdate, jwt)
  .then((res) => {
    // setShowModalSubmit();
    // setUpdateMsg(res.data.msg)
    console.log(res)
    // setSuccessUpdateModal(true);
  })
  .catch((err) => {
    console.log(err)
  });
}
  return (
    <Title title="Admin User">
    <Header mode="light"/>
    <main className='sm:flex w-full'>
      <Sidebar />
      <div className='sm:w-[85%] lg:w-[80%] relative'>

        {addModals&& 
        <div className='absolute w-full flex  z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={setShowAddModals}>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'>Add User</p>
            <p className='text-sm'>Photo User</p>
            <div id='upload-bar' className='flex flex-col gap-y-[30px]'>
            {image ? (
              <div className="image lg:w-[50px] lg:h-[50px] my-4">
                <img height={"50px"} width={"50px"} src={image} className='rounded-lg h-[50px] w-[50px]' alt="photo-profile" />
              </div>
              ) : (
              <div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                <ion-icon name="image-outline"></ion-icon>
              </div>
              )}
              <button onClick={setShowUpdatePhoto} className='w-fit text-xs px-2.5 py-2 rounded-lg bg-primary flex items-center justify-center font-semibold'>
                Upload
              </button>
            </div>
            <form onSubmit={submit} className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>User Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="userName" placeholder='Enter User Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Full Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="fullName" placeholder='Enter Full Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Email Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="userEmail" placeholder='Enter User E-Mail' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Phone</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="userPhone" placeholder='Enter User Phone Number' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <div className='flex gap-2 text-sm'>
                <button className='flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary'>Normal User</button>
                <button className='flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary'>Admin</button>
              </div>
              <p className='text-sm font-semibold'>Password</p>
              <div className='flex w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type={isPwdShown ? "text" : "password"} name="userFirstPwd" placeholder='Enter Password' className='text-sm outline-none w-full bg-input_bg'  onChange={handleFirstPwdChange}/>
                <div className='flex items-center' onClick={showPwdHandler}>
                  <ion-icon name="eye-off-outline"></ion-icon>
                </div>
              </div>
              <div className='flex w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type={isPwdShown ? "text" : "password"} name="userSecondPwd" placeholder='Confirm Password' className='text-sm outline-none w-full bg-input_bg' onChange={handleSecondPwdChange}/>
                <div className='flex items-center' onClick={showPwdHandler}>
                  <ion-icon name="eye-off-outline"></ion-icon>
                </div>
              </div>
              <p className={`${pwdCorrect ? "block" : "hidden"} text-sm text-red-600`}>`Password doesnt match</p>
              <p className='text-sm font-semibold'>Address</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input 
                  type="text" 
                  name="userAddress" 
                  id="description" 
                  placeholder='Enter User Address' 
                  className='text-sm outline-none w-full bg-input_bg mt-2 ' 
                />
              </div>
              <button type='submit' className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Save Product
              </button>
            </form>
          </div>
        </div>
        }
        {editModals  && 
        <div className='absolute w-full flex  z-40'>
          <div onClick={setShowEditModals} className='flex-1 bg-black opacity-60'>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'  onClick={consol}>Edit User</p>
            <p className='text-sm'>Photo User</p>
            <div id='upload-bar' className='flex flex-col gap-y-[30px]'>
              <div className="image lg:w-[50px] lg:h-[50px] my-4">
                <img height={"50px"} width={"50px"} src={import.meta.env.VITE_BACKEND_HOST + userDetails.Profile_Photo} className='rounded-lg h-[50px] w-[50px]' alt="photo-profile" />
              </div>
              <button className='w-fit text-xs px-2.5 py-2 rounded-lg bg-primary flex items-center justify-center font-semibold'>
                Upload
              </button>
            </div>
            <form className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>User Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={userDetails.Username} onChange={handleChange} name="Username" placeholder='Enter User Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Full Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={userDetails.Name} onChange={handleChange} name="Name" placeholder='Enter Full Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Email</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={userDetails.E_Mail} onChange={handleChange} name="E_Mail" placeholder='Enter User E-Mail' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Phone</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={userDetails.Phone_Number} onChange={handleChange} name="Phone_Number" placeholder='Enter User Phone Number' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Address</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input 
                  type="text" 
                  name="Address" 
                  value={userDetails.Address}
                  id="description" 
                  onChange={handleChange} 
                  placeholder='Enter User Address' 
                  className='text-sm outline-none w-full bg-input_bg mt-2 ' 
                />
              </div>
              <button className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Edit Save
              </button>
            </form>
          </div>
        </div>
        }
        {updatePhoto && 
        <div
        className='flex fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90'
        id="updatePhotoModals"
      >
        <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
          <p>Select Photo</p>
          <div className='flex flex-col gap-8'>
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
                  id="setUpdatePhoto"  onClick={onSubmit}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        }
        {modals && 
        <div
        className='flex fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90'
        id="updatePhotoModals"
        >
        <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
          <p className='text-red-800'>{message}</p>
          <div className='flex flex-col gap-8'>
              <div className="flex justify-end items-center gap-4 text-black">
                <button
                  className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
                  id="setUpdatePhoto" onClick={setShowModals}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        } 
        <div className='px-2 sm:px-10 py-4'>
        <section className='flex flex-col sm:flex-row gap-4 mb-8'>
          <div className='flex-1 flex flex-col gap-4'>
            <p className='text-2xl font-semibold'>User List</p>
            <button  onClick={setShowAddModals} className='flex text-sm w-fit items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
            <ion-icon name="add-outline"></ion-icon>
            <p>Add User</p>
            </button>
          </div>
          <div className='flex-1 flex sm:justify-end gap-4'>
            {/* <div className=' flex flex-col gap-4 justify-end text-sm'>
              <p>Search User</p>
              <form onSubmit={search} className='flex items-center border-2 border-solid border-order rounded-lg p-2.5'>
                <input type="text" onChange={onChangeSearch} name="search_bar" id="productSearchBar" placeholder='Enter User Name' className='outline-none'/>
                <button type='submit'>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </form>
            </div> */}
            <div className='flex items-end'>
              <button onClick={setShowFilter} className='flex text-sm items-center gap-2 p-3  bg-primary rounded-lg'>
                <ion-icon name="funnel-outline"></ion-icon>
                <p>Search</p>
              </button>
              {filter &&
              <div className='relative '>
                <div className='absolute top-2 z-10 right-0 bg-white border-2 border-solid border-order rounded-lg p-4 w-[300px] flex flex-col gap-4'>
                  <p>Search By</p>
                  <select onChange={onSelect} className='w-full outline-none border-2 border-solid border-order rounded-lg p-2.5'>
                    <option value="user_name">User Name</option>
                    <option value="phone">Phone Number</option>
                    <option value="email">Email</option>
                    <option value="">Address</option>
                  </select>
                  <div className='flex w-full items-center border-2 border-solid border-order rounded-lg p-2.5'>
                    <input onInput={onInput} type="text" name="search_bar" id="productSearchBar" placeholder='Enter Input' className='flex-1 outline-none'/>
                    <button>
                      <ion-icon name="search-outline"></ion-icon>
                    </button>
                  </div>
                  <button onClick={serchFilter} className='w-full p-2 flex justify-center items-center bg-primary rounded-lg'>Apply</button>
                </div>
              </div>
              }
            </div>
          </div>
        </section>
        <section className='border-2 border-solid border-order rounded-lg w-full p-2'>
          <div className=' w-full overflow-scroll'>
            <div className='grid grid-cols-7 gap-4  w-[1000px] h-fit lg:w-full'>
              <div className=' flex justify-center items-center  py-8'>
                <ion-icon name="create-outline"></ion-icon>
              </div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Image</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Full Name</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Phone</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Address</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Email</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Action</div> {/* Empty column for Action */}
              {userData && userData.map((data, idx) => (
                <React.Fragment key={idx}>
                  <div className={`flex justify-center items-center`}>
                    <ion-icon name="create-outline"></ion-icon>
                  </div>
                  <div className='col-span-1 flex justify-center items-center'>
                    <img src={import.meta.env.VITE_BACKEND_HOST + data.Profile_Photo} className='rounded-lg' alt="" height={48} width={48} />
                  </div>
                  <p className='col-span-1 flex justify-center items-center'>{data.Name}</p>
                  <p className='col-span-1 flex justify-center items-center'>{data.Phone_Number}</p>
                  <p className='col-span-1 h-autoflex justify-center items-center'>{data.Address}</p>
                  <p className='col-span-1 flex justify-center items-center'>{data.E_Mail}</p>
                  <div className='col-span-1 flex gap-2 justify-center'>
                    <button onClick={() => {setShowEditModals(idx)}} className='w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center'>
                      <ion-icon name="pencil-outline"></ion-icon>
                    </button>
                    <button className='w-8 h-8 bg-red-300 text-red-800 rounded-full flex items-center justify-center'>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className='md:flex p-4 text-footer'>
            <p className='flex-1'>Show {userData ? userData.length : 0} of {metaData.totalUser} User</p>
            <div className='flex-1 flex md:justify-end gap-4'>
              <p>Prev</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>Next</p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
    {showAccessEnded && <AccessEnded /> }
    </ Title>
  )
}

export default UserAdmin