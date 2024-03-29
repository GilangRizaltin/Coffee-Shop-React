import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Promo from '../components/Promo';
import Page from '../components/page';
import Footer from '../components/Footer';
import { useSearchParams } from "react-router-dom";
import { productWithRating } from '../components/ProductCard';
import { searchProduct } from '../https/product';
import Title from '../components/Title';

function Product() {
  const [dataProduct, setDataProduct] = useState([])
  const [pages , setPage] = useState(null)
  const [minValue, setMinValue] = useState("20000")
  const [maxValue, setMaxValue] = useState("50500")
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    category: "",
    sort: "",
    page: 1
  });
  // const [query, setQueryString] = useState({
  //   search: "",
  //   category: "",
  //   sort: "",
  //   page: 1
  // })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const url = import.meta.env.VITE_BACKEND_HOST + "/product?" + searchParams.toString()
  const product = (url) => {
    searchProduct(url)
      .then((res) => {
        setDataProduct(res.data.data);
        setPage(res.data.meta);
        console.log(res.data.meta)
      })
      .catch((err) => {
        console.error(err);
        setDataProduct([])
      });
  }
  useEffect(() => {
    product(url)
  }, []);

  //filter
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchParams((prev) => {
      // setQueryString((prev) => {
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
      // setQueryString((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        category: e.target.value,
        page: 1,
      };
    });
  };
  // const [sortBy, setSortBy] = useState('');
  const setSort = (e) => {
    setSearchParams((prev) => {
      // setQueryString((prev) => {
      const prevSearchParams = {};
      prev.forEach((value, key) => {
        Object.assign(prevSearchParams, { [key]: value });
      });
      return {
        ...prevSearchParams,
        sort: e.target.value,
        page: 1,
      };
    });
  };
  const min = (e) => {
    e.preventDefault()
    setMinValue(e.target.value);
    setSearchParams((prev) => {
      // setQueryString((prev) => {
      return {
        ...prev,
        minprice: parseInt(minValue),
        maxprice: parseInt(maxValue),
        
      }
    })
  }
  const max = (e) => {
    e.preventDefault()
    setMaxValue(e.target.value);
    setSearchParams((prev) => {
      // setQueryString((prev) => {
      return {
        ...prev,
        minprice: parseInt(minValue),
        maxprice: parseInt(maxValue)
      }
    })
  }

  const isCategoryChecked = (value) => {
    const prevGenre = searchParams.get("category");
    if (!prevGenre) return false;
    return prevGenre.split(",").includes(value.toString());
  };
  const isSortChecked = (value) => {
    const prevGenre = searchParams.get("sort");
    if (!prevGenre) return false;
    return prevGenre.split(",").includes(value.toString());
  };
  const resetFilters = () => {
    setSearchParams({
      page: 1,
    });
  };
  //pagination
  const renderButtons = () => {
    return Array.from({ length: pages.total_page }, (_, index) => (
      <button
        key={index}
        className={`h-12 w-12 ${index + 1 === pages.page ? "bg-primary" : "bg-order"} text-black rounded-full flex justify-center items-center`}
      >{index + 1}</button>
    ));
  };
  const nextPage = () => {
    if (pages.next === "null") {
      return
    }
    product(pages.next)}
  const prevPage = () => {
    if (pages.prev === "null") {
      return
    }
    product(pages.prev)}
  //submit handler
  const submit = () => {
    product(url)}
  const pageSubmit = (urls) => {
    product(urls)
  }
  const consol = () => {
    console.log(pages);
  }
  return (
    <Title title="Product">
      <Header />
      <main className="">
      <div className='hidden lg:block relative w-full' >
        <img src="./webp/Rectangle 299.webp" alt="product" className='w-full' />
        <p className='text-2xl lg:text-5xl absolute text-white top-20 desk:top-40 left-10'>We Provide Good Coffee and Healthy Meals</p>
      </div>
        <section className="px-2 md:px-10 desk:px-def flex flex-col gap-y-5 mb-10 mt-10">
          <p className="text-2xl lg:text-5xl">Today Promo</p>
          <div className="w-full overflow-scroll">
            <div className="flex w-[2600px] gap-x-5">
              <Promo />
              <Promo />
              <Promo />
              <Promo />
              <Promo />
              <Promo />
              <Promo />
            </div>
          </div>
        </section>
        <section className='px-2 md:px-10 desk:px-def'>
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
                  value="Coffee"
                  checked={isCategoryChecked("Coffee")}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Coffee</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="category" 
                  onChange={setNewCategory}
                  value="Non - Coffee"
                  checked={isCategoryChecked("Non - Coffee")}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Non Coffee</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="category"
                  onChange={setNewCategory}
                  value="Food"
                  checked={isCategoryChecked("Food")}
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
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="radio"
                  name="sort"
                  onChange={setSort}
                  value="Oldest"
                  checked={isSortChecked("Oldest")}
                  className="cursor-pointer h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Oldest</p>
              </div>
              </form>
              <form>
              <p className="text-xl h-[45px]">Range Price</p>
              <div className='flex'>
                <p className='flex-1'>{minValue}</p>
                <p>To</p>
                <p className='flex-1 flex justify-end'>{maxValue}</p>
              </div>
              <div className="flex items-center h-[45px]">
                <input
                  type="range"
                  name='min_value'
                  onChange={min}
                  className="w-[50%] cursor-pointer appearance-none bg-orange-500 h-1 rounded-full outline-none"
                  min="20000"
                  max="50000"
                  step="500"
                />
                <input
                  type="range"
                  name='max_value'
                  onChange={max}
                  className="w-[50%] cursor-pointer appearance-none bg-orange-500 h-1 rounded-full outline-none"
                  min="50500"
                  max="100000"
                  step="500"
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
                      id: product.Id,
                    })}
                  </div>
                  ))
                  ) : (
                  <div className='absolute text-xl md:text-2xl lg:text-4xl justify-center font-semibold text-footer'>
                      No product information available.
                  </div>
                   )}
                </div>
                   <div className='flex flex-1 justify-center'>
                    {pages !== null && 
                      <div className='flex gap-x-2 text-lg text-white justify center items-center'>
                        <button className={`h-12 w-12 bg-order ${pages.prev !== "null" ? "text-black" : "text-red-700"} rounded-full flex justify-center items-center`}
                        onClick={prevPage}>
                        <ion-icon name="chevron-back-outline"></ion-icon></button>
                        {renderButtons()}
                        <button className={`h-12 w-12 bg-order ${pages.next !== null ? "text-black" : "text-gray-700"} rounded-full flex justify-center items-center`}
                        onClick={nextPage}>
                        <ion-icon name="chevron-forward-outline"></ion-icon></button>
                      </div>
                    }
                   </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Title>
  );
}

export default Product;
