import React, { useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { detailProductOrder } from '../components/productCard';
import { getAllOrder, updateStatusOrder } from '../https/orderAdmin';
import { getAllUser } from '../https/userAdmin';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import AccessEnded from '../components/AccessEnded';
import Title from '../components/Title';


function OrderAdmin() {
  //JWT
  const user = useSelector(state => state.user.userInfo);
  const jwt = user.token
  const [showAccessEnded, setShowAccessEnded] = useState(false);
  //get order
  const [dataOrder, setDataOrder] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams({});
  const url = import.meta.env.VITE_BACKEND_HOST + "/orders?" + searchParams.toString()
  const getOrder = (url, jwt) => {
    getAllOrder(url, jwt)
    .then((res) => {
      console.log(res.data.result)
      setDataOrder(res.data.result)
    })
    .catch((err) => {
      console.log(err)
      setDataOrder(null)
      if (err.response.status === 401)
      setShowAccessEnded(true)
    })
  }
  useEffect(() => {
    getOrder(url, jwt)
  },[])
  //edit order
  const [editModals, showEditModals] = useState(false)
  const [orderDetails , setOrderDetails] = useState({})
  const [orderIdx, setOrderIdx] = useState()
  const setShowEditModals = (idx, no) => {
    setOrderDetails(dataOrder[idx])
    setOrderIdx(no)
    showEditModals((state) => !state)
  }
  //update order
  const [status, setStatus] = useState()
  const changeStatus = (e) => {
    e.preventDefault()
    setStatus({
      statuses: e.target.value
    })
  }
  const submitUpdate = () => {
    updateStatusOrder(orderIdx, status, jwt)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  //modals
  const [addModals, showAddModals] = useState(false)
  const setShowAddModals = () => {
    showAddModals((state) => !state)
  }
  //get User for add order
  const [dataUser, setDataUser] = useState([])
  const [idUser, setIdUser] = useState('') //for id user in add order by admin
  const inputUser = (e) => {
    e.preventDefault();
    const urlUser = import.meta.env.VITE_BACKEND_HOST + "/users?full_name=" + e.target.productName.value
    getAllUser(urlUser, jwt)
    .then((res) => {
      // console.log(res.data.result)
      setDataUser(res.data.result)
    })
    .catch((err) => {
      console.log(err)
    })
    // console.log(idUser)
  }
  
  //form
  const [productQty, setProductQty] = useState(1)
  const increaseQty = () =>{
    setProductQty(productQty + 1)
  };
  const decreaseQty = () =>{
    if (productQty > 1) {
      setProductQty(productQty - 1)
    }
  };
  const [filter, showFilter] = useState(false)
  const setShowFilter = () => {
  showFilter((state) => !state)
  }
  //search by id
  const onSearchHandler = (e) => {
    e.preventDefault()
    setSearchParams(() => {
      return {
        order_id: e.target.value
      }
    });
  }
  const submit = () => {
    getOrder(url, jwt)
  }
  //sort
  const selectSort = (e) => {
    e.preventDefault()
    // setSort(e.target.value)
    setSearchParams(() => {
      return {
        status: e.target.value
      }
    });
    getOrder(import.meta.env.VITE_BACKEND_HOST + "/orders?status=" + e.target.value, jwt)
  }
  return (
    <Title title="Admin Order">
    <Header mode="light"/>
    <main className='sm:flex'>
      <Sidebar />
      <div className='sm:w-[85%] lg:w-[80%] relative'>

        {editModals && 
        <div className='absolute w-full  flex  z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={setShowEditModals}>
          </div>
          <div className='h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold lg:text-base desk:text-2xl'>Order #12</p>
            <section className='text-sm flex-1'>
              <p className='text-base lg:text-xl mb-4'>Order Information</p>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="person-outline"></ion-icon>
                  <p>Fullname</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>gantenk</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="location-outline"></ion-icon>
                  <p>Address</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>st ville aville</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="call-outline"></ion-icon>
                  <p>Phone</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>weqeq2143</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="card-outline"></ion-icon>
                  <p>Payment Method</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>credit</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="cube-outline"></ion-icon>
                  <p>Shipping</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>Dine in</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="repeat-outline"></ion-icon>
                  <p>Status</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <select name="statuses" onChange={changeStatus} id="" className='bg-gray-300 p-2 rounded-lg outline-none'>
                    <option value="On progress'">On Progress</option>
                    <option value="Pending">On Shipping</option>
                    <option value="Done'">On Shipping</option>
                    <option value="Cancelled">Canceled</option>
                  </select>
                </div>
              </div>
              <div className='flex px-2.5 py-4'>
                <div className='flex items-center gap-2 text-footer'>
                  <p>Total Transaksi</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p className='text-primary font-semibold'>IDR 12000</p>
                </div>
              </div>
              {detailProductOrder({
                      title: "ara ara",
                      hot: "Hot",
                      size: "Venti",
                      quantity: 2,
                      serve_id: "Pick Up",
                      price: 20000,
              })}
              {detailProductOrder({
                      title: "asu kui",
                      hot: "Hot",
                      size: "Large",
                      quantity: 2,
                      serve_id: "Pick Up",
                      price: 24000,
              })}
            <button className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Edit Save
              </button>
            </section>
          </div>
        </div>
        }
        {addModals&& 
        <div className='absolute w-full flex  z-40'>
          <div className='flex-1 bg-black opacity-60' onClick={setShowAddModals}>
          </div>
          <div className='flex flex-col gap-y-[30px] h-full opacity right-0 w-[540px] bg-white p-8'>
            <p className=' font-semibold text-2xl'>Add Order</p>
            {/* for several reason, i change form below into div */}
            <div className='flex flex-col gap-y-[30px]'>
              <p className='text-sm font-semibold'>User Name</p>
              <form onSubmit={inputUser} className='w-full flex p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="productName" id="name" placeholder='Enter User Name' className='text-sm outline-none w-full bg-input_bg'/>
                <button type='submit'>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </form>
              <div className='flex gap-5 flex-wrap'>
                {dataUser && dataUser.map((data, idx) => (
                  <p key={idx} onClick={() => {setIdUser(data.No)}} className={`${idUser === data.No ? "bg-primary" : "bg-order"} p-2 rounded-lg w-fit text-sm cursor-pointer`}>{data.Name}</p>
                ))}
                {/* <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p> */}
              </div>
              <p className='text-sm font-semibold'>Search Product</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="productSearch" id="search" placeholder='Enter Product Name' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <div className='flex gap-5 flex-wrap'>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                <p className='p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
              </div>
              <div>
                <div className='flex items-center'>
                  <p className=' p-2 bg-order rounded-lg w-fit text-sm cursor-pointer'>Asian Dolce Latte</p>
                  <div className='flex-1 flex justify-end'>
                    <button className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md active:bg-primary' onClick={decreaseQty}>-</button>
                    <div className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md text-sm'><p>{productQty}</p></div>
                    <button className='flex justify-center items-center h-6 w-6 border-2 border-solid border-gray-700 rounded-md active:bg-primary' onClick={increaseQty}>+</button>
                  </div>
                </div>
              </div>
              <p className='text-sm font-semibold'>Hot or Ice?</p>
              <div  className='flex gap-6 text-xs'>
                <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Hot'>Hot</button>
                  <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Ice'>Ice</button>
              </div>
              <p className='text-sm font-semibold'>Size</p>
              <div className='flex gap-6 text-xs '>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Regular' >Regular</button>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Grande'>Grande</button>
                    <button className='flex-1 p-2.5 md: px-1 border-2 border-solid border-order focus:border-primary' value='Venti'>Venti</button>
              </div>
              <div className='flex'>
                <div className='flex items-center gap-2'>
                <p className='text-sm font-semibold'>Subtotal</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p className='text-primary font-semibold'>IDR 12000</p>
                </div>
              </div>
              <p className='text-sm font-semibold'>Promo</p>
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="productPromo" id="promo" placeholder='Enter Promo' className='text-sm outline-none w-full bg-input_bg'/>
              </div>
              <div className='flex'>
                <div className='flex items-center gap-2'>
                  <p className='text-sm font-semibold'>Total Transactions</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p className='text-primary font-semibold'>IDR 12000</p>
                </div>
              </div>
              <button className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Add Order
              </button>
            </div>
          </div>
        </div>
        }
        <div className='px-2 sm:px-10 py-4'>
        <section className='flex flex-col gap-4 md:flex-row mb-8 '>
          <div className='flex-1'>
            <p className='text-2xl font-semibold'>Order List</p>
            <button onClick={setShowAddModals} className='flex items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
            <ion-icon name="add-outline"></ion-icon>
            <p>Add Order</p>
            </button>
          </div>
          <div className='flex-1 flex flex-col sm:flex-row md:justify-end gap-4'>
            <div className=' flex flex-col gap-4 justify-end'>
              <p>Status</p>
              <select onChange={selectSort} className='w-fit outline-none border-2 border-solid border-order rounded-lg p-2.5'>
              <option value="">All</option>
                <option value="On progress">On Progress</option>
                <option value="Pending">On Shipping</option>
                <option value="Done">Done</option>
                <option value="Cancelled">Canceled</option>
              </select>
            </div>
            <div className=' flex flex-col gap-4 justify-end'>
              <p>Search Order</p>
              <div className='flex w-fit items-center border-2 border-solid border-order rounded-lg p-2.5'>
                <input type="text" onChange={onSearchHandler} name="search_bar" id="productSearchBar" placeholder='Enter Order ID' className='outline-none'/>
                <button onClick={submit}>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className='flex items-end'>
              <button onClick={setShowFilter}  className='flex items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
                <ion-icon name="funnel-outline"></ion-icon>
                <p>Filter</p>
              </button>
              {filter &&
              <div className='relative '>
                <div className='absolute top-2 z-10 right-0 bg-white border-2 border-solid border-order rounded-lg p-4 w-[300px] flex flex-col gap-4'>
                  <p>Contaning Product</p>
                  <div className='flex w-full items-center border-2 border-solid border-order rounded-lg p-2.5'>
                    <input type="text" name="search_bar" id="productSearchBar" placeholder='Enter Product' className='flex-1 outline-none'/>
                    <button>
                      <ion-icon name="search-outline"></ion-icon>
                    </button>
                  </div>
                  <button className='w-full p-2 flex justify-center items-center bg-primary rounded-lg'>Apply</button>
                </div>
              </div>
              }
            </div>
          </div>
        </section>
        <section className='border-2 border-solid border-order rounded-lg w-full p-2'>
        <div className=' w-full overflow-scroll'>
          <div className='grid grid-cols-7 gap-2  w-[1000px] lg:w-full'>
            <div className=' flex justify-center items-center py-8'>
              <ion-icon name="create-outline"></ion-icon>
            </div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>No. Order</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Date</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Order</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Status</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Total</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Action</div> {/* Empty column for Action */}
            {dataOrder  && dataOrder.map((data, idx) => (
              <React.Fragment key={idx}>
                <div className={`flex justify-center items-center`}>
                  <ion-icon name="create-outline"></ion-icon>
                </div>
                <p className='col-span-1 flex justify-center items-center'># {data.No}</p>
                <p className='col-span-1 flex justify-center items-center'>{format(new Date(data.Date), 'yyyy-MMM-dd')}</p>
                <p className='col-span-1 flex justify-center items-center'>A</p>
                <p className='col-span-1 flex justify-center items-center'>{data.Status}</p>
                <p className='col-span-1 flex justify-center items-center font-semibold'>IDR {data.Total_Transactions}</p>
                <div className='col-span-1 flex gap-2 justify-center'>
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
            <p className='flex-1'>Show 5 order of 100 Order</p>
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

export default OrderAdmin
