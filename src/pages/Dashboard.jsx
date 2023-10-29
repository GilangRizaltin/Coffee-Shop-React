import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react';
import ChartComponent from '../components/Chart';
import { statistic, getOrdersAllStatus } from '../https/dashboard';
import Header from '../components/header';
import Title from '../components/Title';

function Dashboard() {
    const [dateStart, setDateStart] = useState()
    const [dateEnd, setDateEnd] = useState()
    const dateStartValue = (e) => {
        e.preventDefault();
        setDateStart(e.target.value)
    }
    const dateEndValue = (e) => {
        e.preventDefault();
        setDateEnd(e.target.value)
    }
    const [dataStatistic, setDataStatistic] = useState([])
    const [dataStatus, setDataStatus] = useState(null)
    useEffect(() => {
        statistic()
        .then((res) => {
            // console.log(res)
            setDataStatistic(res.data.result)
        }) .catch((err) => {
            console.log(err)
        });
        getOrdersAllStatus()
        .then((res) => {
            // console.log(res.data.result);
            setDataStatus(res.data.result);
        }) .catch((err) => {
            console.log(err)
        });
      }, []);    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const currentmonth = () => {
        if (month <= 9) return "-0" + month.toString();
        return "-" + month.toString();
    }
    const dateNow = year.toString() + currentmonth();
    const [selectedDate, setSelectedDate] = useState(`${dateNow}`);
    const handleInputChange = (e) => {
        setSelectedDate(e.target.value);
        console.log(month);
    }
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
                            <p className=''>{dataStatus !== null && dataStatus[0].status ? dataStatus[0].status : "NULL"}</p>
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
                        <p className=''>{dataStatus !== null && dataStatus[0].status ? dataStatus[0].status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[0].total} Pcs</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-blue-600 w-fit h-full p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>{dataStatus !== null && dataStatus[1].status ? dataStatus[1].status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[1].total} Pcs</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-purple-600 w-fit h-full p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>{dataStatus !== null && dataStatus[2].status ? dataStatus[2].status : "NULL"}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>{dataStatus !== null && dataStatus[2].total} Pcs</p>
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
                    <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" name="as" id="as" onChange={dateStartValue} className='border-none outline-none bg-gray-400  font-bold'/>
                    </div>
                    <p className='font-bold'>To</p>
                    <div className='select-none cursor-pointer bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" name="as" id="as" onChange={dateEndValue}  className='border-none outline-none bg-gray-400  font-bold'/>
                    </div>
                </div>
            </div>
            <div className=' w-full'>
                <ChartComponent dateStart={dateStart} dateEnd={dateEnd}/>
            </div>
        </section>
        <section className='p-8 border-2 border-solid border-order rounded-lg'>
            <div className='md:flex'>
                <div className='flex-1 mb-2'>
                    <p className='font-bold'>Product Terlaris</p>
                </div>
                <div className='flex-1 flex mb-2 md:justify-end'>
                    <div className='bg-gray-400 w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline"></ion-icon>
                        <input type="date" name="as" id="as"  className='border-none outline-none bg-gray-400  font-bold'/>
                    </div>
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
    </ Title>
  )
}

export default Dashboard
