import React from 'react'

export function productCard() {
  return (
    <div class="min-w-[25%] md:min-w-fit">
              <div class="relative w-[158px] lg:w-[210px] desk:w-[280px]">
                <div class="relative">
                  <img
                    src="/webp/image 27 (1).webp"
                    alt="product-photo"
                    class="h-[150px] w-[158px] lg:w-[210px] desk:w-[280px] lg:h-auto"
                  />
                  <p
                    class="absolute top-2 left-2 bg-red-800 text-white text-xs font-semibold p-1 rounded-xl"
                  >
                    FLASH SALE
                  </p>
                </div>
                <div
                  class="flex flex-col bg-white desk:w-[90%] desk:absolute desk:left-[14px] desk:top-60 desk:p-2.5 desk:gap-y-3 desk:shadow-md"
                >
                  <p class="text-base font-bold lg:text-xl">Hazelnut Latte</p>
                  <p class="text-sm lg:text-base">
                    You can explore the menu that we provide with fun and have
                    their own taste and make your day better.
                  </p>
                  <div class="desk:flex items-center gap-2">
                    <p class="text-sm text-red-800 lg:text-base"><del>IDR 10.000</del></p>
                    <p class="text-base text-primary lg:text-xl">IDR 20.000</p>
                  </div>
                  <div class="flex flex-col gap-y-1 desk:flex-row gap-x-2">
                    <button
                      class="flex justify-center text-base p-1 w-full bg-primary rounded-xl"
                    >
                      Buy
                    </button>
                    <button
                      class="flex justify-center text-primary text-xl p-1 w-full border-2 border-solid border-primary rounded-xl desk:w-[30%]"
                    >
                      <ion-icon name="cart-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}

export function productOrder() {
  return (
    <div class="mb-4">
              <div class="relative flex items-center bg-order p-2.5">
                <div
                  class="flex-1.5 flex items-center mobile:w-[178px] justify-center mobile:justify-start"
                >
                  <img
                    src="/webp/image 31 (1).webp"
                    alt="product-photo"
                  />
                </div>
                <div
                  class="flex-1 ml-1 mobile_l:ml-4 flex flex-col gap-y-1 mobile:gap-y-3.5 w-info md:flex-1"
                >
                  <p
                    class="flex text-xs bg-red-700 w-20 h-5 text-white text-center justify-center rounded-3xl"
                  >
                    FLASH SALE!
                  </p>
                  <p class="text-lg font-bold">Hazelnut Latte</p>
                  <div
                    class="grid grid-cols-[auto_auto] sm:grid-cols-[auto_2px_auto_2px_auto_2px_auto] text-sm text-center text-detail desk:text-xl"
                  >
                    <p>2pcs</p>
                    <hr class="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>Regular</p>
                    <hr class="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>Ice</p>
                    <hr class="hidden sm:block h-5 desk:h-8 w-0.5 bg-detail" />
                    <p>Dine In</p>
                  </div>
                  <div class="sm:flex items-center gap-x-3 font-semibold">
                    <p class="text-xs text-red-700"><del>IDR 40.000</del></p>
                    <p class="text-base mobile:text-subtitle text-primary">
                      IDR 20.000
                    </p>
                  </div>
                </div>
                <div class="">
                  <button
                    class="absolute top-2 right-2 md:relative md:right-0 cursor-pointer"
                    aria-label="cancel"
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

export function productWithRating() {
  return (
    <div class="w-fit">
                <div
                  class="relative mobile_m:w-[158px] lg:w-[307px] desk:w-[377px] lg:h-[520px] flex flex-col gap-y-3"
                >
                  <img
                    src="/webp/image 27 (1).webp"
                    alt="product-photo"
                    class="w-full mobile_m:h-[150px] mobile_m:w-[158px] lg:h-[290px] lg:w-[307px] desk:w-[377px] desk:h-[360px]"
                  />
                  <div
                    class="bg-white p-2.5 flex flex-col gap-y-1 lg:w-[90%] lg:absolute lg:left-[15.5px] lg:top-[240px] lg:shadow-md"
                  >
                    <p class="text-base font-bold lg:text-xl desk:text-2xl">
                      Hazelnut Latte
                    </p>
                    <p class="text-sm">
                      You can explore the menu that we provide with fun and have
                      their own taste and make your day better.
                    </p>
                    <div class="flex gap-3">
                      <ul class="flex gap-0.5">
                        <li>
                          <i class="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i class="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i class="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i class="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                        <li>
                          <i class="text-primary"
                            ><ion-icon name="star"></ion-icon
                          ></i>
                        </li>
                      </ul>
                      <p>5.0</p>
                    </div>
                    <div>
                      <p class="text-base text-primary">IDR 20.000</p>
                    </div>
                    <div class="flex flex-col gap-y-1 lg:flex-row lg:gap-2">
                      <button
                        class="flex justify-center text-base p-1 w-full bg-primary rounded-xl"
                      >
                        Buy
                      </button>
                      <button
                        class="flex justify-center text-primary text-xl p-1 w-full border-2 border-solid border-primary rounded-xl lg:w-[20%]"
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  )
}
