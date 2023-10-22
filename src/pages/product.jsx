import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Promo from '../components/promo';
import Footer from '../components/footer';
import { useSearchParams } from "react-router-dom";
import { productWithRating } from '../components/productCard';
import { searchProduct } from '../https/product';

function product() {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    category: "",
    sort: "",
    page: 1
  });
  const [dataProduct, setDataProduct] = useState(null)
  const [pages , setPage] = useState({
    next: "",
    prev: "",
  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = import.meta.env.VITE_BACKEND_HOST + "/products?" + searchParams.toString()
  const product = (url) => {
    searchProduct(url)
      .then((res) => {
        setDataProduct(res.data.result);
        setPage(res.data.meta);
        // console.log(res.data.meta)
      })
      .catch((err) => {
        console.error(err);
      });
  }
  useEffect(() => {
    product(url)
  }, []);

  const consol = () => {
    // const page = pages.next.split('?')[1]
    // if (page)
    // return setSearchParams(page)
    // const data = setSearchParams(page.toString)
    // setSearchParams({
    //   ...searchParams,
    //   page: pages.page + 1
    // })
    // const data = pages.next
    console.log(dataProduct);
  }



  //filter
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        search: e.target.value,
      };
    });
  };
  // const [category, setCategory] = useState('');
  const setNewCategory = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        category: e.target.value,
      };
    });
  };
  // const [sortBy, setSortBy] = useState('');
  const setSort = (e) => {
    setSearchParams((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        sort: e.target.value,
      };
    });
  };
  const isCategoryChecked = (value) => {
    const prevGenre = searchParams.get("category"); // Use the correct parameter name (category in this case)
    if (!prevGenre) return false;
    return prevGenre.split(",").includes(value.toString());
  };
  const isSortChecked = (value) => {
    const prevGenre = searchParams.get("sort"); // Use the correct parameter name (category in this case)
    if (!prevGenre) return false;
    return prevGenre.split(",").includes(value.toString());
  };
  const resetFilters = () => {
    setSearchParams({
      page: 1,
    });
  };
  const submit = () => {
    product(url)}




  const toNextPage = () => {
    const nextUrl = pages.next
    product(nextUrl)
  }
  const toPrevPage = () => {
    const prevUrl = pages.prev
    product(prevUrl)
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
            <div
              className="hidden  w-[301px] lg:w-[388px] h-fit bg-black p-6 lg:flex flex-col gap-4 rounded-3xl text-white"
              id='filter'
            >
              <div className="flex items-center h-[45px]">
                <p className="flex-1 text-2xl">Filter</p>
                <p className="flex flex-1 justify-end text-xl cursor-pointer" onClick={resetFilters}>Reset Filter</p>
              </div>
              <p className="text-xl mb-2.5">Search</p>
              <form  className='flex p-2 w-full rounded-xl text-black bg-white'>
                <input
                  type="text"
                  placeholder="Search Your Product"
                  name="search"
                  id="search"
                  className="flex-1 outline-none"
                  defaultValue={searchParams.get("search")}
                  value={searchParams.get('search') || ''}
                  onChange={handleInputChange}
                />
              </form>
              <form>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="category" 
                  onChange={setNewCategory}
                  value="1"
                  checked={isCategoryChecked(1)}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Coffee</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="category" 
                  onChange={setNewCategory}
                  value="2"
                  checked={isCategoryChecked(2)}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Non Coffee</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="category"
                  onChange={setNewCategory}
                  value="3"
                  checked={isCategoryChecked(3)}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Foods</p>
              </div>
              </form>
              <p className="text-xl h-[45px]">Sort By</p>
              <form>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="sort" 
                  onChange={setSort}
                  value='Cheapest'
                  checked={isSortChecked('Cheapest')}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Cheapest</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="sort" 
                  onChange={setSort}
                  value="Most Expensive"
                  checked={isSortChecked("Most Expensive")}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Most Expensive</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="sort"
                  onChange={setSort}
                  value="New Product"
                  checked={isSortChecked("New Product")}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>New Product</p>
              </div>
              </form>
              <form action="">
              <p className="text-xl h-[45px]">Range Price</p>
              <div className="flex items-center h-[45px]">
                <input
                  type="range"
                  className="custom-range w-[50%]"
                  min="0"
                  max="100"
                  step="1"
                />
                <input
                  type="range"
                  className="custom-range w-[50%]"
                  min="0"
                  max="100"
                  step="1"
                />
              </div>
              </form>
              <button
                className="text-sm w-full bg-primary pl-5 pr-5 pt-3 pb-3 flex justify-center rounded-xl"
                onClick={submit}
              >
                Apply Filter
              </button >
            </div>
              <div className="w-full relative">
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
                <div className="w-full flex justify-center gap-4">
                  {pages.prev !== null && <button className='h-12 w-12 bg-order text-black rounded-full flex justify-center items-center'
                  onClick={toPrevPage}>
                  <ion-icon name="chevron-back-outline"></ion-icon></button>}
                  <button className='h-12 w-12 bg-order text-black rounded-full flex justify-center items-center'>{pages.page}</button>
                  {pages.next !== null && <button className='h-12 w-12 bg-order text-black rounded-full flex justify-center items-center' 
                  onClick={toNextPage}
                  ><ion-icon name="chevron-forward-outline"></ion-icon></button>}
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
