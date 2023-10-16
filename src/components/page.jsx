import React from 'react'

function page(props) {
  return (
    <div className='flex gap-x-2 text-lg text-white justify center items-center'>
      <button onClick={props.nextlink || null} className='bg-gray-800 rounded-full border-none flex justify-center items-center w-[60px] h-[60px]'>
      <ion-icon name="arrow-back-outline"></ion-icon>
      </button>
      <button className='bg-primary rounded-full border-none flex justify-center items-center  w-[60px] h-[60px]    '>
        {props.page}
      </button>
      <button onClick={props.prevlink || null} className='bg-gray-800 rounded-full border-none flex justify-center items-center  w-[60px] h-[60px]'>
      <ion-icon name="arrow-forward-outline"></ion-icon>
      </button>
    </div>
  )
}

export default page
