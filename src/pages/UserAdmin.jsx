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

const user = useSelector(state => state.user.userInfo)
const jwt = user.token
const [showAccessEnded, setShowAccessEnded] = useState(false);

const [searchParams, setSearchParams] = useSearchParams({
  full_name: "",
  page: 1
});

const [userData, setUserData] = useState(null)
const [metaData, setMetaData] = useState(0)
const [modal,setModal] = useState(false)
const [id, setId] = useState()
const [idx, setIdx] = useState()
const [resetPassword, setResetPassword] = useState(false)
const [pwdCorrect, setPwdCorrection] = useState(false)
const [image, setImage] = useState('')
const [editImage, setEditImage] = useState('')
const [imageAdd, setImageAdd] = useState(false)
const [imageUpdate, setImageUpdate] = useState(false)
const [userRole, setUserRole] = useState("")
const [modals, setModals] = useState(false)
const setShowModals = () => {
  setModals((state) => !state)
}

const url = import.meta.env.VITE_BACKEND_HOST + "/user?" + searchParams.toString()
const userGet = (url, jwt) => {
  getAllUser(url, jwt)
    .then((res) => {
      console.log(res.data.data)
      setUserData(res.data.data);
      setMetaData(res.data.meta);
    })
    .catch((err) => {
      console.error(err);
      if (err.response.status === 401)
      setShowAccessEnded(true)
    });
}

useEffect(() => {
  userGet(url, jwt)
}, []);

const cloesModal = () => {
  setModal((state) => !state)
  setImage("")
  setEditImage("")
  setImageAdd(false)
  setImageUpdate(false)
}

const [filter, showFilter] = useState(false)
const setShowFilter = () => {
showFilter((state) => !state)
}

const changeImageHandler = (e) => {
  e.preventDefault()
  if (modal === "add") {
    setImage(e.target.files[0]);
    setImageAdd(true)
  }
  if (modal === "edit") {
    setEditImage(e.target.files[0]);
    setImageUpdate(true)
  }
};

const handleChange = (event) => {
  event.preventDefault()
  const { name, value } = event.target;
  setUserData[idx]((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


const modalSubmit = (e) => {
  e.preventDefault()
  if (modal === "add") {
    if (e.target.userFirstPwd.value && e.target.userFirstPwd.value !== e.target.userSecondPwd.value) {
      return setPwdCorrection(true)
    }
    const formData = new FormData();
    if (imageAdd === true) {
      formData.append("Photo_profile", image);
    }
    formData.append("User_name", e.target.User_name.value);
    formData.append("Full_name", e.target.Full_name.value);
    formData.append("Email", e.target.Email.value);
    formData.append("Phone", e.target.Phone.value);
    formData.append("User_type", userRole);
    formData.append("Address", e.target.Address.value);
    formData.append("Password", e.target.userFirstPwd.value);
    insertUser(formData, jwt)
    .then((res) => {
      setMessage("User successfully created");
      setShowModals();
      setImage('')
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status === 401) {
        return setShowAccessEnded(true)
      }
      setMessage("Failed creating user");
      setShowModals()
    })
  }
  if (modal === "edit") {
    const formData = new FormData();
    if (imageUpdate === true) {
      formData.append("Photo_profile", editImage);
    }
    formData.append("user_id", id);
    updateUserByAdmin(formData, jwt)
    .then((res) => {
      setMessage(`User ${userData[idx].Full_name} successfully updated`);
      setShowModals();
      setImage('')
    })
    .catch((err) => {
      console.log(err)
      if (err.response.status === 401) {
        return setShowAccessEnded(true)
      }
      setMessage("Failed updating user");
      setShowModals()
    })
  }
}







const [userDetails , setUserDetails] = useState({})
const [valueUser, setValueUser] = useState({})
const [bodyUpdate, seBodyUpdate] = useState({})

const [editModals, showEditModals] = useState(false)
const setShowEditModals = (idx) => {
  // setUserDetails(userData[idx]);
  // setValueUser(userData[idx]);
  setId(idx)
  showEditModals((state) => !state)
}

//toggle show password
const [isPwdShown, setIsPwdShown] = useState(false);
const showPwdHandler = () => {
  setIsPwdShown((state) => !state);
}
//password
const [firstPassword, setFirstPassword] = useState('');
const [secondPassword, setSecondPassword] = useState('');
const handleFirstPwdChange = (e) => {
  setFirstPassword(e.target.value);
};
const handleSecondPwdChange = (e) => {
  setSecondPassword(e.target.value);
};


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



const [message, setMessage] = useState('')

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
    [type]: input,
    page : 1
  })
  // console.log(data)
}
const serchFilter = () => {
  searchUser(url, jwt)
  .then((res) => {
    console.log(res)
    setUserData(res.data.data);
    setMetaData(res.data.meta)
  })
  .catch((err) => {
    console.log(err)
  })
}

