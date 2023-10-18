import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Promo from '../components/promo';
import Filter from '../components/filter';
import Footer from '../components/footer';
import { useSearchParams } from "react-router-dom";
import { productWithRating } from '../components/productCard';
import { searchProduct } from '../https/product';

function product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataProduct, setDataProduct] = useState(null)
  const [pages , setPage] = useState(null)
  // console.log(searchParams.toString())
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = import.meta.env.VITE_BACKEND_HOST + "/products?" + searchParams.toString()
  useEffect(() => {
    // Fetch data only once after the component is mounted
    searchProduct(url)
      .then((res) => {
        setDataProduct(res.data.result);
        setPage(res.data.meta);
        // console.log(page);
        // console.log(dataProduct);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const consol = () => {
    console.log(pages);
    console.log(dataProduct)
  }
  return (
    <>
      <Header />
      <main className="px-2 md:pl-10 desk:pl-def md:pr-10 desk:pr-def">
      <div className='hidden lg:block w-full' >
        <img src="./webp/Rectangle 299.webp" alt="product" className='w-full' />
        {/* <p className='text-2xl desk:text-5xl absolute text-white top-0 left-2'>We Provide Good Coffee and Healthy Meals</p> */}
      </div>
        <section className="flex flex-col gap-y-5 mb-10 mt-10">
          <p className="text-2xl lg:text-5xl">Today Promo</p>
          <div className="w-full overflow-scroll">
            <div className="flex w-[1600px] gap-x-5">
              <Promo />
              <Promo />
              <Promo />
              <Promo />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col gap-y-5 mb-8">
            <p className="text-2xl lg:text-5xl" onClick={consol}>Our Product</p>
            <div className="flex gap-5 w-full">
              <Filter />
              <div className="w-full relative">
                {/* {!product.isProductAvailable && (
                  <p className="flex justify-center text-xl md:text-2xl lg:text-4xl font-semibold text-footer">
                    Product not found
                  </p>
                )} */}

                {/* <div className='w-full grid mobile_m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 justify-items-center mb-8'>
                  {productWithRating({
                    title: productInfo[0].Product,
                    desc: productInfo[0].Description,
                    price: productInfo[0].Price,
                    id: productInfo[0].No,
                  })}
                </div> */}
                <div className={`w-full grid mobile_m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 justify-items-center mb-8`}>
                  {dataProduct ? (
                    dataProduct.map((product, index) => (
                    <div key={index}>
                    {productWithRating({
                      title: product.Product,
                      desc: product.Description,
                      price: product.Price,
                      id: product.No,
                    })}
                  </div>
                  ))
                  ) : (
                  <div className='absolute text-xl md:text-2xl lg:text-4xl justify-center font-semibold text-footer'>
                      No product information available.
                  </div>
                   )}
                </div>
                <div className="w-full flex justify-center">
                  <button className='h-12 w-12 bg-order text-black rounded-full flex justify-center items-center'>{}</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default product;
