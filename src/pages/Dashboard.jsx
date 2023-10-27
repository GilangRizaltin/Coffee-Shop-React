import React from 'react'
import Sidebar from '../components/Sidebar'
import { useState, useEffect } from 'react';
import ChartComponent from '../components/Chart';
import { statistic } from '../https/dashboard';
import Header from '../components/header';

function Dashboard() {
    const [dataStatistic, setDataStatistic] = useState([])
    useEffect(() => {
        statistic()
        .then((res) => {
            // console.log(res)
            setDataStatistic(res.data.result)
        }) .catch((err) => {
            console.log(err)
        })
      }, []);
    const data = [
        {
            No: 1,
            Nama: "ayam",
            terjual: 200,
            keuntungan: 29999
        },
        {
            No: 2,
            Nama: "pisang",
            terjual: 200,
            keuntungan: 29999
        },
        {
            No: 3,
            Nama: "ikan",
            terjual: 200,
            keuntungan: 29999
        },
        {
            No: 4,
            Nama: "julid",
            terjual: 200,
            keuntungan: 29999
        },
    ];
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const currentmonth = () => {
        if (month <= 9) return "-0" + month.toString();
        return "-" + month.toString();
    }
    const dateNow = year.toString() + currentmonth();
    const [selectedDate, setSelectedDate] = useState(`${dateNow}`); // Initial value in YYYY-MM format
    const handleInputChange = (e) => {
        setSelectedDate(e.target.value);
        console.log(dataStatistic);

    }
  return (
    <>
    <Header mode="light"/>
    <main className='sm:flex'>
        <Sidebar />
        <div className='w-full flex flex-col gap-4 px-2 sm:px-10 py-4'>
        <section className='flex justify-between'> 
            <div className='w-full flex justify-between md:hidden'>
                <button className='h-full w-[40px] bg:white hover:bg-gray-400 rounded-lg'>
                <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <div className='bg-purple-600 w-3/4 h-fit p-4 text-white rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                            <p className=''>Orders On Progress</p>
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
            <div className='hidden md:flex gap-4 w-full'>
                <div className='flex-1 bg-green-600 w-fit h-fit p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>Orders On Progress</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>200</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-blue-600 w-fit h-fit p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>Orders On Progress</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>200</p>
                        <div className='flex items-center gap-2 text-xs'>
                            <p>+11,01%</p>
                            <p><ion-icon name="trending-up-outline"></ion-icon></p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 bg-purple-600 w-fit h-fit p-4 text-white rounded-lg'>
                    <div className='flex items-center gap-2'>
                        <p className='p-2 h-8 w-8 flex items-center text-primary bg-white rounded-full'><ion-icon name="wine-outline"></ion-icon></p>
                        <p className=''>Orders On Progress</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg'>200</p>
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
                <div className='flex-1 flex md:justify-end'>
                    <div className='bg-gray-400 cursor-pointer w-fit flex items-center gap-2 p-2 rounded-lg'>
                        <ion-icon name="calendar-outline" className='cursor-pointer '></ion-icon>
                        <input type="month" name="" id="month-input" value={selectedDate} onChange={handleInputChange} class=" bg-gray-400 cursor-pointer  w-fit text-sm p-2.5 outline-none font-bold"/>
                    </div>
                </div>
            </div>
            <div className='h-[300px] w-full'>
            {/* <ChartComponent dataStatistic={dataStatistic}/> */}
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
            <div className=''>
                {/* <div className='overflow-scroll w-full'>
                    <div className='w-[1600px]'> */}
                        <div className='flex'>
                            <p className='flex-1'>No</p>
                            <p className='flex-1 md:flex-[2]'>Nama Produk</p>
                            <p className='flex-1'>Terjual</p>
                            <p className='flex-1'>Keuntungan</p>
                        </div>
                        {data && data.map((data) => (
                            <div key={data.No} className={`flex ${data.No % 2 === 0 ? 'bg-gray-200' : 'bg-white'} py-10`}>
                            <p className='flex-1'>{data.No}</p>
                            <p className='flex-1 md:flex-[2]'>{data.Nama}</p>
                            <p className='flex-1'>{data.terjual} pcs</p>
                            <p className='flex-1 text-green-400'>IDR {data.keuntungan}</p>
                            </div>
                        ))}    
                    {/* </div>
                </div> */}
            </div>
        </section>
        </div>
    </main>
    </>
  )
}

export default Dashboard
