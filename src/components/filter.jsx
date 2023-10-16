import React from 'react'
import { useSearchParams } from "react-router-dom";
import { useProductContext } from '../context/productContext';
import { searchProduct } from '../https/product';

function filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {product, changeProduct} = useProductContext();
  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setSearchParams((prev) => {
  //     const prevSearchParams = {};
  //     prev.forEach((value, key) => {
  //       Object.assign(prevSearchParams, { [key]: value });
  //     });
  //     return {
  //       ...prevSearchParams,
  //       search: e.target.search.value,
  //     };
  //   });
  // };
  const handleInputChange = (e) => {
    e.preventDefault();
    // setSearchParams(() => {
setSearchParams({ search: e.target.value })
    // })
  };
  const categoryHandler = (e) => {
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
  const sortHandler = (e) => {
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
  const baseUrl = import.meta.env.VITE_BACKEND_HOST;
  const paramsUrl = searchParams.toString();
  const submitFilter = () => {
      // console.log(url, paramsUrl);
      const url = baseUrl + "/products?" + paramsUrl
      searchProduct(url)
    // console.log(searchHandler)
    // console.log(prevSearchParams)
    .then((res) => {
        console.log(res.data);
        changeProduct({isProductAvailable: true,
          productInfo: res.data.result,
          page: res.data.meta});
      })
      .catch((err) => {
        // console.log(err)
        delete product.productInfo;
        changeProduct({
            isProductAvailable: false,
          });
      });
  }
  // const categoryList = ["Coffee","Non Coffee", "Foods"]
  // const sortList = ["Cheapest", "Most Expensive", "New Product"]
  return (
    <div
              className="hidden  w-[301px] lg:w-[388px] h-fit bg-black p-6 lg:flex flex-col gap-4 rounded-3xl text-white"
            >
              <div className="flex items-center h-[45px]">
                <p className="flex-1 text-2xl">Filter</p>
                <p className="flex flex-1 justify-end text-xl">Reset Filter</p>
              </div>
              <p className="text-xl mb-2.5">Search</p>
              <form  className='flex p-2 w-full rounded-xl text-black bg-white'>
                <input
                  type="text"
                  placeholder="Search Your Product"
                  name="search"
                  id="search"
                  className="flex-1 outline-none"
                  // defaultValue={searchParams.get("search")}
                  value={searchParams.get('search') || ''}
                  onChange={handleInputChange}
                />
                {/* <button type='submit'><ion-icon name="search-sharp"></ion-icon></button> */}
              </form>
              <p className="text-xl h-[45px]">Category</p>
              <select className='text-black rounded-sm' onChange={categoryHandler}>
                <option value="" className='text-base'>Choose Category</option>
                <option value="1" className='text-base'>Coffee</option>
                <option value="2">Non Coffee</option>
                <option value="3">Foods</option>
              </select>
              {/* <div className="relative flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Coffee</p>
              </div>

              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Non Coffee</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Foods</p>
              </div> */}
              <p className="text-xl h-[45px]">Sort By</p>
              <select className='text-black rounded-sm'  onChange={sortHandler}>
                <option value="" className='text-base'>Sort By</option>
                <option value="Cheapest" >Cheapest</option>
                <option value="Most Expensive">Most Expensive</option>
                <option value="New Product">New Product</option>
              </select>
              {/* <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Cheapest</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Most Expensive</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>New Product</p>
              </div> */}
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
              <button
                className="text-sm w-full bg-primary pl-5 pr-5 pt-3 pb-3 flex justify-center rounded-xl"
                onClick={submitFilter}
              >
                Apply Filter
              </button>
            </div>
  )
}

export default filter
