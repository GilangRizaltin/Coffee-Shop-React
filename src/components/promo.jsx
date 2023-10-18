import React from 'react'

function promo() {
  return (
    <div className="h-[105px] bg-promo flex rounded-xl relative p-3 w-fit items-center">
              <div>
                <img
                  src="/webp/image 46.webp"
                  alt="promo-image"
                  className="h-[96px] absolute bottom-0"
                />
              </div>
              <div className="text-sm pl-20">
                <p className="font-bold">HAPPY MOTHER'S DAY!</p>
                <p>Get one of our favorite menu for free!</p>
                <p className="text-white">Klaim Kupon</p>
              </div>
    </div>
  )
}

export default promo
