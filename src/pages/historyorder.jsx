import React, { useEffect, useState } from 'react'
import Header from "../components/header";
import Footer from "../components/footer";
import { getOrderDetail } from '../https/order';
// import { useSearchParams } from 'react-router-dom';
import { historyProduct } from '../components/productCard';
import { useSelector } from 'react-redux';

function historyorder() {
  const user = useSelector(state => state.user.userInfo);
  const jwt = user.token
  const url = import.meta.env.VITE_BACKEND_HOST + "/orders/order?page=1"
  const [dataOrder, setDataOrder] = useState(null)
  const [pages , setPage] = useState({
    next: "",
    prev: "",
  })
  useEffect(() => {
    getOrderDetail(url, jwt)
    .then((res) => {
      console.log(res);
      setDataOrder(res.data.result);
      setPage(res.data.meta);
        // console.log(res.data.meta)
    }) .catch((err) => {
      console.log(err)
    })
  }, []);
  if (dataOrder) {
    const timestamp = dataOrder.Date;
    const date = new Date(timestamp);
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
  }
  return (
    <>
    <Header />
    <main class="pl-2 pr-2 md:pl-10 md:pr-10 desk:pl-def desk:pr-def">
      <div
        class="flex pt-[38px] pb-[31px] md:pt-[58px] md:pb-[40px] desk:pt-[78px] desk:pb-[58px] items-center"
      >
        <p class="flex-1 font-semibold text-2xl lg:text-3xl desk:text-5xl">
          History Order
        </p>
        <div class="flex flex-0.5 justify-end">
          <p
            class="bg-order h-7 w-7 flex justify-center items-center lg:text-xl"
          >
            2
          </p>
        </div>
      </div>
      <section class="md:flex md:gap-x-4 text-sm md:text-base">
        <div class="w-full md:w-[70%] lg:flex-1">
          <div
            class="flex flex-col gap-y-5 mb-4 lg:flex-row-reverse lg:gap-x-10"
          >
            <input
              type="month"
              name=""
              id="month-input"
              class="bg-order w-fit text-sm p-2.5 outline-none"
            />
            <div
              class="flex bg-order w-full items-center p-2.5 gap-x-2 text-xs md:text-base"
            >
              <p
                class="flex-1 flex justify-center items-center h-7 hover:bg-white"
              >
                On Progress
              </p>
              <p
                class="flex-1 flex justify-center items-center h-7 hover:bg-white"
              >
                Sending Goods
              </p>
              <p
                class="flex-1 flex justify-center items-center h-7 hover:bg-white"
              >
                Finish Order
              </p>
            </div>
          </div>
          {dataOrder ? (
                    dataOrder.map((order, index) => (
                    <div key={index}>
                    {historyProduct({
                      no: order.No,
                      date: order.Date,
                      total: order.Total_Transactions,
                      // status: order.Status,
                      status: "Done",
                    })}
                  </div>
                  ))
                  ) : (
                  <div className='flex text-xl md:text-2xl lg:text-4xl justify-center font-semibold my-8 text-footer'>
                      No Orders information available.
                  </div>
                   )}
          <div class="w-full flex justify-center gap-2 mb-10">
            <button
              class="text-md bg-primary p-2 h-9 w-9 rounded-full flex items-center justify-center"
              aria-label="page 1"
            >
              1
            </button>
            <button
              class="text-md bg-order text-gray-600 p-2 h-9 w-9 rounded-full flex items-center justify-center"
              aria-label="page 2"
            >
              2
            </button>
            <button
              class="text-md bg-order text-gray-600 p-2 h-9 w-9 rounded-full flex items-center justify-center"
              aria-label="page 3"
            >
              3
            </button>
            <button
              class="text-md bg-order text-gray-600 p-2 h-9 w-9 rounded-full flex items-center justify-center"
              aria-label="page 4"
            >
              4
            </button>
            <button
              class="text-md bg-primary p-2 h-9 w-9 rounded-full text-white flex items-center justify-center"
              aria-label="next page"
            >
              <ion-icon
                name="arrow-forward-outline"
                class="text-white"
              ></ion-icon>
            </button>
          </div>
        </div>
        <div
          class="p-2 w-full bg-order mb-12 flex-1 h-fit lg:p-2.5 lg:bg-white lg:border-2 lg:border-solid lg:border-order lg:max-w-[480px]"
        >
          <div class="flex flex-col gap-[9px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <g clip-path="url(#clip0_99_2330)">
                <path
                  d="M2 24C2 8 8 2 24 2C40 2 46 8 46 24C46 40 40 46 24 46C8 46 2 40 2 24Z"
                  fill="#0B0909"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5401 32.9598H18.0001C17.0947 32.9492 16.2299 32.5822 15.5934 31.9382C14.9569 31.2942 14.6 30.4252 14.6001 29.5198V21.6198L12.1601 17.4398C12.0584 17.2638 12.0048 17.0641 12.0046 16.8609C12.0044 16.6577 12.0576 16.458 12.1589 16.2817C12.2602 16.1055 12.406 15.959 12.5817 15.8569C12.7574 15.7548 12.9568 15.7006 13.1601 15.6998H32.5401C32.9952 15.6971 33.4463 15.7848 33.8673 15.9577C34.2883 16.1307 34.6707 16.3854 34.9926 16.7073C35.3144 17.0291 35.5691 17.4116 35.7421 17.8325C35.915 18.2535 36.0027 18.7047 36.0001 19.1598V29.5198C36.0001 29.9732 35.9104 30.4222 35.7363 30.8408C35.5622 31.2595 35.307 31.6396 34.9854 31.9593C34.6639 32.279 34.2823 32.532 33.8626 32.7037C33.443 32.8754 32.9935 32.9624 32.5401 32.9598Z"
                  fill="#A15808"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.5399 32.3002H17.9999C17.091 32.2896 16.2233 31.9198 15.5862 31.2715C14.9491 30.6232 14.5945 29.7491 14.5999 28.8402V20.9402L12.1599 16.7602C12.0567 16.5857 12.002 16.3869 12.0012 16.1842C12.0005 15.9815 12.0538 15.7823 12.1557 15.6071C12.2576 15.4318 12.4043 15.2869 12.5808 15.1873C12.7573 15.0876 12.9572 15.0369 13.1599 15.0402H32.5399C32.9933 15.0376 33.4428 15.1246 33.8625 15.2963C34.2821 15.468 34.6637 15.721 34.9853 16.0406C35.3068 16.3603 35.562 16.7405 35.7361 17.1591C35.9103 17.5778 35.9999 18.0268 35.9999 18.4802V28.8402C36.0025 29.2953 35.9149 29.7464 35.7419 30.1674C35.569 30.5884 35.3142 30.9709 34.9924 31.2927C34.6706 31.6145 34.2881 31.8693 33.8671 32.0422C33.4461 32.2152 32.995 32.3028 32.5399 32.3002Z"
                  fill="white"
                />
                <path
                  d="M32.1201 18.8198H18.5001C17.992 18.8198 17.5801 19.2317 17.5801 19.7398C17.5801 20.2479 17.992 20.6598 18.5001 20.6598H32.1201C32.6282 20.6598 33.0401 20.2479 33.0401 19.7398C33.0401 19.2317 32.6282 18.8198 32.1201 18.8198Z"
                  fill="#FF8906"
                />
                <path
                  d="M32.1201 22.48H18.5001C17.992 22.48 17.5801 22.8919 17.5801 23.4C17.5801 23.9081 17.992 24.32 18.5001 24.32H32.1201C32.6282 24.32 33.0401 23.9081 33.0401 23.4C33.0401 22.8919 32.6282 22.48 32.1201 22.48Z"
                  fill="#FF8906"
                />
                <path
                  d="M28.4201 26.2202H18.5001C17.992 26.2202 17.5801 26.6321 17.5801 27.1402C17.5801 27.6483 17.992 28.0602 18.5001 28.0602H28.4201C28.9282 28.0602 29.3401 27.6483 29.3401 27.1402C29.3401 26.6321 28.9282 26.2202 28.4201 26.2202Z"
                  fill="#FF8906"
                />
              </g>
              <defs>
                <clipPath id="clip0_99_2330">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-lg font-bold text-gray-600">Send Us Message</p>
            <p class="text-base">
              if your unable to find answer or find your product quickly, please
              describe your problem and tell us. we will give you solution.
            </p>
            <button
              class="text-sm flex justify-center items-center h-9 w-full bg-primary rounded-xl font-bold"
              aria-label="send message"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}

export default historyorder
