import React from 'react'
import { useSearchParams } from "react-router-dom";
import { useProductContext } from '../context/productContext';
import { searchProduct } from '../https/product';
import { useState } from 'react';

function filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {product, changeProduct} = useProductContext();
  // { search: e.target.value }
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
      search: '',   // Reset search input to an empty string
      category: '', // Reset category filter to an empty string or default category value
      sort: '',     // Reset sort filter to an empty string or default sort value
      // Add more filter parameters and reset their values as needed
    });
  };
  const baseUrl = import.meta.env.VITE_BACKEND_HOST;
  const submitFilter = () => {
      const url = baseUrl + "/products?" + searchParams.toString();
      searchProduct(url)
    .then((res) => {
        console.log(res.data);
        changeProduct({isProductAvailable: true,
          productInfo: res.data.result,
          page: res.data.meta});
      })
      .catch((err) => {
        console.log(err)
        delete product.productInfo;
        changeProduct({
            isProductAvailable: false,
          });
      });
  }
  return (
    <div
              className="hidden  w-[301px] lg:w-[388px] h-fit bg-black p-6 lg:flex flex-col gap-4 rounded-3xl text-white"
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
                  // defaultValue={searchParams.get("search")}
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
                onClick={submitFilter}
              >
                Apply Filter
              </button>
            </div>
  )
}

export default filter
