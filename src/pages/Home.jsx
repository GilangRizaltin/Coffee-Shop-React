import React from 'react'
import { useState, useEffect } from 'react';
import Header  from '../components/Header';
import Footer from "../components/Footer";
import { productCard, productWithRating } from "../components/productCard";
import Title from '../components/Title';
import { searchProduct } from '../https/product';

function home() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    searchProduct("http://localhost:6121/product/popular")
    .then((res) => {
      console.log(res)
      setProduct(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  },[])
  return (
    <Title title= "Home">
      <Header />
      <main>
        <section className="relative md:flex flex-row-reverse">
          <div className="hidden lg:block lg:w-1/2 desk:w-fit">
            <img
              src="/webp/Rectangle 287.webp"
              alt=""
              width="712px"
              height="1024px"
              className=""
            />
          </div>
          <div
            className="w-full bottom-0 border-none bg-gradient-to-t from-black to-zinc-700 text-white px-2 pb-5 pt-[38px] md:py-[58px] flex flex-col gap-[25px] sm:relative sm:opacity-100 sm:px-10 desk:pl-def lg:flex-1 lg:justify-center"
          >
            <p className="text-2xl lg:text-3xl desk:text-5xl">
              Start Your Day with Coffee and Good Meals
            </p>
            <p className="text-sm lg:text-base">
              We provide high quality beans, good taste, and healthy meals made by
              love just for you. Start your day with us for a bigger smile!
            </p>
            <div className="p-2.5 bg-primary rounded-xl w-fit">
              <button className="text-sm lg:text-base text-black font-bold">
                Get Started
              </button>
            </div>
            <div className="text-2xl lg:text-5xl flex gap-x-5 sm:gap-x-10">
              <div>
                <p className="text-primary lg:mb-4">90+</p>
                <p className='text-sm lg:text-base'>Staff</p>
              </div>
              <hr className="h-14 w-0.5 bg-white lg:h-16" />
              <div>
                <p className="text-primary lg:mb-4">30+</p>
                <p className='text-sm lg:text-base'>Stores</p>
              </div>
              <hr className="h-14 w-0.5 bg-white lg:h-16" />
              <div>
                <p className="text-primary lg:mb-4">800+</p>
                <p className='text-sm lg:text-base'>Customer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative lg:flex flex-row-reverse">
          <div className="hidden lg:block lg:w-1/2 desk:w-fit">
            <img
              src="/webp/Rectangle 291.webp"
              alt=""
              width="712px"
              height="574px"
              className=""
            />
          </div>
          <div
            className="bg-white text-black px-2 flex flex-col gap-[25px] pb-5 pt-[38px] md:py-[58px] sm:relative sm:px-10 desk:pl-def lg:flex-1 lg:justify-center"
          >
            <div className="flex gap-5 items-center">
              <hr className="w-1 h-10 desk:h-20 bg-primary" />
              <p className="text-2xl desk:text-5xl">
                We Provide Good Coffee and Healthy Meals
              </p>
            </div>
            <div className="text-sm flex flex-col gap-[25px] lg:text-base">
              <p className="">
                You can explore the menu that we provide with fun and have their
                own taste and make your day better.
              </p>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                    fill="#2FAB73"
                  ></path>
                </svg>
                <p>High quality beans</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                    fill="#2FAB73"
                  ></path>
                </svg>
                <p>Healthy meals, you can request the ingredients</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                    fill="#2FAB73"
                  ></path>
                </svg>
                <p>Free member card with a minimum purchase of IDR 200.000.</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                    fill="#2FAB73"
                  ></path>
                </svg>
                <p>Chat with our staff to get better experience for ordering</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-10 mt-10 desk:mb-20 desk:mt-20 h-fit">
          <div
            className="px-2 sm:px-10 flex flex-col gap-y-[9px] desk:gap-y-[25px]"
          >
            <p className="flex justify-center text-2xl desk:text-5xl">
              Here Is People Favorite
            </p>
            <div className="w-full flex justify-center">
              <hr className="w-20 h-1 bg-primary" />
            </div>
            <p className="flex justify-center text-base text-center">
              You can explore the menu that we provide with fun and have their own
              taste and make your day better
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
            {product !== null && product.length > 0 ? (
              product.map((product, index) => (
                <div key={index}>
                  {productCard({
                      title: product.Product,
                      desc: product.Description,
                      price: product.Price,
                      id: product.Id,
                    })}
                  </div>
                ))
              ) : (
                <p>No Product Available</p>
              )}
            </div>
          </div>
        </section>
        <section className="bg-order pt-16 pb-16">
          <div
            className="px-2 md:px-10 desk:px-def flex flex-col gap-y-4"
          >
            <p className="flex justify-center text-2xl desk:text-5xl">
              Visit Our People in The Spot on The Map Below
            </p>
            <div className="w-full flex justify-center">
              <hr className="w-20 h-1 bg-primary" />
            </div>
            <p className="flex justify-center text-base text-center">
              You can explore the menu that we provide with fun and have their own
              taste and make your day better.
            </p>
            <img src="/webp/Huge Global.webp" alt="map" className="w-100" />
          </div>
        </section>
        <section
          className="bg-gradient-to-t from-black to-zinc-700 text-white pt-[87px] pb-[87px] relative"
        >
          <div
            className="pl-5 pr-5 md:pl-10 md:pr-10 desk:pl-def desk:pr-def flex flex-col gap-y-4 md:flex-row gap-x-5 md:items-center"
          >
            <div className="flex justify-center md:flex-1">
              <img
                src="/webp/Rectangle 295.webp"
                alt="photo-profile"
                className="w-100"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-1">
              <p
                className="absolute top-10 left-[37%] font-bold md:relative md:top-0 md:left-0"
              >
                TESTIMONIAL
              </p>
              <div className="flex gap-5 items-center">
                <hr className="h-10 w-1 bg-primary" />
                <p className="text-2xl desk:text-5xl">Viezh Robert</p>
              </div>
              <p className="text-sm text-primary">Manager Coffe Shop</p>
              <p className="text-sm">
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
              <div className="flex gap-[25px]">
                <ul className="flex gap-[25px]">
                  <li>
                    <i className="text-primary"><ion-icon name="star"></ion-icon></i>
                  </li>
                  <li>
                    <i className="text-primary"><ion-icon name="star"></ion-icon></i>
                  </li>
                  <li>
                    <i className="text-primary"><ion-icon name="star"></ion-icon></i>
                  </li>
                  <li>
                    <i className="text-primary"><ion-icon name="star"></ion-icon></i>
                  </li>
                  <li>
                    <i className="text-primary"><ion-icon name="star"></ion-icon></i>
                  </li>
                </ul>
                <p>5.0</p>
              </div>
              <div className="flex gap-2.5">
                <button
                  className="h-8 w-8 bg-primary text-black flex justify-center items-center rounded-2xl"
                >
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </button>
                <button
                  className="h-8 w-8 bg-primary text-black flex justify-center items-center rounded-2xl"
                >
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ Title>
  )
}

export default home
