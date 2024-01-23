import React, { useEffect } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { detailProductOrder } from '../components/ProductCard';
import { getAllOrder, updateStatusOrder } from '../https/orderAdmin';
import { getAllUser } from '../https/userAdmin';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import AccessEnded from '../components/AccessEnded';
import Title from '../components/Title';


function OrderAdmin() {
  const user = useSelector(state => state.user.userInfo);
  const navigate = useNavigate()
  const jwt = user.token
  const [showAccessEnded, setShowAccessEnded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1
  });
  const [dataOrder, setDataOrder] = useState(null)
  const [metaOrder, setMetaOrder] = useState({})

  const url = import.meta.env.VITE_BACKEND_HOST + "/order?" + searchParams.toString()
  const getOrder = (url, jwt) => {
    getAllOrder(url, jwt)
    .then((res) => {
      console.log(res)
      setDataOrder(res.data.data)
      setMetaOrder(res.data.meta)
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
  
  const [editModals, showEditModals] = useState(false)
  const [orderDetails , setOrderDetails] = useState({})
  const [orderIdx, setOrderIdx] = useState()
  const setShowEditModals = (idx, no) => {
    setOrderDetails(dataOrder[idx])
    setOrderIdx(no)
    showEditModals((state) => !state)
  }
  
  const [status, setStatus] = useState()
  const changeStatus = (e) => {
    e.preventDefault()
    setStatus({
      statuses: e.target.value
    })
  }
  const submitUpdate = () => {
    const body = {
      Status: status
    }
    updateStatusOrder(orderIdx, body, jwt)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const pagination = (page) => {
    if (page !== metaOrder.page) {
      // const queryParams = searchParams.get("page")
      // console.log(queryParams)
      // if (!queryParams) {
      //   const params = (searchParams.toString()) + "&page=" + page
      //   return navigate("/admin/order?" + params)
      // }
      // if (queryParams) {
      //   const params = searchParams.toString() + page
      //   navigate("/admin/order?" + params)
      // }
      
    }
    if (page === "nextPage") {
      if (metaOrder && metaOrder.next !== "null") {
        return navigate("/admin/order?" + metaOrder.next)
      }
    }
    if (page === "prevPage") {
      if (metaOrder && metaOrder.next !== "null") {
        return navigate("/admin/order?" + metaOrder.prev)
      }
    }
  }
  
  const renderButtons = () => {
    return Array.from({ length: metaOrder.total_page }, (_, index) => (
      <button onClick={() => {pagination(index + 1)}}
        key={index}
        className={`${index + 1 === metaOrder.page && "font-semibold"}`}
      >{index + 1}</button>
    ));
  };

  let productArray = []
  const productList = dataOrder.Product_list
  if (dataOrder.Product_list && dataOrder.Product_list !== "No data product") {
    productArray = productList.replace(/\s/g, '').split(',');
  }

  const renderOrderProduct = () => {
    return Array.from({ length: productArray }, (_, index) => (
      <button
        key={index}
        className="font-semibold"
      >{productArray[index]}</button>
    ));
  }




  

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
                  <p>{orderDetails.User}</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="location-outline"></ion-icon>
                  <p>Address</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>{orderDetails.Addrress}</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="call-outline"></ion-icon>
                  <p>Phone</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>+44-2123-2313</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="card-outline"></ion-icon>
                  <p>Payment Method</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>{orderDetails.Payment_Type}</p>
                </div>
              </div>
              <div className='flex px-2.5 py-4 border-b-2 border-solid border-order'>
                <div className='flex items-center gap-2 text-footer'>
                  <ion-icon name="cube-outline"></ion-icon>
                  <p>Shipping</p>
                </div>
                <div className='flex-1 flex justify-end font-semibold'>
                  <p>{orderDetails.Serving_Type}</p>
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
                      title: "Hazelnut Latte",
                      hot: "Hot",
                      size: "Venti",
                      quantity: 2,
                      serve_id: "Pick Up",
                      price: 20000,
              })}
              {detailProductOrder({
                      title: "Hazlenut Latte",
                      hot: "Hot",
                      size: "Large",
                      quantity: 2,
                      serve_id: "Pick Up",
                      price: 24000,
              })}
            <button onClick={submitUpdate} className='text-sm font-semibold w-full p-2.5 flex items-center justify-center bg-primary rounded-lg'>
                Edit Save
              </button>
            </section>
          </div>
        </div>
        }
        <div className='px-2 sm:px-10 py-4'>
        <section className='flex flex-col gap-4 md:flex-row mb-8 '>
          <div className='flex-1'>
            <p className='text-2xl font-semibold'>Order List</p>
            <button className='flex items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
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
        <div className=''>
          <div className="text-sm font-medium text-secondary overflow-x-scroll">
                <table className="table-auto lg:table-fixed w-full">
                  <thead className="">
                    <tr className="border-b border-[#E8E8E84D]">
                      <th className="p-6 text-left w-24">No. Order</th>
                      <th className="p-6 text-center w-fit">Date</th>
                      <th className="p-6 text-center">Order</th>
                      <th className="p-6 text-center">Status</th>
                      <th className="p-6 text-center">Total</th>
                      <th className="p-6 text-center w-24">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataOrder && dataOrder.map((data, idx) => (
                      <tr
                        className={`border-b border-[#E8E8E84D]${
                          idx % 2 == 0 ? " bg-[#F9FAFB]" : ""
                        }`}
                        key={idx}
                      >
                        <td className="px-6 text-left"># {data.Id}</td>
                        <td className="p-6 flex justify-center">{format(new Date(data.Created_at), 'yyyy-MMM-dd')}</td>
                        <td className="text-center">
                          <div>
                            {renderOrderProduct()}
                          </div></td>
                        <td className={`text-center`}>{data.Status}</td>
                        <td className={`text-center`}>IDR {data.Total_transaction}</td>
                        <td className="text-center">
                          <div className="flex gap-y-2 items-center xl:flex-row xl:justify-center xl:gap-x-2">
                            <div
                              className="p-1 bg-[#FF89061A] rounded-full cursor-pointer"
                            >
                              <button className='w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center'>
                                <ion-icon name="pencil-outline"></ion-icon>
                              </button>
                            </div>
                            <div
                              className="p-1 bg-[#D000001A] rounded-full cursor-pointer"
                            >
                              <button className='w-8 h-8 bg-red-300 text-red-800 rounded-full flex items-center justify-center'>
                                <ion-icon name="trash-outline"></ion-icon>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          <div className='md:flex p-4 text-footer'>
            <p className='flex-1'>Show {dataOrder && dataOrder.length} order of {metaOrder && metaOrder.total_data} Order</p>
            <div className='flex-1 flex md:justify-end gap-4'>
              <p onClick={() => {pagination("prevPage")}}>Prev</p>
              {renderButtons()}
              <p onClick={() => {pagination("nextPage")}}>Next</p>
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
