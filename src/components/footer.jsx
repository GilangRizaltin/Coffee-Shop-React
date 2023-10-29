function footer() {
  return (
    <footer
      className="relative bg-order pt-[67px] pb-8 flex flex-col gap-8  px-2 sm:px-10 md:flex-row text-footer font-primary"
    >
      <section className="flex-1">
        <div className="flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M26 10H4C3.73478 10 3.48043 10.1054 3.29289 10.2929C3.10536 10.4804 3 10.7348 3 11V17C3.00299 18.7025 3.36708 20.385 4.06822 21.9364C4.76937 23.4878 5.79163 24.8728 7.0675 26H4C3.73478 26 3.48043 26.1054 3.29289 26.2929C3.10536 26.4804 3 26.7348 3 27C3 27.2652 3.10536 27.5196 3.29289 27.7071C3.48043 27.8946 3.73478 28 4 28H26C26.2652 28 26.5196 27.8946 26.7071 27.7071C26.8946 27.5196 27 27.2652 27 27C27 26.7348 26.8946 26.4804 26.7071 26.2929C26.5196 26.1054 26.2652 26 26 26H22.9325C24.464 24.6426 25.6254 22.9182 26.3075 20.9888C27.5776 20.9105 28.7701 20.3509 29.642 19.424C30.5139 18.497 30.9995 17.2725 31 16V15C31 13.6739 30.4732 12.4021 29.5355 11.4645C28.5979 10.5268 27.3261 10 26 10ZM29 16C28.9996 16.647 28.79 17.2765 28.4025 17.7946C28.015 18.3127 27.4705 18.6917 26.85 18.875C26.9491 18.2549 26.9993 17.628 27 17V12.1725C27.5848 12.3792 28.0911 12.7621 28.4492 13.2685C28.8074 13.7749 28.9998 14.3798 29 15V16ZM14 7V3C14 2.73478 14.1054 2.48043 14.2929 2.29289C14.4804 2.10536 14.7348 2 15 2C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V7C16 7.26522 15.8946 7.51957 15.7071 7.70711C15.5196 7.89464 15.2652 8 15 8C14.7348 8 14.4804 7.89464 14.2929 7.70711C14.1054 7.51957 14 7.26522 14 7ZM18 7V3C18 2.73478 18.1054 2.48043 18.2929 2.29289C18.4804 2.10536 18.7348 2 19 2C19.2652 2 19.5196 2.10536 19.7071 2.29289C19.8946 2.48043 20 2.73478 20 3V7C20 7.26522 19.8946 7.51957 19.7071 7.70711C19.5196 7.89464 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7ZM10 7V3C10 2.73478 10.1054 2.48043 10.2929 2.29289C10.4804 2.10536 10.7348 2 11 2C11.2652 2 11.5196 2.10536 11.7071 2.29289C11.8946 2.48043 12 2.73478 12 3V7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7Z"
              fill="#8E6447"
            />
          </svg>
          <p className="font-logo text-xl text-brown">Coffee Shop</p>
        </div>
        <p className="">
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
      </section>
      <section className="flex-1 flex">
        <div className="flex-1 flex flex-col gap-2.5">
          <p className="font-semibold text-black">Product</p>
          <p className="cursor-pointer">Our Product</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Locations</p>
          <p className="cursor-pointer">Countries</p>
          <p className="cursor-pointer">Blog</p>
        </div>
        <div className="flex-1 flex flex-col gap-2.5">
          <p className="font-semibold text-black">Engage</p>
          <p className="cursor-pointer">Partner</p>
          <p className="cursor-pointer">FAQ</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Service</p>
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-2.5">
        <p className="font-semibold text-black">Social Media</p>
        <div className="flex relative text-3xl gap-8 text-black">
          <div className="cursor-pointer">
          <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className="cursor-pointer">
          <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className="cursor-pointer">
          <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
      </section>
      <p className="md:absolute md:bottom-7 text-gray-300">©2020CoffeeStore</p>
    </footer>
  )
}

export default footer