const body = {};
const [modalsConfirm, setModalsConfirm] = useState(false);
const setShowModalsConfirm = () => {
  setModalsConfirm((state) => !state)
}
const clearanceBeforeSubmit = () => {
  for (const key in userDetails) {
    if (userDetails[key] !== valueUser[key]) {
      body[key] = userDetails[key];
    }
  }
  seBodyUpdate(body)
  console.log(bodyUpdate)
  setModalsConfirm(true)
}
// useEffect(() => {
//   for (const key in userDetails) {
//     if (userDetails[key] !== valueUser[key]) {
//       body[key] = userDetails[key];
//     }
//   }
//   seBodyUpdate(body)
// },[])
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
        {modal&& 
        <div className='absolute w-full flex z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={cloesModal}>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'>{modal === "add" ? "Insert User" : userData[idx].Full_name}</p>
            <p className='text-sm'>Photo User</p>
            <div id='upload-bar' className='flex flex-col gap-y-[30px]'>
            {modal === "add" && image ? (
              <div className="image lg:w-[50px] lg:h-[50px]">
                <img height={"50px"} width={"50px"} src={URL.createObjectURL(image)} className='rounded-lg h-[50px] w-[50px]' alt="photo-profile" />
              </div>
              ) : (
              <div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                <ion-icon name="image-outline"></ion-icon>
              </div>
              )}
              {modal === "edit" && editImage || userData[idx] ? (
              <div className="image lg:w-[50px] lg:h-[50px]">
                <img height={"50px"} width={"50px"} src={editImage ? URL.createObjectURL(editImage) : userData[idx].Photo_profile} className='rounded-lg h-[50px] w-[50px]' alt="photo-profile" />
              </div>
              ) : (
              <div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                <ion-icon name="image-outline"></ion-icon>
              </div>
              )}
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
              >Upload</label>
            </div>
            <form onSubmit={modalSubmit} className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>User Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={modal === "edit" ? userData[idx].User_name : null}  name="User_name" placeholder='Enter User Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Full Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={modal === "edit" ? userData[idx].Full_name : null} name="Full_name" onChange={handleChange} placeholder='Enter Full Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Email Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={modal === "edit" ? userData[idx].Email : null}  name="Email" placeholder='Enter User E-Mail' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Phone</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={modal === "edit" ? userData[idx].Phone : null}  name="Phone" placeholder='Enter User Phone Number' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              {modal === "add" && 
              <div className='flex gap-2 text-sm'>
                <p name='User_type' onClick={() => {setUserRole("Normal User")}} className={`flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg ${userRole === "Normal User" && "border-primary"}`}>Normal User</p>
                <p name='User_type' onClick={() => {setUserRole("Admin")}} className={`flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg ${userRole === "Admin" && "border-primary"}`}>Admin</p>
              </div>}
              <div className='flex'>
                <p className='text-sm font-semibold flex-1'>Password</p>
                {modal === "edit" && <p className='text-sm text-primary' onClick={() => {setResetPassword(true)}}>Set New Password</p>}
              </div>
              {modal === "edit" && resetPassword === false ? 
              (<div className='flex w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                  <input type={isPwdShown ? "text" : "password"} value={"aaaaa"} name="userFirstPwd" placeholder='Enter Password' className='text-sm outline-none w-full bg-input_bg text-gray-600'/>
                </div>) : 
              (<div className='flex flex-col gap-y-4'>
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
              </div>)}
              <p className='text-sm font-semibold'>Address</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input 
                  type="text" 
                  name="Address" 
                  id="description"
                  value={modal === "edit" ? userData[idx].Address : null} 
                  
                  placeholder='Enter User Address' 
                  className='text-sm outline-none w-full bg-input_bg mt-2 ' 
                />
              </div>
              <button type='submit' className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                {modal === "add" ? "Insert User" : "Edit Profile"}
              </button>
            </form>
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
            <button  onClick={() => {setModal("add")}} className='flex text-sm w-fit items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
            <ion-icon name="add-outline"></ion-icon>
            <p>Add User</p>
            </button>
          </div>
          <div className='flex-1 flex sm:justify-end gap-4'>
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
          <div className=''>
            <div className="text-sm font-medium text-secondary overflow-x-scroll">
                <table className="table-auto lg:table-fixed w-full">
                  <thead className="">
                    <tr className="border-b border-[#E8E8E84D]">
                      <th className="p-6 text-left w-12">No</th>
                      <th className="p-6 text-center">Image</th>
                      <th className="p-6 text-center">Full Name</th>
                      <th className="p-6 text-center">Phone</th>
                      <th className="p-6 text-center">Address</th>
                      <th className="p-6 text-center">Email</th>
                      <th className="p-6 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData && userData.map((data, idx) => (
                      <tr
                        className={`border-b border-[#E8E8E84D]${
                          idx % 2 == 0 ? " bg-[#F9FAFB]" : ""
                        }`}
                        key={idx}
                      >
                        <td className="px-6 text-left">{idx + 1}</td>
                        <td className="p-6">
                        {data.Photo_profile !== null ? 
                          (<div className='col-span-1 flex justify-center items-center'>
                            <img src={data.Photo_profile} className='rounded-lg' alt="" height={48} width={48} />
                          </div>) :
                          (<div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                            <ion-icon name="image-outline"></ion-icon>
                          </div>)}
                        </td>
                        <td className="text-center">{data.Full_name}</td>
                        <td className={`text-center ${!data.Phone && "text-red-700"}`}>{data.Phone ? data.Phone : "Empty"}</td>
                        <td className={`text-center ${!data.Phone && "text-red-700"}`}>{data.Address ? data.Address : "Empty"}</td>
                        <td className="text-center">{data.Email}</td>
                        <td className="text-center">
                          <div className="flex gap-y-2 items-center xl:flex-row xl:justify-center xl:gap-x-2">
                            <div
                              className="p-1 bg-[#FF89061A] rounded-full cursor-pointer"
                            >
                              <button onClick={() => {setModal("edit"); setIdx(idx); setId(data.Id)}} className='w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center'>
                                <ion-icon name="pencil-outline"></ion-icon>
                              </button>
                            </div>
                            <div
                              className="p-1 bg-[#D000001A] rounded-full cursor-pointer"
                            >
                              <button className='w-8 h-8 bg-red-300 text-red-800 rounded-full flex items-center justify-center'>
                                <ion-icon name="trash-outline"></ion-icon>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </div>
          <div className='md:flex p-4 text-footer'>
            <p className='flex-1'>Show {userData ? userData.length : 0} of {metaData.total_data} User</p>
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
    {modalsConfirm &&
      (<div
        className={`flex fixed inset-0 items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      >
        <div
          className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
        >
          <p className="">Are you sure to updating data user?</p>
          <div className="flex justify-end items-center gap-4 text-black">
          <button
              className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
              id="closeModalBtn" onClick={setShowModalsConfirm}
            >
              Cancel
            </button>
            <button
              className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
              id="confirmSubmit" onClick={confirmUpdates}
            >
              Ok
            </button>
          </div>
        </div>
      </div>)}
    {showAccessEnded && <AccessEnded /> }
    </ Title>
  )
}

export default UserAdmin