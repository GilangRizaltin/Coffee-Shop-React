import { useState, useEffect } from 'react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { useUserContext } from '../context/context';
import { searchProduct } from '../https/product';
import { getUser } from '../https/profile';

// function headertwo() {
//   const [dropdown, showDropdown] = useState(false);
//   const setShowDropdown = () => {
//     showDropdown((state) => !state)
//   };
//   return (
//     <header
//       className="flex bg-black text-white font-primary h-header items-center sticky top-0 z-50"
//     >
//       <nav className="flex flex-1 gap-10 pl-2 md:pl-10 desk:pl-def">
//         <div className="flex items-center gap-2.5 cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="32"
//             height="32"
//             viewBox="0 0 32 32"
//             fill="none"
//           >
//             <path
//               d="M26 10H4C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11V17C3.00299 18.7025 3.36708 20.385 4.06822 21.9364C4.76937 23.4878 5.79163 24.8728 7.0675 26H4C3.73478 26 3.48043 26.1054 3.29289 26.2929C3.10536 26.4804 3 26.7348 3 27C3 27.2652 3.10536 27.5196 3.29289 27.7071C3.48043 27.8946 3.73478 28 4 28H26C26.2652 28 26.5196 27.8946 26.7071 27.7071C26.8946 27.5196 27 27.2652 27 27C27 26.7348 26.8946 26.4804 26.7071 26.2929C26.5196 26.1054 26.2652 26 26 26H22.9325C24.464 24.6426 25.6254 22.9182 26.3075 20.9888C27.5776 20.9105 28.7701 20.3509 29.642 19.424C30.5139 18.497 30.9995 17.2725 31 16V15C31 13.6739 30.4732 12.4021 29.5355 11.4645C28.5979 10.5268 27.3261 10 26 10ZM29 16C28.9996 16.647 28.79 17.2765 28.4025 17.7946C28.015 18.3127 27.4705 18.6917 26.85 18.875C26.9491 18.2549 26.9993 17.628 27 17V12.1725C27.5848 12.3792 28.0911 12.7621 28.4492 13.2685C28.8074 13.7749 28.9998 14.3798 29 15V16ZM14 7V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V7C16 7.26522 15.8946 7.51957 15.7071 7.70711C15.5196 7.89464 15.2652 8 15 8C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7ZM18 7V3C18 2.73478 18.1054 2.48043 18.2929 2.29289C18.4804 2.10536 18.7348 2 19 2C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7ZM10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7Z"
//               fill="white"
//             />
//           </svg>
//           <p className="font-logo text-xl">Coffee Shop</p>
//         </div>
//         <nav className="hidden md:flex items-center gap-10">
//           <div className="nav-item cursor-pointer">
//             <a href="http://127.0.0.1:5500/home">Home</a>
//           </div>
//           <div className="nav-item cursor-pointer">
//             <a href="http://127.0.0.1:5500/product">Product</a>
//           </div>
//         </nav>
//       </nav>
//       <section
//         className="flex flex-1 justify-end items-center gap-10 pr-2 md:pr-10 desk:pr-def"
//       >
//         <div className="cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="21"
//             height="21"
//             viewBox="0 0 21 21"
//             fill="none"
//           >
//             <circle
//               cx="9.76639"
//               cy="9.76663"
//               r="8.98856"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M16.0181 16.4851L19.5421 20"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>
//         <div className="hidden md:block cursor-pointer">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//           >
//             <path
//               d="M18 17.25H6.42139C6.24574 17.25 6.07567 17.1884 5.94082 17.0758C5.80597 16.9633 5.7149 16.807 5.68348 16.6342L3.18015 2.86584C3.14873 2.69303 3.05766 2.53673 2.92281 2.42419C2.78796 2.31164 2.61789 2.25 2.44225 2.25H0.75"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M6.75 21C7.78553 21 8.625 20.1605 8.625 19.125C8.625 18.0895 7.78553 17.25 6.75 17.25C5.71447 17.25 4.875 18.0895 4.875 19.125C4.875 20.1605 5.71447 21 6.75 21Z"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M18 21C19.0355 21 19.875 20.1605 19.875 19.125C19.875 18.0895 19.0355 17.25 18 17.25C16.9645 17.25 16.125 18.0895 16.125 19.125C16.125 20.1605 16.9645 21 18 21Z"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//             <path
//               d="M3.75 6H20.1013C20.2112 6 20.3197 6.02413 20.4192 6.07069C20.5187 6.11725 20.6068 6.1851 20.6772 6.26944C20.7475 6.35378 20.7986 6.45255 20.8266 6.55878C20.8546 6.665 20.8589 6.77608 20.8392 6.88416L19.612 13.6342C19.5806 13.807 19.4895 13.9633 19.3546 14.0758C19.2198 14.1884 19.0497 14.25 18.8741 14.25H5.25"
//               stroke="white"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//             />
//           </svg>
//         </div>
//         <div className="hidden md:block cursor-pointer">
//           <img src="/svg/Ellipse 185.svg" alt="profile-photo" />
//         </div>
//         <div className="hidden md:block cursor-pointer relative inline-block">
//           <button
//           onClick={setShowDropdown}
//             id="dropdownArrow"
//             className="border-0 bg-none cursor-pointer"
//             aria-label="arrow dowwn"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M18.5 9L12.5 15L6.5 9"
//                 stroke="#4F5665"
//                 stroke-width="2"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </button>
//           <div
//             id="dropdownBigScreen"
//             className= {`${dropdown ? "block" : "hidden"} absolute bg-black min-w-[160px] right-0 top-[53px] overflow-auto z-10`}
//           >
//             <a
//               href="https://coffeeshop-gilang.netlify.app/history/#"
//               className="text-white px-3 py-4 block hover:bg-gray-300"
//               >History</a
//             >
//             <a
//               href="https://coffeeshop-gilang.netlify.app/profile/#"
//               className="text-white px-3 py-4 block hover:bg-gray-300"
//               >Profile</a
//             >
//             <a
//               href="#"
//               className="text-white px-3 py-4 block hover:bg-gray-300 open-modal-btn"
//               >log Out</a
//             >
//           </div>
//         </div>
//         <div className="block md:hidden">
//           <div id="dropdownHamburger" className="border-0 bg-none cursor-pointer" onClick={setShowDropdown}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M4 6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6C20 6.26522 19.8946 6.51957 19.7071 6.70711C19.5196 6.89464 19.2652 7 19 7H5C4.73478 7 4.48043 6.89464 4.29289 6.70711C4.10536 6.51957 4 6.26522 4 6Z"
//                 fill="white"
//               />
//               <path
//                 d="M4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18Z"
//                 fill="white"
//               />
//               <path
//                 d="M11 11C10.7348 11 10.4804 11.1054 10.2929 11.2929C10.1054 11.4804 10 11.7348 10 12C10 12.2652 10.1054 12.5196 10.2929 12.7071C10.4804 12.8946 10.7348 13 11 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H11Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//         </div>
//       </section>
//       <div
//         id="dropdownSmallScreen"
//         className={`${dropdown ? "block" : "hidden"} fixed z-50 top-[76px] bg-black w-full overflow-auto z-10 md:hidden transition-all duration-300 ease-in`}
//       >
//         <div className="flex items-center px-3 py-4 gap-2">
//           <img src="/assets/svg/Ellipse 185.svg" alt="profile-photo" />
//           <div className="text-sm text-white font-semibold">
//             <p>Your Name</p>
//             <p>Online</p>
//           </div>
//         </div>

