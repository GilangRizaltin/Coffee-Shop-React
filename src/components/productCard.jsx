import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useProductContext } from '../context/productContext';
import { useDispatch, useSelector } from 'react-redux';
import { delOrder  } from '../redux/slices/orderRedux';
import { addOrder  } from '../redux/slices/orderRedux';

export function productCard(props) {
  const id = props.id
  const dataOrder = {
    image: "...",
    product_id: (parseInt(id)),
    product_name: props.title,
    hot_or_not: "Hot",
    size_id: "Small",
    quantity: 1,
    price: props.price,
    subtotal_product: props.Price
  }
  const dispatch = useDispatch();
  // const user = useSelector(state => state.user);
  const setOrder = () => {
    // if (user.isUserAvailable === true)
     dispatch(addOrder(dataOrder));
  }
  return (
    <div className='min-w-[25%] md:min-w-fit h-[500px]'>
              <div className="relative w-[158px] lg:w-[210px] desk:w-[280px]">
                <div className="relative">
                  <img
                    src="/webp/image 27 (1).webp"
                    alt="product-photo"
                    className="h-[150px] w-[158px] lg:w-[210px] desk:w-[280px] lg:h-auto"
                  />
                  <p
                    className="absolute top-2 left-2 bg-red-800 text-white text-xs font-semibold p-1 rounded-xl"
                  >
                    FLASH SALE
                  </p>
                </div>
                <div
                  className="flex flex-col bg-white desk:w-[90%] desk:absolute desk:left-[14px] desk:top-60 desk:p-2.5 desk:gap-y-3 desk:shadow-md"
                >
                  <p className="text-base font-bold lg:text-xl">{props.title}</p>
                  <p className="text-sm  mobile_m:h-[120px] lg:h-[60px] overflow-hidden text-ellipsis">
                  {props.desc}
                  </p>
                  <div className="desk:flex items-center gap-2">
                    <p className="text-sm text-red-800 lg:text-base"><del>IDR 10.000</del></p>
                    <p className="text-base text-primary lg:text-xl">IDR {props.price}</p>
                  </div>
                  <div className="flex flex-col gap-y-1 desk:flex-row gap-x-2">
                    <Link to={`/detailproduct/${props.id}`}
                      className="flex justify-center text-base p-1 w-full bg-primary rounded-xl"
                    >
                      Buy
                    </Link>
                    <button onClick={setOrder}
                      className="flex justify-center text-primary text-xl p-1 w-full border-2 border-solid border-primary rounded-xl desk:w-[30%]"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export function productOrder(props) {
  const dispatch = useDispatch();
  const deleted = () => {
    dispatch(delOrder(props.idx))
  }
  return (
    <div className="mb-4">
              <div className="relative flex items-center bg-order p-2.5">
                <div
                  className="flex-1.5 flex items-center mobile:w-[178px] justify-center mobile:justify-start"
                >
                  <img
                    src="/webp/image 31 (1).webp"
                    alt="product-photo"
                  />
                </div>
                <div
                  className="flex-1 ml-1 mobile_l:ml-4 flex flex-col gap-y-1 mobile:gap-y-3.5 w-info md:flex-1"
                >
                  <p
                    className="flex text-xs bg-red-700 w-20 h-5 text-white text-center justify-center rounded-3xl"
                  >
                    FLASH SALE!
                  </p>
                  <p className="text-lg font-bold">{props.title}</p>
                  <div
                    className="grid grid-cols-[auto_auto] sm:grid-cols-[auto_2px_auto_2px_auto_2px_auto] text-sm text-center text-detail desk:text-base"
                  >
                    <p>{props.quantity} pcs</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.size}</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.hot}</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.serve_id}</p>
                  </div>
                  <div className="sm:flex items-center gap-x-3 font-semibold">
                    <p className="text-xs text-red-700"><del>IDR 40.000</del></p>
                    <p className="text-base mobile:text-subtitle text-primary">
                      IDR {props.price}
                    </p>
                  </div>
                </div>
                <div className="">
                  <button
                    className="absolute top-2 right-2 md:relative md:right-0 cursor-pointer"
                    aria-label="cancel" onClick={deleted}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="XCircle">
                        <path
                          id="Vector"
                          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="#D00000"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                        />
                        <path
                          id="Vector_2"
                          d="M15 9L9 15"
                          stroke="#D00000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_3"
                          d="M15 15L9 9"
                          stroke="#D00000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
  )
}

