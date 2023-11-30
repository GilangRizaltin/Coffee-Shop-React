import React from 'react'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { addProduct, updateProduct } from '../https/productAdmin';
import { searchProduct } from '../https/product';
import { useSelector } from 'react-redux';
import Title from '../components/Title';
import AccessEnded from '../components/AccessEnded';

function ProductAdmin() {
//Set searchParams
const [searchParams, setSearchParams] = useSearchParams({
});
const [showAccessEnded, setShowAccessEnded] = useState(false);
//jwt
// const getUserData = JSON.parse(localStorage.getItem('dataUser'))
const user = useSelector(state => state.user.userInfo)
const jwt = user.token
//state
const [productData, setProductData] = useState(null)
const [metaData, setMetaData] = useState(0)
//generalize url and axios for search and get
const url = import.meta.env.VITE_BACKEND_HOST + "/products?" + searchParams.toString()
const getProducts = (url) => {
  searchProduct(url)
  .then((res) => {
    setProductData(res.data.result)
    setValueData(res.data.result)
    setMetaData(res.data.meta)
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
    if (err.response.status === 401)
      setShowAccessEnded(true)
  })
}
useEffect(() => {
  getProducts(url)
}, [])
//set toggle modals
const [editModals, showEditModals] = useState(false)
const [productDetails , setProductrDetails] = useState({})
const [valueData, setValueData] = useState({})
const [productIdx, setProductIdx] = useState()
const setShowEditModals = (idx, no) => {
  setProductrDetails(productData[idx]);
  setValueData(productData[idx]);
  setProductIdx(no)
  showEditModals((state) => !state)
  console.log(no)
}
const [addModals, showAddModals] = useState(false)
const setShowAddModals = () => {
  showAddModals((state) => !state)
}
const [filter, showFilter] = useState(false)
const setShowFilter = () => {
  showFilter((state) => !state)
}
//modals for res msg
const [message, setMessage] = useState('')
const [modals, setModals] = useState(false)
const setShowModals = () => {
  setModals((state) => !state)
}
//change handler
const handleChange = (event) => {
  event.preventDefault();
  const { name, value } = event.target;
  setProductrDetails((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
//submit update
const body = {};
const [bodyUpdate, setBodyUpdate] = useState({})
const [clearanceModalSubmit, setClearanceModalSubmit] = useState(false)
const setShowClearanceModalSubmit = () => {
  setClearanceModalSubmit((state) => !state)
}
const clearanceBeforeSubmit = () => {
  setShowClearanceModalSubmit();
  for (const key in productDetails) {
    if (productDetails[key] !== valueData[key]) {
      body[key] = valueData[key];
    }
  }
  // console.log(body)
  setBodyUpdate(body)
}
const confirmUpdates = () => {
  setShowClearanceModalSubmit();
  const urlUpdate = import.meta.env.VITE_BACKEND_HOST + "/products/" + productIdx
  updateProduct(urlUpdate, bodyUpdate, jwt)
  .then((res) => {
    setMessage(res.data.msg)
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
    setMessage(err.response.data.msg)
  });
  setShowModals();
  // console.log(bodyUpdate)
  // console.log(urlUpdate)
  // console.log(jwt)
}
// handler
const [category, setCategory] = useState('')
const [sort, setSortBy] = useState('')
//submit handler
const postUrl = import.meta.env.VITE_BACKEND_HOST + "/products"
const addSubmit = (e) => {
  e.preventDefault()
  const body = {
    Product_Name: e.target.productName.value,
    Categories: category,
    Description: e.target.productDesc.value,
    Price: e.target.productPrice.value
  }
  addProduct(postUrl, body, jwt)
  .then((res) => {
    console.log(res)
    setMessage(res.data.msg);
    setShowModals();
  }) 
  .catch((err) => {
    console.log(err)
    setMessage(err.response.data.msg);
    setShowModals();
  })
}
//search bar
const [minValue, setMinValue] = useState("20000")
const [maxValue, setMaxValue] = useState("50500")
const onChangeSearch = (e) => {
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
}
const search = (e) => {
  e.preventDefault();
  getProducts(url)
}
//filter
const min = (e) => {
  e.preventDefault()
  setMinValue(e.target.value);
  setSearchParams((prev) => {
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
    return {
      ...prev,
      minprice: parseInt(minValue),
      maxprice: parseInt(maxValue)
    }
  })
}
const setNewCategory = (e) => {
  e.preventDefault()
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
  setCategory(e.target.value)
};
const setSort = (e) => {
  e.preventDefault()
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
  setSortBy(e.target.value)
};
const submitFilter = () => {
  getProducts(url)
}
  return (
    <Title title="Product Admin">
    <Header mode="light"/>
    <main className='sm:flex w-full'>
      <Sidebar />
      <div className='sm:w-[85%] lg:w-[80%] relative'>

        {addModals&& 
        <div className='absolute w-full h-full flex z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={setShowAddModals}>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'>Add Product</p>
            <p className='text-sm'>Photo Product</p>
            <div id='upload-bar' className='flex flex-col gap-y-[30px]'>
              <div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                <ion-icon name="image-outline"></ion-icon>
              </div>
              <button className='w-fit text-xs px-2.5 py-2 rounded-lg bg-primary flex items-center justify-center font-semibold'>
                Upload
              </button>
            </div>
            {/* dibawah diganti sementara jadi div dari form */}
            <form onSubmit={addSubmit} className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>Product Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="productName" id="name" placeholder='Enter Product Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Price</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="number" name="productPrice" id="price" placeholder='Enter Product Price' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Category</p>
              <div className='flex gap-2 text-sm'>
                <button className='flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary focus:outline-none' value='1'>Coffee</button>
                <button className='flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary focus:outline-none' value='2'>Non Coffee</button>
                <button className='flex-1 flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary focus:outline-none' value='3'>Foods</button>
              </div>
              <p className='text-sm font-semibold'>Description</p>
              <div className='w-full h-[142px] p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input 
                  type="text" 
                  name="productDesc" 
                  id="description" 
                  placeholder='Enter Product Description' 
                  className='text-sm outline-none w-full bg-input_bg mt-2 ' 
                />
              </div>
              <button type='submit' className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Save Product
              </button>
            </form>
          </div>
        </div>
        }
        {editModals  && 
        <div className='absolute w-full h-full flex  z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={setShowEditModals}>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'>Edit Product</p>
            <p className='text-sm'>Photo Product</p>
            <div id='upload-bar' className='flex flex-col gap-y-[30px]'>
              <div className='w-[50px] h-[50px] flex items-center justify-center bg-gray-400 rounded-lg'>
                <ion-icon name="image-outline"></ion-icon>
              </div>
              <button className='w-fit text-xs px-2.5 py-2 rounded-lg bg-primary flex items-center justify-center font-semibold'>
                Upload
              </button>
            </div>
            <div className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>Product Name</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" value={productDetails.Product} onChange={handleChange} name="Product" placeholder='Enter Product Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Price</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="number" value={productDetails.Price} onChange={handleChange}  name="Price" placeholder='Enter Product Price' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <p className='text-sm font-semibold'>Category</p>
              <div className='flex gap-2 text-sm'>
                <button className={`flex-1 ${productDetails.Categories === "Coffee" && "border-primary"} flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary`}>Coffee</button>
                <button className={`flex-1 ${productDetails.Categories === "Non - Coffee" && "border-primary"} flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary`}>Non Coffee</button>
                <button className={`flex-1 ${productDetails.Categories === "Food" && "border-primary"} flex items-center justify-center p-2 border-2 border-solid border-order rounded-lg focus:border-primary`}>Foods</button>
              </div>
              <p className='text-sm font-semibold'>Description</p>
              <div className='w-full h-[142px] p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input 
                  type="text" 
                  name="Description" 
                  value={productDetails.Description}
                  onChange={handleChange} 
                  placeholder='Enter Product Description' 
                  className='text-sm outline-none w-full bg-input_bg mt-2 ' 
                />
              </div>
              <button onClick={clearanceBeforeSubmit} className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Edit Save
              </button>
            </div>
          </div>
        </div>
        }
        {clearanceModalSubmit && 
        <div
        className='flex fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90'
        id="updatePhotoModals"
        >
        <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
          <p className='text-red-800'>Are you sure for updating product?</p>
          <div className='flex flex-col gap-8'>
              <div className="flex justify-end items-center gap-4 text-black">
                <button
                  className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
                  id="setUpdatePhoto" onClick={confirmUpdates}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        }
        {modals && 
        <div
        className='flex fixed inset-0  items-center justify-center z-50 outline-none modal w-full h-full bg-zinc-600/90'
        id="updatePhotoModals"
        >
        <div className="flex flex-col gap-7 modal-content bg-white p-8 rounded shadow-lg w-[300px] justify-center">
          <p className='text-red-800'>{message}</p>
          <div className='flex flex-col gap-8'>
              <div className="flex justify-end items-center gap-4 text-black">
                <button
                  className="flex-1 hover:border-primary text-base border-2 border-solid border-order rounded-xl"
                  id="setUpdatePhoto" onClick={setShowModals}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
        }
        <div className='px-2 sm:px-10 py-4'>
        <section className='flex flex-col sm:flex-row gap-4 mb-8'>
          <div className='flex-1 flex flex-col gap-4'>
            <p className='text-2xl font-semibold'>Product List</p>
            <button  onClick={setShowAddModals} className='flex text-sm w-fit items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
            <ion-icon name="add-outline"></ion-icon>
            <p>Add Product</p>
            </button>
          </div>
          <div className='flex-1 flex sm:justify-end gap-4'>
            <form onSubmit={search} className=' flex flex-col gap-4 justify-end text-sm'>
              <p>Search Product</p>
              <div className='flex items-center border-2 border-solid border-order rounded-lg p-2.5'>
                <input type="text" onChange={onChangeSearch} name="search_bar" id="productSearchBar" placeholder='Enter Product Name' className='outline-none'/>
                <button type='submit'>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </form>
            <div className='flex items-end text-sm'>
              <button onClick={setShowFilter} className='flex text-sm items-center gap-2 p-3  bg-primary rounded-lg'>
                <ion-icon name="funnel-outline"></ion-icon>
                <p>Filter</p>
              </button>
              {filter &&
              <div className='relative '>
                <div className='absolute top-2 z-10 right-0 bg-white border-2 border-solid border-order rounded-lg p-4 w-[300px] flex flex-col gap-4'>
                  <p>Category</p>
                  <div className='flex gap-2'>
                    <button onClick={setNewCategory} value="1" name="category" className={`${category === '1' ? "border-primary" : "border-order"} p-2 border-2 border-solid rounded-lg`}>Coffee</button>
                    <button onClick={setNewCategory} value="2" name="category" className={`${category === '2' ? "border-primary" : "border-order"} flex-1 p-2 border-2 border-solid rounded-lg`}>Non-Coffee</button>
                    <button onClick={setNewCategory} value="3" name="category" className={`${category === '3' ? "border-primary" : "border-order"} p-2 border-2 border-solid rounded-lg`}>Foods</button>
                  </div>
                  <p>Sort</p>
                  <div className='flex gap-2'>
                    <button name="sort" onClick={setSort} value='Cheapest' className={`${sort === 'Cheapest' ? "border-primary" : "border-order"} flex-1 p-2 border-2 border-solid border-order rounded-lg`}>Cheapest</button>
                    <button name="sort" onClick={setSort} value='Most Expensive' className={`${sort === 'Most Expensive' ? "border-primary" : "border-order"} flex-1 p-2 border-2 border-solid border-order rounded-lg`}>Most Expensive</button>
                    <button name="sort" onClick={setSort} value='New Product' className={`${sort === 'New Product' ? "border-primary" : "border-order"} flex-1 p-2 border-2 border-solid border-order rounded-lg`}>New Product</button>
                  </div>
                  <p>Range</p>
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
                  <button onClick={submitFilter} className='w-full p-2 flex justify-center items-center bg-primary rounded-lg'>Apply</button>
                </div>
              </div>
              }
            </div>
          </div>
        </section>
        <section className='border-2 border-solid border-order rounded-lg w-full p-2'>
          <div className=' w-full overflow-scroll'>
            <div className='grid grid-cols-6 gap-4  w-[1000px] lg:w-full'>
              <div className=' flex justify-center items-center  py-8'>
                <ion-icon name="create-outline"></ion-icon>
              </div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Image</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Product Name</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Price</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Desc</div>
              <div className='col-span-1 flex justify-center items-center font-bold py-8'>Action</div> {/* Empty column for Action */}
              {productData && productData.map((data, idx) => (
                <React.Fragment key={idx}>
                  <div className={`flex justify-center items-center`}>
                    <ion-icon name="create-outline"></ion-icon>
                  </div>
                  <div className='col-span-1 flex justify-center items-center'>
                    <img src="../webp/image 31.webp" className='rounded-lg' alt="" height={48} width={48} />
                  </div>
                  <p className='col-span-1 flex justify-center items-center'>{data.Product}</p>
                  <p className='col-span-1 flex justify-center items-center'>IDR {data.Price}</p>
                  <p className='col-span-1 flex justify-center items-center'>{data.Description}</p>
                  <div className='col-span-1 flex gap-2 justify-center items-center'>
                    <button onClick={() => {setShowEditModals(idx, data.No)}} className='w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center'>
                      <ion-icon name="pencil-outline"></ion-icon>
                    </button>
                    <button className='w-8 h-8 bg-red-300 text-red-800 rounded-full flex items-center justify-center'>
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className='md:flex p-4 text-footer'>
            <p className='flex-1'>Show {productData ? productData.length : 0} of {metaData.totalProduct} Products</p>
            <div className='flex-1 flex md:justify-end gap-4'>
              <p>Prev</p>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>Next</p>
            </div>
          </div>
        </section>
        </div>
      </div>
    </main>
    {showAccessEnded && <AccessEnded /> }
    </ Title>
  )
}

export default ProductAdmin
