import React from 'react'
import Header  from '../components/header';
import Footer from "../components/footer";
import { productWithRating } from "../components/productCard";

function detailProduct() {
  return (
    <>
    <Header />
    <main className='px-2 py-2 md:px-10 desk:px-def'>
        <section>
            <div className='w-full flex flex-col gap-2'>
                <img src="/webp/image 31.webp" className='w-full' alt="prduct photo 1" height={"330px"} width={"335px"}/>
                <div className='flex gap-2 w-full'>
                    <img src="/webp/image 31.webp" className='flex-1' alt="prduct photo 2"  width={"90px"}/>
                    <img src="/webp/image 31.webp" className='flex-1' alt="prduct photo 3"  width={"90px"}/>
                    <img src="/webp/image 31.webp" className='flex-1' alt="prduct photo 4"  width={"90px"}/>
                </div>
            </div>
            <div className='flex flex-col gap-y-[15px]'>
                <p
                    class="flex text-xs bg-red-700 w-20 h-5 text-white text-center justify-center rounded-3xl"
                  >
                    FLASH SALE!
                </p>
                <p class="text-lg font-bold">Hazelnut Latte</p>
                <div class="sm:flex items-center gap-x-3 font-semibold">
                    <p class="text-xs text-red-700"><del>IDR 40.000</del></p>
                    <p class="text-base mobile:text-subtitle text-primary">
                      IDR 20.000
                    </p>
                </div>
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
                    <p>200+ Review</p>
                </div>
                <p>Cold brewing is a method of brewing that combines ground coffee and cool 
                    water and uses time instead of heat to extract the flavor. It is brewed 
                    in small batches and steeped for as long as 48 hours.</p>
                <div>
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
                <p>Choose Size</p>
                <div>
                    <button>Regular</button>
                    <button>Medium</button>
                    <button>Large</button>
                </div>
                <p>Hot/Ice?</p>
                <div>
                    <button>Ice</button>
                    <button>Hot</button>
                </div>
                <div>
                    <button>Buy</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        </section>
        <section>
            <p>Recomendation For You</p>
            <div className='flex'>
                <productWithRating />
                <productWithRating />
            </div>
            <div className='flex '>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>dsf</button>
            </div>
        </section>
    </main>
    <Footer />
    </>
  )
}

export default detailProduct
