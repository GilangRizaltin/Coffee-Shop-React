import React from 'react'
import { searchProduct } from '../https/product';

function page(props) {
  const submit = (url) => {
    searchProduct(url)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const renderButtons = () => {
    return Array.from({ length: props.pages.total_page }, (_, index) => (
      <button
        key={index}
        className={`h-12 w-12 ${index + 1 === props.pages.page ? "bg-primary" : "bg-order"} text-black rounded-full flex justify-center items-center`}
      >{index + 1}</button>
    ));
  };
  return (
    <div className='flex gap-x-2 text-lg text-white justify center items-center' onClick={props.pages.prev !== null && submit(props.pages.prev)}>
      <button className={`h-12 w-12 bg-order ${props.pages.prev !== null ? "text-black" : "text-gray-700"} rounded-full flex justify-center items-center`}>
      <ion-icon name="chevron-back-outline"></ion-icon></button>
      {renderButtons()}
      <button className={`h-12 w-12 bg-order ${props.pages.next !== null ? "text-black" : "text-gray-700"} rounded-full flex justify-center items-center`}
      onClick={props.pages.next !== null && submit(props.pages.prev)}>
      <ion-icon name="chevron-forward-outline"></ion-icon></button>
    </div>
  )
}

export default page
