import React from 'react'

function promo() {
  return (
    <div class="h-[105px] bg-promo flex rounded-xl relative p-3 w-fit items-center">
              <div>
                <img
                  src="/webp/image 46.webp"
                  alt="promo-image"
                  class="h-[96px] absolute bottom-0"
                />
              </div>
              <div class="text-sm pl-20">
                <p class="font-bold">HAPPY MOTHER'S DAY!</p>
                <p>Get one of our favorite menu for free!</p>
                <p class="text-white">Klaim Kupon</p>
              </div>
    </div>
  )
}

export default promo