//         <a
//           href="http://127.0.0.1:5500/home/"
//           className="text-white px-3 py-4 block hover:bg-gray-300"
//           >Home</a
//         >
//         <a
//           href="http://127.0.0.1:5500/product/"
//           className="text-white px-3 py-4 block hover:bg-gray-300"
//           >Product</a
//         >
//         <a
//           href="http://127.0.0.1:5500/history/"
//           className="text-white px-3 py-4 block hover:bg-gray-300"
//           >History</a
//         >
//         <a
//           href="http://127.0.0.1:5500/profile/"
//           className="text-white px-3 py-4 block hover:bg-gray-300"
//           >Profile</a
//         >
//         <a
//           href="#"
//           className="text-white px-3 py-4 block hover:bg-gray-300 open-modal-btn"
//           >log Out</a
//         >
//       </div>
//     </header>
//   )
// }


function header() {
  const navigate = useNavigate();
  const [toggle, changeToggle] = useState(false);
  const setToggle = () => {
    changeToggle((state) => !state);
  };
  const [modalLogout, showModalLogout] = useState(false);
  const setShowModalLogout = () => {
    showModalLogout((state) => !state)
  };
  const {user, changeUser} = useUserContext();
  const url = import.meta.env.VITE_BACKEND_HOST
  let imageUrl = (user.userInfo ? url + user.userInfo.photo : url + "/img/user_image-1695737375917-95805558.jpeg")
  const onLogOutHandler = () => {
    delete user.userInfo;
    changeUser({
      isUserAvailable: false,
    });
    setShowModalLogout();
    localStorage.removeItem("token")
  }
  const jwt = localStorage.getItem("token")
  const [profileData, setProfileData] = useState({})
  useEffect(() => {
  getUser(jwt)
    .then((res) => {
      setProfileData(res.data.res[0]);
      // console.log(profileData)
      console.log(res.data.res[0])
        setImage(import.meta.env.VITE_BACKEND_HOST + res.data.res[0].user_photo_profile)
    })
    .catch((err) => {
      console.error(err);
      });
  }, []);
   return (
    <>
    <header
      className="flex bg-black text-white font-primary h-header items-center sticky top-0 z-50 gap-8 px-2 sm:px-10 desk:px-def"
    >
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate("/login")}>
          <svg
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
          <p className="font-logo text-xl">Coffee Shop</p>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <div className="nav-item cursor-pointer">
            <p onClick={() => navigate("/")}>Home</p>
          </div>
          <div className="nav-item cursor-pointer">
          <p onClick={() => navigate("/product")}>Product</p>
          </div>
        </div>
        <div className='flex-1 flex items-center justify-end'>
        <div className="cursor-pointer text-2xl  pl-8" onClick={() => navigate("/product")}>
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <div className="hidden md:block cursor-pointer text-2xl  pl-8">
            <ion-icon name="cart-outline"></ion-icon>
        </div>
        <div className="hidden md:block cursor-pointer  pl-8">
          <img src={imageUrl}  className='h-[48px] w-[48px] rounded-full' alt="profile-photo"/>
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
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={() => navigate("/history")}>History</p>
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={() => navigate("/profile")}>Profile</p>
            <p className="text-white px-3 py-4 block hover:bg-gray-300" onClick={setShowModalLogout}>log Out</p>
          </div>
        </div>
        <div className="block md:hidden pl-8">
          <div id="dropdownHamburger" className="border-0 bg-none cursor-pointer  text-2xl" onClick={setToggle}>
            <ion-icon name="menu-outline" className='text-white'></ion-icon>
          </div>
        </div>
        <div>
        </div>
        </div>
    </header>
    <div
    id="dropdownSmallScreen"
    className={`${toggle ? "block" : "hidden"} fixed z-50 top-[76px] bg-black w-full flex flex-col items-center overflow-auto h-screen md:hidden transition-all duration-300 ease-in`}
  >
    <div className="flex items-center px-2 py-4 gap-4">
      <img src={imageUrl} alt="profile-photo" className='h-[48px] w-[48px]  rounded-full' onClick={() => navigate("/profile")}/>
      <div className="text-sm text-white font-semibold">
        {user.isUserAvailable && (<p className='text-lg'>{user.userInfo.userName}</p>)}
        {!user.isUserAvailable && (<p className='text-lg'>Guest</p>)}
      </div>
    </div>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/")}>Home</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/product")}>Product</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/history")}>History</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer" onClick={() => navigate("/profile")}>Profile</p>
    <p className="text-white px-3 py-4 hover:border-b-2 hover:border-b-solid hover:border-b-primary cursor-pointer " onClick={setShowModalLogout}>log Out</p>
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
    {/* <form onSubmit={submitSearch} className={`${!searchBar ? "hidden" : "flex"} md:hidden bg-white border-b-2 border-solid border-black sticky top-[76px] z-50`}>
      <div className="p-5 md:hidden w-full flex items-center gap-2">
        <div
          className="flex items-center gap-2 border-2 border-solid border-order p-3 flex-1 rounded-xl"
        >
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            name='search_bar'
            id=""
            placeholder="Search Product"
            className="outline-none w-full"
          />
        </div>
        <button className="bg-primary h-12 w-12 rounded-xl">
          <ion-icon name="search-outline"></ion-icon>
        </button>
      </div>
    </form> */}
  </>
  )
}


export default header
