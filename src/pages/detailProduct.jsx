import React from 'react'
import { useState, useEffect } from 'react'
import Header  from '../components/Header';
import Footer from "../components/Footer";
import { productWithRating } from "../components/productCard";
// import { useLocation } from 'react-router-dom';
import { getDetailProduct } from '../https/product';
import {useNavigate, useParams} from "react-router-dom"
import { useProductContext } from '../context/productContext';

import { useDispatch } from 'react-redux';
import { addOrder  } from '../redux/slices/orderRedux';

function detailProduct() {
  let { id } = useParams();
  // console.log(id);
  const [data, setData] = useState('')
  getDetailProduct(id)
  .then((res) => {
    setData(res.data.result[0])
  }).catch((err) => {
    console.log(err)
  })
  const [productQty, setProductQty] = useState(1)
  const increaseQty = () =>{
    setProductQty(productQty + 1)
  };
  const decreaseQty = () =>{
    if (productQty > 1) {
      setProductQty(productQty - 1)
    }
  };
  const quantity = productQty
  const [size, setNewSize] = useState('')
  const chooseSize = (e) => {
    e.preventDefault();
    const newSize = e.target.value;
    setNewSize(newSize);
    console.log(newSize);
  }
  const [hotOrNot, setHotOrNot] = useState('');
  const setToIceHandler = (e) => {
    e.preventDefault();
    const newHotOrNotValue = e.target.value;
    setHotOrNot(newHotOrNotValue);
    console.log(newHotOrNotValue);
  };
  const dataOrder = {
    image: "...",
    product_id: (parseInt(id)),
    product_name: data.Product,
    hot_or_not: hotOrNot || "Hot",
    size_id: size || "Small",
    quantity: quantity,
    price: data.Price,
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setOrder = () => {
    dispatch(addOrder(dataOrder));
    navigate("/checkout");
  }
  return (
    <>
    <Header />
    <main className='px-2 py-2 md:px-10 desk:px-def flex flex-col gap-2'>
        <section className='pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] flex flex-col gap-2 lg:gap-10 mobile_l:flex-row'>
            <div className='w-full mobile_l:w-fit  flex flex-col gap-2 '>
                <img src="/webp/image 31.webp" className='w-full mobile_l:w-[164px] sm:h-[400px] sm:w-full' alt="prduct photo 1"/>
                <div className='flex gap-2 w-full mobile_l:flex-col mobile_l:h-full sm:flex-row sm:h-auto'>
                    <img src="/webp/image 31.webp" className='flex-1 mobile_l:w-[164px] sm:w-[132px]' alt="prduct photo 2"  width={"90px"}/>
                    <img src="/webp/image 31.webp" className='flex-1 mobile_l:w-[164px] sm:w-[132px]' alt="prduct photo 3"  width={"90px"}/>
                    <img src="/webp/image 31.webp" className='flex-1 mobile_l:w-[164px] sm:w-[132px]' alt="prduct photo 4"  width={"90px"}/>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-y-[15px] md:gap-y-2 justify-center'>
                <p
                    className="flex text-xs bg-red-700 w-20 h-5 text-white text-center justify-center rounded-3xl"
                  >
                    FLASH SALE!
                </p>
                <p className="text-2xl font-semibold lg:text-3xl desk:text-5xl">{data.Product}</p>
                <div className="sm:flex items-center gap-x-3 font-semibold">
                    <p className="text-xs text-red-700"><del>IDR 40.000</del></p>
                    <p className="text-base mobile:text-subtitle text-primary">
                    IDR {data.Price}
                    </p>
                </div>
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
                      <p className='text-footer'>5.0</p>
                </div>
                <div className='flex text-footer text-sm'>
                    <p>200+ Review</p>
                    <hr className='h-4 w-1'/>
                    <p>Recommendation</p>
                </div>
                <p className='text-footer text-sm'>{data.Description}</p>
                <div className='flex'>
                    <button className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md active:bg-primary' onClick={decreaseQty}>-</button>
                    <div className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md text-sm'><p>{productQty}</p></div>
                    <button className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md active:bg-primary' onClick={increaseQty}>+</button>
                </div>
                <p className='text-sm font-bold'>Choose Size</p>
                <form className='flex gap-6 text-xs '>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Regular' onClick={chooseSize}>Regular</button>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Grande'onClick={chooseSize}>Grande</button>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Venti'onClick={chooseSize}>Venti</button>
                </form>
                <p className='text-sm font-bold'>Hot/Ice?</p>
                <div  className='flex gap-6 text-xs'>
                <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Hot' onClick={setToIceHandler}>Hot</button>
                  <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Ice' onClick={setToIceHandler}>Ice</button>
                </div>
                <div className='flex flex-col w-full text-sm gap-2 detailProduct:flex-row'>
                    <button className='flex-1 w-full p-2.5 rounded-lg bg-primary font-bold' onClick={setOrder}>Buy</button>
                    <button className='flex-1 w-full p-2.5 rounded-lg text-primary border-2 border-solid border-primary'>Add to Cart</button>
                </div>
            </div>
        </section>
        <section className='flex flex-col justify-center gap-y-2'>
            <p className='pb-[20px] desk:pb-[50px] text-2xl font-semibold lg:text-3xl desk:text-5xl'>Recomendation For You</p>
            <div className='flex flex-col mobile_m:flex-row'>
              <div className='flex-1 flex justify-center'>
                {productWithRating({
                        title: "Hazelnut Latte",
                        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
                        price: "20.000",
                })}
              </div>
              <div className='flex-1 flex justify-center'>
                {productWithRating({
                        title: "Hazelnut Latte",
                        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
                        price: "20.000",
                })}
              </div>
              <div className='hidden sm:flex flex-1  justify-center'>
                {productWithRating({
                        title: "Hazelnut Latte",
                        desc: "You can explore the menu that we provide with fun and have their own taste and make your day better.",
                        price: "20.000",
                })}
              </div>
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
