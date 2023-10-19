import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";
import { useProductContext } from '../context/productContext';

export function productCard() {
  const [cancelProduct, setCancel] = useState(false)
  const setCancelOrderPorduct = () => {
    setCancel((state) => !state)
  };
  return (
    <div className='min-w-[25%] md:min-w-fit'>
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
                  <p className="text-base font-bold lg:text-xl">Hazelnut Latte</p>
                  <p className="text-sm lg:text-base">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div className="desk:flex items-center gap-2">
                    <p className="text-sm text-red-800 lg:text-base"><del>IDR 10.000</del></p>
                    <p className="text-base text-primary lg:text-xl">IDR 20.000</p>
                  </div>
                  <div className="flex flex-col gap-y-1 desk:flex-row gap-x-2">
                    <button
                      className="flex justify-center text-base p-1 w-full bg-primary rounded-xl"
                    >
                      Buy
                    </button>
                    <button
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
                <div className="">
                  <button
                    className="absolute top-2 right-2 md:relative md:right-0 cursor-pointer"
                    aria-label="cancel" onClick={() => deleteData(index)}
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
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          id="Vector_2"
                          d="M15 9L9 15"
                          stroke="#D00000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          id="Vector_3"
                          d="M15 15L9 9"
                          stroke="#D00000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
  )
}

export function productWithRating(props) {
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
                    <p className="text-base font-bold lg:text-xl desk:text-2xl mobile_m:h-[48px]  overflow-hidden text-ellipsis">
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
                      <button
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
