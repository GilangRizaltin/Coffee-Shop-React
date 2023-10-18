import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Promo from '../components/promo';
import Filter from '../components/filter';
import Footer from '../components/footer';
import { productWithRating } from '../components/productCard';
import { useProductContext } from '../context/productContext';

function product() {
  const { product } = useProductContext();
  // const [productData, setProductData] = useState([]);

  // useEffect(() => {
  //   if (product.isProductAvailable) {
  //     setProductData(product);
  //   } else {
  //     setProductData([]);
  //   }
  // }, [product.isProductAvailable, product.productInfo]);

  return (
    <>
      <Header />
      <main className="px-2 md:pl-10 desk:pl-def md:pr-10 desk:pr-def">
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
          <div className="flex flex-col gap-y-5">
            <p className="text-2xl lg:text-5xl">Our Product</p>
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
                <div className={` w-full grid mobile_m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 justify-items-center mb-8`}>
                  {product.isProductAvailable === true ? (
                  product.productInfo.map((product, index) => (
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
                <div className='absolute text-xl md:text-2xl lg:text-4xl justify-center font-semibold text-footer' >No product information available.</div>
              )}
              </div>
                <div className="w-full flex justify-center">{/* Add pagination here */}</div>
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
