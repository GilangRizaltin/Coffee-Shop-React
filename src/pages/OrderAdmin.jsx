import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { detailProductOrder } from '../components/productCard';
import { getAllOrder, updateStatusOrder } from '../https/orderAdmin';

function OrderAdmin() {
  const [editModals, showEditModals] = useState(false)
  const setShowEditModals = () => {
    showEditModals((state) => !state)
  }
  const [addModals, showAddModals] = useState(false)
  const setShowAddModals = () => {
    showAddModals((state) => !state)
  }
  const [productQty, setProductQty] = useState(1)
  const increaseQty = () =>{
    setProductQty(productQty + 1)
  };
  const decreaseQty = () =>{
    if (productQty > 1) {
      setProductQty(productQty - 1)
    }
  };
  const data = [
    {
        no: 1,
        date: "12 Juni 2000",
        order: "ayam, gulai",
        status: "On Progress",
        total: 40000,
    },
    {
      no: 2,
      date: "12 sEPTEMBER 2000",
      order: "ayam, gulai",
      status: "On Progress",
      total: 40000,
  },
  {
    no: 3,
    date: "21 Juni 2000",
    order: "ayam, gulai",
    status: "On Progress",
    total: 40000,
},
{
  no: 4,
  date: "12 Juni 2000",
  order: "ayam, gulai",
  status: "On Progress",
  total: 45000,
},
{
  no: 5,
  date: "12 Juni 2000",
  order: "ayam, gulai",
  status: "On Progress",
  total: 42000,
},
{
  no: 6,
  date: "12 Juni 2000",
  order: "ayam, gulai",
  status: "On Progress",
  total: 47000,
},
];
  return (
    <>
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
                  <select name="" id="" className='bg-gray-300 p-2 rounded-lg outline-none'>
                    <option value="">On Progress</option>
                    <option value="">On Shipping</option>
                    <option value="">Canceled</option>
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
              <div className='w-full p-3 border-2 border-solid border-order bg-input_bg rounded-lg'>
                <input type="text" name="productName" id="name" placeholder='Enter User Name' className='text-sm outline-none w-full bg-input_bg'/>
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
              <select className='w-fit outline-none border-2 border-solid border-order rounded-lg p-2.5'>
              <option value="">All</option>
                <option value="">On Progress</option>
                <option value="">On Shipping</option>
                <option value="">Canceled</option>
              </select>
            </div>
            <div className=' flex flex-col gap-4 justify-end'>
              <p>Search Order</p>
              <div className='flex w-fit items-center border-2 border-solid border-order rounded-lg p-2.5'>
                <input type="text" name="search_bar" id="productSearchBar" placeholder='Enter Order ID' className='outline-none'/>
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
            <div className='flex items-end'>
              <button className='flex items-center gap-2 p-2.5 h-[48px] bg-primary rounded-lg'>
                <ion-icon name="funnel-outline"></ion-icon>
                <p>Filter</p>
              </button>
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
            {data && data.map((data) => (
              <React.Fragment key={data.no}>
                <div className={`flex justify-center items-center`}>
                  <ion-icon name="create-outline"></ion-icon>
                </div>
                <p className='col-span-1 flex justify-center items-center'>{data.no}</p>
                <p className='col-span-1 flex justify-center items-center'>{data.date}</p>
                <p className='col-span-1 flex justify-center items-center'>{data.order}</p>
                <p className='col-span-1 flex justify-center items-center'>{data.status}</p>
                <p className='col-span-1 flex justify-center items-center'>IDR {data.total}</p>
                <div className='col-span-1 flex gap-2 justify-center'>
                  <button onClick={setShowEditModals} className='w-8 h-8 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center'>
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
    </>
  )
}

export default OrderAdmin
