import { useState, useEffect } from 'react'
import React from 'react'
import {useNavigate , useLocation} from "react-router-dom"
// import { useUserContext } from '../context/context';
// import { searchProduct } from '../https/product';
// import { getUser } from '../https/profile';
import { useSelector, useDispatch } from 'react-redux';
import { logOutUser } from '../https/login';
import { userAction } from '../redux/slices/user';

function header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, changeToggle] = useState(false);
  const setToggle = () => {
    changeToggle((state) => !state);
  };
  const [notLogin, setNotLogin] = useState(false);
  const setShowModalNotLogin = () => {
    setNotLogin((state) => !state);
  };
  const [modalLogout, showModalLogout] = useState(false);
  const setShowModalLogout = () => {
    showModalLogout((state) => !state)
  };

  const user = useSelector(state => state.user.userInfo);
  const jwt = user ? user.token : null
  const product = useSelector(state => state.order);
  const [urlImage, setUrlImage] = useState("/img/user_image-1695737375917-95805558.jpeg")
  useEffect(() => {
    if (user) return setUrlImage(user.photo_profile);
  }, []);
  const onLogOutHandler = () => {
    const {logoutThunk} = userAction
    dispatch(logoutThunk({jwt, cb: () => {navigate("/"), setShowModalLogout()}}))
  }
  const [clicked, setClicked] = useState("/")
  const location = useLocation()
  useEffect(() => {
    setClicked(location.pathname)
  },[])
   return (
    <>
    <header
      className={`flex ${props.mode === "light" ? "bg-white text-black border-b-2 border-solid border-order" : "bg-black text-white" } font-primary h-header items-center sticky top-0 z-50 gap-8 px-2 sm:px-10 desk:px-def`}
    >
      <section className="flex items-center gap-8">
        <div className="flex items-center gap-2.5 cursor-pointer">
          {props.mode !== "light" ?
          (<svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M26 10H4C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11V17C3.00299 18.7025 3.36708 20.385 4.06822 21.9364C4.76937 23.4878 5.79163 24.8728 7.0675 26H4C3.73478 26 3.48043 26.1054 3.29289 26.2929C3.10536 26.4804 3 26.7348 3 27C3 27.2652 3.10536 27.5196 3.29289 27.7071C3.48043 27.8946 3.73478 28 4 28H26C26.2652 28 26.5196 27.8946 26.7071 27.7071C26.8946 27.5196 27 27.2652 27 27C27 26.7348 26.8946 26.4804 26.7071 26.2929C26.5196 26.1054 26.2652 26 26 26H22.9325C24.464 24.6426 25.6254 22.9182 26.3075 20.9888C27.5776 20.9105 28.7701 20.3509 29.642 19.424C30.5139 18.497 30.9995 17.2725 31 16V15C31 13.6739 30.4732 12.4021 29.5355 11.4645C28.5979 10.5268 27.3261 10 26 10ZM29 16C28.9996 16.647 28.79 17.2765 28.4025 17.7946C28.015 18.3127 27.4705 18.6917 26.85 18.875C26.9491 18.2549 26.9993 17.628 27 17V12.1725C27.5848 12.3792 28.0911 12.7621 28.4492 13.2685C28.8074 13.7749 28.9998 14.3798 29 15V16ZM14 7V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V7C16 7.26522 15.8946 7.51957 15.7071 7.70711C15.5196 7.89464 15.2652 8 15 8C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7ZM18 7V3C18 2.73478 18.1054 2.48043 18.2929 2.29289C18.4804 2.10536 18.7348 2 19 2C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7ZM10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7Z"
              fill="white"
            />
          </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
            <path d="M23 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V15C0.00298857 16.7025 0.367076 18.385 1.06822 19.9364C1.76937 21.4878 2.79163 22.8728 4.0675 24H1C0.734784 24 0.48043 24.1054 0.292893 24.2929C0.105357 24.4804 0 24.7348 0 25C0 25.2652 0.105357 25.5196 0.292893 25.7071C0.48043 25.8946 0.734784 26 1 26H23C23.2652 26 23.5196 25.8946 23.7071 25.7071C23.8946 25.5196 24 25.2652 24 25C24 24.7348 23.8946 24.4804 23.7071 24.2929C23.5196 24.1054 23.2652 24 23 24H19.9325C21.464 22.6426 22.6254 20.9182 23.3075 18.9888C24.5776 18.9105 25.7701 18.3509 26.642 17.424C27.5139 16.497 27.9995 15.2725 28 14V13C28 11.6739 27.4732 10.4021 26.5355 9.46447C25.5979 8.52678 24.3261 8 23 8ZM26 14C25.9996 14.647 25.79 15.2765 25.4025 15.7946C25.015 16.3127 24.4705 16.6917 23.85 16.875C23.9491 16.2549 23.9993 15.628 24 15V10.1725C24.5848 10.3792 25.0911 10.7621 25.4492 11.2685C25.8074 11.7749 25.9998 12.3798 26 13V14ZM11 5V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5ZM15 5V1C15 0.734784 15.1054 0.48043 15.2929 0.292893C15.4804 0.105357 15.7348 0 16 0C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6C15.7348 6 15.4804 5.89464 15.2929 5.70711C15.1054 5.51957 15 5.26522 15 5ZM7 5V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5Z" fill="#8E6447"/>
            </svg>
          )}
          <p className={`font-logo text-xl ${props.mode === "light" && "text-brown"}`}>Coffee Shop</p>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button className={`${clicked === "/" && "border-b-2 border-b-solid border-b-primary "} nav-item cursor-pointer`}>
            <p onClick={() => navigate("/")}>Home</p>
          </button>
          <button className={`${clicked === "/product" && "border-b-2 border-b-solid border-b-primary "} nav-item cursor-pointer`}>
          <p onClick={() => navigate("/product")}>Product</p>
          </button>
        </div>
      </section>
      <section className='flex-1 flex items-center justify-end'>
        <div className="cursor-pointer text-2xl  pl-8" onClick={() => navigate("/product")}>
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className="hidden md:block cursor-pointer text-2xl  pl-8 relative" onClick={() => navigate("/checkout")}>
            <ion-icon name="cart-outline"></ion-icon>
            {product.productInfo.length > 0 && 
            <div className='bg-red-600 h-[24px] w-[24px] flex justify-center items-center rounded-full absolute bottom-5 left-12'>
              <p className='text-xs text-white'>{product.productInfo.length}</p>
            </div>}
        </div>
        {user !== null ? (
      <div className='flex items-center' id='navbarIfLogin'>
        <div className="hidden md:block cursor-pointer  pl-8">
          <img src={urlImage}  className='h-[48px] w-[48px] rounded-full' alt="profile-photo"/>
        </div>
        <div className="hidden md:block cursor-pointer relative pl-8">
          <button
          onClick={setToggle}
            id="dropdownArrow"
            className="border-0 bg-none cursor-pointer text-2xl"
            aria-label="arrow dowwn"
          >
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
          <div
            id="dropdownBigScreen"
            className= {`${toggle ? "block" : "hidden"} absolute bg-black min-w-[160px] right-0 top-[53px] overflow-auto z-10`}
          >
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={() => navigate("/order/history")}>History</p>
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={() => navigate("/profile")}>Profile</p>
            {user.type === 'Admin' && <p className="text-white px-3 py-4 hover:bg-gray-300 " onClick={() => navigate("/admin")}>Admin Page</p>}
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={setShowModalLogout}>log Out</p>
          </div>
        </div>
        <div className="block md:hidden pl-8">
          <div id="dropdownHamburger" className="border-0 bg-none cursor-pointer  text-2xl" onClick={setToggle}>
            <ion-icon name="menu-outline" className='text-white'></ion-icon>
          </div>
        </div>
      </div>
      ) : (
      <div className='text-sm flex items-center md:gap-8 md:ml-8' id='navbarIfNotLoginYet'>
        <div>
          <button className='hidden md:block border-2 border-solid border-white rounded-lg p-2.5' onClick={() => navigate("/auth/login")}>Sign In</button>
        </div>
        <div>
          <button className='hidden md:block bg-primary rounded-lg text-black p-2.5' onClick={() => navigate("/auth/register")}>Sign Up</button>
        </div>
        <div className="block md:hidden pl-8">
          <div id="dropdownHamburger" className="border-0 bg-none cursor-pointer  text-2xl" onClick={setShowModalNotLogin}>
            <ion-icon name="menu-outline" className='text-white'></ion-icon>
          </div>
        </div>
      </div>
      )}
      </section>
    </header>
    <div
    id="dropdownSmallScreen"
    className={`${toggle ? "block" : "hidden"} fixed z-50 top-[76px] bg-black w-full flex flex-col items-center overflow-auto h-screen md:hidden transition-all duration-300 ease-in`}
  >
    <div className="flex items-center px-2 py-4 gap-4">
      <img src={urlImage} alt="profile-photo" className='h-[48px] w-[48px]  rounded-full' onClick={() => navigate("/profile")}/>
      <div className="text-sm text-white font-semibold">
      <p className='text-lg'>{user ? user.fullname : ""}</p>
        {/* {user.isUserAvailable && (<p className='text-lg'>{user.userInfo.userName}</p>)}
        {!user.isUserAvailable && (<p className='text-lg'>Guest</p>)} */}
      </div>
    </div>
    {user && user.type === 'Admin' && <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/admin")}>Admin Page</p>}
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/")}>Home</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/product")}>Product</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/order/history")}>History</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/profile")}>Profile</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer " onClick={setShowModalLogout}>log Out</p>
  </div>
  <div
    id="dropdownSmallScreenNotLogin"
    className={`${notLogin ? "block" : "hidden"} fixed z-50 top-[76px] bg-black w-full flex flex-col items-center overflow-auto h-screen md:hidden transition-all duration-300 ease-in`}
  >
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/")}>Sign In</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/product")}>Sign Up</p>
  </div>
  <div
      className={`${modalLogout ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90`}
      id="myModals"
    >
      <div
        className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center"
      >
        <p className="text-black">Are you sure for Log Out?</p>
        <div className="flex justify-end items-center gap-4 text-black">
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            id="closeModalBtn" onClick={setShowModalLogout}
          >
            Cancel
          </button>
          <button
            className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
            onClick={onLogOutHandler}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  </>
  )
}


export default header
