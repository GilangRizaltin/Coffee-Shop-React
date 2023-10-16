import React from 'react'
import Header from "../components/header";
import Promo from "../components/promo";
import Filter from "../components/filter";
import Footer from "../components/footer";
import Page from '../components/page';
import { productWithRating } from "../components/productCard";
import { useProductContext } from '../context/productContext';

function product() {
  const {product} = useProductContext();
  const a = "a";
  const b = "b";
  const c = "c";
  // console.log(product)
  // const data = product.productInfo
  // if (product.productInfo && product.productInfo.length > 0) {
  //   console.log(data.Product, data.Description, data.Price);
  // } else {
  //   console.error("Product info is undefined or empty.");
  // }
  return (
    <>
    <Header />
    <main className="px-2 md:pl-10 desk:pl-def  md:pr-10 desk:pr-def">
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
            <Filter/>
            <div className='w-full'>
            {/* {!product.productInfo && <p className='text-xl md:text-2xl lg:text-4xl flex justify-center font-semibold text-footer'>search product</p> } */}
              <p className={`${product.isProductAvailable ? "hidden" : "flex"} text-xl md:text-2xl lg:text-4xl justify-center font-semibold text-footer`}>Product not found</p>
              <div className={` w-full grid mobile_m:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 justify-items-center mb-8`}>
              {product.isProductAvailable === true ? (
              product.productInfo.map((product, index) => (
                <div key={index}>
                {productWithRating({
                title: product.Product,
                desc: product.Description,
                price: product.Price,
                })}
                </div>
                ))
                ) : (
                <div className='hidden' >No product information available.</div>
              )}
              </div>
              <div className='w-full flex justify-center'>
                {product.isProductAvailable && <Page nextlink={product.page.next} page={product.page.page} prevlink={product.page.prev} />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default product
