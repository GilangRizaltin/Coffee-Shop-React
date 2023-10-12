import React from 'react'

function filter() {
  return (
    <div
              className="hidden lg:block w-[301px] lg:w-[388px] h-fit bg-black p-6 flex flex-col gap-4 rounded-3xl text-white"
            >
              <div className="flex items-center h-[45px]">
                <p className="flex-1 text-2xl">Filter</p>
                <p className="flex flex-1 justify-end text-xl">Reset Filter</p>
              </div>
              <div>
                <p className="text-xl mb-2.5">Search</p>
                <input
                  type="text"
                  placeholder="Search Your Product"
                  name="search"
                  id="search"
                  className="p-2 w-full rounded-xl text-black outline-none"
                />
              </div>
              <p className="text-xl h-[45px]">Category</p>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Favourite Product</p>
              </div>
              <div className="relative flex items-center gap-4 h-[45px]">
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
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Add-On</p>
              </div>
              <p className="text-xl h-[45px]">Sort By</p>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Buy 1 get 1</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Flash Sale</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Birthday Package</p>
              </div>
              <div className="flex items-center gap-4 h-[45px]">
                <input
                  type="checkbox"
                  className="h-5 w-5 border rounded-LG focus:ring-0 appearance-none checked:bg-orange-500 checked:border-none rounded-md checked:text-black"
                />
                <p>Cheap</p>
              </div>
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
              >
                Apply Filter
              </button>
            </div>
  )
}

export default filter