export function detailProductOrder(props) {
  const {deleteData} = useProductContext();
  const index = props.idx;
  // const deleteFromOrder = () => {
  //   delete product[index]
  // };
  return (
    <div className="mb-4">
              <div className="relative flex items-center bg-order p-2.5">
                <div
                  className="flex-1.5 flex items-center mobile:w-[178px] justify-center mobile:justify-start"
                >
                  <img
                    src="/webp/image 31 (1).webp"
                    alt="product-photo"
                  />
                </div>
                <div
                  className="flex-1 ml-1 mobile_l:ml-4 flex flex-col gap-y-1 mobile:gap-y-3.5 w-info md:flex-1"
                >
                  <p
                    className="flex text-xs bg-red-700 w-20 h-5 text-white text-center justify-center rounded-3xl"
                  >
                    FLASH SALE!
                  </p>
                  <p className="text-lg font-bold">{props.title}</p>
                  <div
                    className="grid grid-cols-[auto_auto] sm:grid-cols-[auto_2px_auto_2px_auto_2px_auto] text-sm text-center text-detail desk:text-xl"
                  >
                    <p>{props.quantity} pcs</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.size}</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.hot}</p>
                    <hr className="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>{props.serve_id}</p>
                  </div>
                  <div className="sm:flex items-center gap-x-3 font-semibold">
                    <p className="text-xs text-red-700"><del>IDR 40.000</del></p>
                    <p className="text-base mobile:text-subtitle text-primary">
                      IDR {props.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export function historyProduct (props) {
  return (
    <div className="bg-order w-full pl-2 pr-2 pt-7 pb-7 mb-4">
            <div className="flex gap-4">
              <img
                src="/webp/image 31.webp"
                alt="product-photo"
                className="hidden md:block w-[111px] h-[105px]"
              />
              <div className="flex-1">
                <div
                  className="grid grid-rows-2 grid-cols-2 gap-y-10 mb-7 desk:grid-rows-1 desk:grid-cols-4"
                >
                  <div>
                    <div className="flex gap-2 items-center text-gray-600">
                      <ion-icon name="cafe-outline"></ion-icon>
                      <p>No. Order</p>
                    </div>
                    <p className="font-bold"># {props.no}</p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center text-gray-600">
                      <ion-icon name="calendar-outline"></ion-icon>
                      <p>Date</p>
                    </div>
                    <p className="font-bold">{props.date}</p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center text-gray-600">
                      <ion-icon name="repeat-outline"></ion-icon>
                      <p>Total</p>
                    </div>
                    <p className="font-bold">IDR {props.total}</p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M4.66122 9.66781C4.57366 9.66779 4.48696 9.68502 4.40607 9.71851C4.32517 9.75201 4.25167 9.80112 4.18976 9.86302C4.12785 9.92494 4.07875 9.99844 4.04525 10.0793C4.01176 10.1602 3.99453 10.2469 3.99455 10.3345V11.5227C3.13525 10.5509 2.66102 9.29837 2.66122 8.00115C2.66109 7.80509 2.67283 7.6092 2.69637 7.41456C2.70716 7.32752 2.70068 7.23921 2.67728 7.15468C2.65388 7.07015 2.61403 6.99107 2.56001 6.92197C2.50599 6.85287 2.43887 6.79511 2.36249 6.752C2.28611 6.70889 2.20197 6.68128 2.1149 6.67074C2.02783 6.66021 1.93954 6.66696 1.85508 6.69061C1.77062 6.71425 1.69166 6.75434 1.62272 6.80856C1.55378 6.86278 1.49622 6.93007 1.45333 7.00658C1.41045 7.08309 1.38308 7.1673 1.3728 7.25441C1.34261 7.50217 1.32761 7.75155 1.32788 8.00115C1.32879 9.59192 1.90052 11.1296 2.93913 12.3345H1.99455C1.81774 12.3345 1.64817 12.4047 1.52315 12.5297C1.39812 12.6548 1.32788 12.8243 1.32788 13.0011C1.32788 13.178 1.39812 13.3475 1.52315 13.4726C1.64817 13.5976 1.81774 13.6678 1.99455 13.6678H4.66122C4.76548 13.6665 4.86793 13.6403 4.96002 13.5914C5.05211 13.5425 5.13117 13.4723 5.19064 13.3866C5.19841 13.3764 5.20834 13.3687 5.21558 13.3579C5.22002 13.3513 5.22014 13.3435 5.22428 13.3367C5.25606 13.283 5.27986 13.225 5.29495 13.1645C5.30482 13.1305 5.31183 13.0957 5.3159 13.0606C5.31782 13.04 5.3279 13.0222 5.3279 13.0012V10.3345C5.32793 10.2469 5.3107 10.1602 5.27721 10.0793C5.24371 9.99844 5.19461 9.92494 5.13269 9.86302C5.07078 9.80111 4.99728 9.75201 4.91638 9.71851C4.83548 9.68502 4.74878 9.66779 4.66122 9.66781ZM5.66122 4.00115H4.4729C5.44477 3.14189 6.6973 2.66767 7.99455 2.66781C8.19051 2.66734 8.38631 2.67909 8.58081 2.70297C8.66776 2.71353 8.75594 2.70686 8.84031 2.68334C8.92468 2.65982 9.00359 2.61992 9.07254 2.5659C9.14149 2.51188 9.19913 2.44482 9.24216 2.36853C9.28518 2.29224 9.31277 2.20822 9.32333 2.12127C9.33388 2.03432 9.32721 1.94614 9.30369 1.86177C9.28017 1.7774 9.24027 1.69848 9.18625 1.62954C9.13223 1.56059 9.06517 1.50295 8.98888 1.45992C8.91259 1.41689 8.82857 1.38931 8.74162 1.37875C8.49373 1.34885 8.24424 1.33406 7.99455 1.33448C6.40379 1.33535 4.86616 1.90704 3.66122 2.94561V2.00115C3.66122 1.82434 3.59098 1.65477 3.46596 1.52974C3.34093 1.40472 3.17136 1.33448 2.99455 1.33448C2.81774 1.33448 2.64817 1.40472 2.52315 1.52974C2.39812 1.65477 2.32788 1.82434 2.32788 2.00115V4.66781C2.33208 4.71188 2.34086 4.75538 2.35409 4.79762L2.35425 4.79843C2.37044 4.88047 2.4024 4.95858 2.44836 5.02843L2.45598 5.0397C2.50003 5.10377 2.55524 5.1594 2.61898 5.20393C2.62626 5.20926 2.62988 5.21743 2.63745 5.22252C2.64698 5.22883 2.65776 5.23083 2.66748 5.2366C2.70529 5.25935 2.74536 5.27811 2.78703 5.2926C2.84335 5.31219 2.90208 5.32405 2.96159 5.32783C2.97314 5.32845 2.98287 5.3345 2.99455 5.3345H5.66122C5.83803 5.3345 6.0076 5.26426 6.13262 5.13924C6.25765 5.01421 6.32788 4.84465 6.32788 4.66783C6.32788 4.49102 6.25765 4.32145 6.13262 4.19643C6.0076 4.07141 5.83803 4.00117 5.66122 4.00117V4.00115ZM13.6349 11.2039C13.6187 11.1218 13.5867 11.0437 13.5407 10.9738L13.5332 10.9626C13.4891 10.8985 13.4338 10.8429 13.37 10.7983C13.3628 10.793 13.3592 10.7848 13.3516 10.7798C13.3444 10.775 13.3359 10.7748 13.3286 10.7704C13.244 10.7234 13.1513 10.6927 13.0554 10.6801C13.0343 10.6781 13.0162 10.6678 12.9946 10.6678H10.3279C10.1511 10.6678 9.9815 10.738 9.85648 10.863C9.73146 10.9881 9.66122 11.1576 9.66122 11.3344C9.66122 11.5113 9.73146 11.6808 9.85648 11.8059C9.9815 11.9309 10.1511 12.0011 10.3279 12.0011H11.5162C10.5443 12.8604 9.29179 13.3346 7.99455 13.3344C7.79858 13.3347 7.60277 13.3227 7.40828 13.2986C7.23268 13.2773 7.0558 13.3266 6.91655 13.4357C6.7773 13.5448 6.6871 13.7047 6.66577 13.8803C6.64445 14.056 6.69375 14.2328 6.80285 14.3721C6.91194 14.5113 7.07188 14.6015 7.24748 14.6229C7.49538 14.6528 7.74485 14.6678 7.99455 14.6678C9.58531 14.6669 11.1229 14.0952 12.3279 13.0567V14.0011C12.3279 14.178 12.3981 14.3475 12.5231 14.4726C12.6482 14.5976 12.8177 14.6678 12.9946 14.6678C13.1714 14.6678 13.3409 14.5976 13.466 14.4726C13.591 14.3475 13.6612 14.178 13.6612 14.0011V11.3345C13.657 11.2904 13.6482 11.2469 13.635 11.2047L13.6349 11.2039ZM13.9946 3.66781C14.1714 3.66781 14.3409 3.59758 14.466 3.47255C14.591 3.34753 14.6612 3.17796 14.6612 3.00115C14.6612 2.82434 14.591 2.65477 14.466 2.52974C14.3409 2.40472 14.1714 2.33448 13.9946 2.33448H11.3279C11.2845 2.33866 11.2416 2.34731 11.2 2.36028L11.1956 2.36117C11.1146 2.37737 11.0375 2.40895 10.9684 2.45419L10.9554 2.46302C10.8916 2.50701 10.8362 2.56205 10.7918 2.62554C10.7866 2.63274 10.7785 2.63628 10.7735 2.64373C10.7688 2.65089 10.7686 2.65935 10.7641 2.66663C10.7165 2.7517 10.6857 2.84508 10.6732 2.94174C10.6713 2.96233 10.6612 2.98007 10.6612 3.00115V5.66781C10.6612 5.84463 10.7315 6.01419 10.8565 6.13922C10.9815 6.26424 11.1511 6.33448 11.3279 6.33448C11.5047 6.33448 11.6743 6.26424 11.7993 6.13922C11.9243 6.01419 11.9946 5.84463 11.9946 5.66781V4.47923C12.8538 5.45121 13.328 6.7038 13.3279 8.00111C13.328 8.19718 13.3163 8.39306 13.2927 8.58771C13.2716 8.76319 13.3209 8.93989 13.4299 9.07903C13.5389 9.21817 13.6987 9.30839 13.8741 9.32989C13.9011 9.33302 13.9283 9.33454 13.9555 9.33445C14.1183 9.33424 14.2753 9.27446 14.3971 9.1664C14.5188 9.05834 14.5968 8.90946 14.6163 8.74786C14.6465 8.50011 14.6615 8.25074 14.6612 8.00115C14.6603 6.41036 14.0885 4.87272 13.0499 3.66781H13.9946Z"
                          fill="#4F5665"
                        />
                      </svg>
                      <p>Status</p>
                    </div>
                    {props.status === "On progress" && 
                    <div
                      className="flex items-center justify-center bg-orange-300 w-fit py-1 px-2 rounded-xl"
                    >
                      <p className="text-black font-semibold">On Progress</p>
                    </div>}
                    {props.status === "Shipping" && 
                    <div
                      className="flex items-center justify-center bg-gray-300 w-fit py-1 px-2 rounded-xl"
                    >
                      <p className="text-black font-semibold">Shipping</p>
                    </div>}
                    {props.status === "Done" && 
                    <div
                      className="flex items-center justify-center bg-green-300 w-fit py-1 px-2 rounded-xl"
                    >
                      <p className="text-black font-semibold">Done</p>
                    </div>}
                    {/* <div
                      className="flex items-center justify-center bg-orange-300 w-fit p-1 rounded-xl"
                    >
                      <p className="text-black">{props.status}</p>
                    </div> */}
                  </div>
                </div>
                <Link to={`/detailorder/${props.no}`} className="text-orange-800 cursor-pointer">View Order</Link>
              </div>
            </div>
          </div>
  )
}

export function productWithRating(props) {
  const id = props.id
  const dataOrder = {
    image: "...",
    product_id: (parseInt(id)),
    product_name: props.title,
    hot_or_not: "Hot",
    size_id: "Small",
    quantity: 1,
    price: props.price,
    subtotal_product: props.price
  }
  const dispatch = useDispatch();
  const setOrder = () => {
    dispatch(addOrder(dataOrder));
  }
  return (
    <div className="w-fit">
                <div
                  className="relative  mobile_m:w-[158px] lg:w-[307px] desk:w-[377px] lg:h-[520px] flex flex-col gap-y-3"
                >
                  <img
                    src="/webp/image 27 (1).webp"
                    alt="product-photo"
                    className="w-full mobile_m:h-[150px] mobile_m:w-[158px] lg:h-[290px] lg:w-[307px] desk:w-[377px] desk:h-[360px]"
                  />
                  <div
                    className="bg-white p-2.5 flex flex-col gap-y-1 lg:w-[90%] lg:absolute lg:left-[15.5px] lg:top-[240px] lg:shadow-md"
                  >
                    <p className="text-base font-bold lg:text-xl desk:text-2xl mobile_m:h-[60px]  overflow-hidden text-ellipsis">
                      {props.title}
                    </p>
                    <p className="text-sm mobile_m:h-[120px] lg:h-[60px] overflow-hidden text-ellipsis">
                      {props.desc}
                    </p>
                    <div className="flex gap-3">
                      <ul className="flex gap-0.5">
                        <li>
                          <i className="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i className="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i className="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i className="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i className="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                      </ul>
                      <p>5.0</p>
                    </div>
                    <div>
                      <p className="text-base text-primary">IDR {props.price}</p>
                    </div>
                    <div className="flex flex-col gap-y-1 lg:flex-row lg:gap-2">
                      <Link to={`/detailproduct/${props.id}`}
                        className="flex justify-center text-base p-1 w-full bg-primary rounded-xl"
                      >
                        Buy
                      </Link>
                      <button onClick={setOrder}
                        className="flex justify-center text-primary text-xl p-1 w-full border-2 border-solid border-primary rounded-xl lg:w-[20%]"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  )
}