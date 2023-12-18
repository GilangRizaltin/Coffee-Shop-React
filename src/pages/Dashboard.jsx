import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react';
import ChartComponent from '../components/Chart';
import { statistic, getOrdersAllStatus, statisticProduct } from '../https/dashboard';
import Header from '../components/Header';
import Title from '../components/Title';
import AccessEnded from '../components/AccessEnded';
import { format } from 'date-fns';
import { useSelector } from 'react-redux';

function Dashboard() {
    const [showAccessEnded, setShowAccessEnded] = useState(false);

    const jwt = useSelector(state => state.user.userInfo.token)

    const currentDate = new Date();
    const sixDaysAgo = new Date();
    sixDaysAgo.setDate(currentDate.getDate() - 6);
    const formattedCurrentDate = currentDate.toISOString().split('T')[0];
    const formattedSixDaysAgo = sixDaysAgo.toISOString().split('T')[0];
    const [dateStart, setDateStart] = useState(formattedSixDaysAgo)
    const [dateEnd, setDateEnd] = useState(formattedCurrentDate)

    const getStatistic = () => {
        const stateUrl = import.meta.env.VITE_BACKEND_HOST + "/product/orderstat?date-start=" + dateStart + "&date-end=" + dateEnd
        statisticProduct(stateUrl, jwt)
        .then((res) => {
            console.log(res.data.data);
            setOrderStatistic(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const getOrderStatistic = (e) => {
        e.preventDefault()
        const starstDay = new Date();
        starstDay.setDate(currentDate.getDate() - e.target.value);
        const formattedStartDay = starstDay.toISOString().split('T')[0];
        const stateUrl = import.meta.env.VITE_BACKEND_HOST + "/product/orderstat?date-start=" + formattedStartDay + "&date-end=" + formattedCurrentDate
        statisticProduct(stateUrl, jwt)
        .then((res) => {
            console.log(res.data.data);
            setOrderStatistic(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        });
        console.log(stateUrl)
    }

    const getProductStatistic = (e) => {
        e.preventDefault()
        const starstDay = new Date();
        starstDay.setDate(currentDate.getDate() - e.target.value);
        const formattedStartDay = starstDay.toISOString().split('T')[0];
        const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/product/productstat?date-start=" + formattedStartDay + "&date-end=" + formattedCurrentDate
        statistic(baseUrl, jwt)
        .then((res) => {
            console.log(res.data.data);
            setDataStatistic(res.data.data)
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    const dateStartValue = (e) => {
        e.preventDefault();
        setDateStart(e.target.value)
        getStatistic()
        // console.log(formattedCurrentDate)
    }
    const dateEndValue = (e) => {
        e.preventDefault();
        setDateEnd(e.target.value)
        getStatistic()
        // console.log(formattedSixDaysAgo)
    }

    const [dataStatistic, setDataStatistic] = useState([])
    const [dataStatus, setDataStatus] = useState(null)
    const [orderStatistic, setOrderStatistic] = useState([])

    useEffect(() => {
        const starstDay = new Date();
        starstDay.setDate(currentDate.getDate() - 7);
        const formattedStartDay = starstDay.toISOString().split('T')[0];
        const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/product/productstat?date-start=" + formattedStartDay + "&date-end=" + formattedCurrentDate
        statistic(baseUrl, jwt)
        .then((res) => {
            // console.log(res)
            setDataStatistic(res.data.data)
            console.log(res.data.data)
        }) .catch((err) => {
            console.log(err)
            // if (err.response.status === 401)
            //     setShowAccessEnded(true)
        });
        getOrdersAllStatus(jwt)
        .then((res) => {
            // console.log(res.data.result);
            setDataStatus(res.data.data);
            console.log(res.data.data)
        }) .catch((err) => {
            console.log(err)
            if (err.response.status === 401)
                setShowAccessEnded(true)
        });
        getStatistic()
      }, []); 

    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth();
    // const currentmonth = () => {
    //     if (month <= 9) return "-0" + month.toString();
    //     return "-" + month.toString();
    // }
    // const dateNow = year.toString() + currentmonth();
    // const [selectedDate, setSelectedDate] = useState(`${dateNow}`);
    // const handleInputChange = (e) => {
    //     setSelectedDate(e.target.value);
    //     console.log(month);
    // }
    const consol = () => {
        console.log(dataStatus[0].status)
    }
    
  return (
    <Title title= "Dashboard">
    <Header mode="light"/>
    <main className='sm:flex'>
        <Sidebar />
        <div className='w-full flex flex-col gap-4 px-2 sm:px-10 py-4 sm:max-w-[85%] lg:max-w-[80%]'>
        <section className='flex justify-between'> 
            <div className='w-full flex justify-between md:hidden'>
                <button className='h-full w-[40px] bg:white hover:bg-gray-400 rounded-lg'>
                <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <div className='bg-purple-600 w-3/4 h-fit p-4 text-white rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                            <p className=''>{dataStatus !== null && dataStatus[0].Status ? dataStatus[0].Status : "NULL"}</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-lg'>200</p>
                            <div className='flex items-center gap-2 text-xs'>
                                <p>+11,01%</p>
                                <p><ion-icon name="trending-up-outline"></ion-icon></p>
                            </div>
                        </div>
                </div>
                <button className='h-full w-[40px] bg:white hover:bg-gray-400 rounded-lg'>
                <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>
            </div>
            <div onClick={consol} className='hidden md:flex gap-4 w-full'>
                <div className='flex-1 bg-green-600 w-fit h-full p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>{dataStatus !== null && dataStatus[0].Status ? dataStatus[0].Status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[0].Total} Pcs</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-blue-600 w-fit h-full p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>{dataStatus !== null && dataStatus[1].Status ? dataStatus[1].Status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[1].Total} Pcs</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-purple-600 w-fit h-full p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>{dataStatus !== null && dataStatus[2].Status ? dataStatus[2].Status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[2].Total} Pcs</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='p-8 border-2 border-solid border-order rounded-lg flex flex-col gap-8'>
            <div className='md:flex'>
                <div className='flex-1 flex flex-col gap-2 mb-2'>
                    <p className='font-bold'>Total Penjualan</p>
                    <p>1000 cup (16 - 23 January 2023)</p>
                </div>
                <div className='flex-1 flex flex-col md:flex-row  md:justify-end gap-2 md:items-center'>
                    {/* <div className='bg-gray-400 cursor-pointer w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline" className='cursor-pointer '></ion-icon>
                        <input type="month" name="" id="month-input" value={selectedDate} onChange={handleInputChange} class=" bg-gray-400 cursor-pointer  w-fit text-sm p-2.5 outline-none font-bold"/>
                    </div> */}
                    {/* <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" value={dateStart} name="as" id="as" onChange={dateStartValue} className='border-none outline-none bg-gray-400  font-bold'/>
                    </div>
                    <p className='font-bold'>To</p>
                    <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" value={dateEnd} name="as" id="as" onChange={dateEndValue}  className='border-none outline-none bg-gray-400  font-bold'/>
                    </div> */}
                    <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg font-semibold'>
                        <select name="" id="" className='outline-none bg-gray-400' onChange={getOrderStatistic}>
                            <option value={7} className='outline-none bg-gray-400' onClick={getOrderStatistic}>Last 7 days</option>
                            <option value={14} className='outline-none bg-gray-400' onClick={getOrderStatistic}>Last 2 weeks</option>
                            <option value={30} className='outline-none bg-gray-400' onClick={getOrderStatistic}>Last Month</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className=' w-full'>
                <ChartComponent dataStatistic={orderStatistic}/>
            </div>
        </section>
        <section className='p-8 border-2 border-solid border-order rounded-lg'>
            <div className='md:flex'>
                <div className='flex-1 mb-2'>
                    <p className='font-bold'>Product Terlaris</p>
                </div>
                {/* <div className='flex-1 flex mb-2 md:justify-end'>
                    <div className='bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" name="as" id="as"  className='border-none outline-none bg-gray-400  font-bold'/>
                    </div>
                </div> */}
                <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg font-semibold'>
                    <select name="" id="" className='outline-none bg-gray-400' onChange={getProductStatistic}>
                        <option value={7} className='outline-none bg-gray-400'>Last 7 days</option>
                        <option value={14} className='outline-none bg-gray-400'>Last 2 weeks</option>
                        <option value={30} className='outline-none bg-gray-400'>Last Month</option>
                    </select>
                </div>
            </div>
            <div className=' w-full overflow-scroll'>
          <div className='grid grid-cols-4 gap-2  w-[700px] lg:w-full'>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>No</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Product Name</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Sold</div>
            <div className='col-span-1 flex justify-center items-center font-bold py-8'>Income</div>
            {dataStatistic && dataStatistic.map((data, idx) => (
              <React.Fragment key={idx}>
                <p className='col-span-1 flex justify-center items-center'>{idx + 1}</p>
                <p className='col-span-1 flex justify-center items-center'>{data.Product}</p>
                <p className='col-span-1 flex justify-center items-center'>{data.Total_Quantity}</p>
                <p className='col-span-1 flex justify-center items-center text-green-500 font-semibold'>IDR {data.Total_Income}</p>
              </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        </div>
    </main>
    {/* {showAccessEnded && <AccessEnded /> } */}
    </ Title>
  )
}

export default Dashboard
