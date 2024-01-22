# Coffee Shop React JS

<br>
<br>
<div align="center">
  <!-- <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705476586/samples/Frame_13_ksk8wi.png" alt="Logo" width="340" height="150"/> -->
  <svg xmlns="http://www.w3.org/2000/svg" width="340" height="150" viewBox="0 0 28 26" fill="none">
    <path d="M23 8H1C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V15C0.00298857 16.7025 0.367076 18.385 1.06822 19.9364C1.76937 21.4878 2.79163 22.8728 4.0675 24H1C0.734784 24 0.48043 24.1054 0.292893 24.2929C0.105357 24.4804 0 24.7348 0 25C0 25.2652 0.105357 25.5196 0.292893 25.7071C0.48043 25.8946 0.734784 26 1 26H23C23.2652 26 23.5196 25.8946 23.7071 25.7071C23.8946 25.5196 24 25.2652 24 25C24 24.7348 23.8946 24.4804 23.7071 24.2929C23.5196 24.1054 23.2652 24 23 24H19.9325C21.464 22.6426 22.6254 20.9182 23.3075 18.9888C24.5776 18.9105 25.7701 18.3509 26.642 17.424C27.5139 16.497 27.9995 15.2725 28 14V13C28 11.6739 27.4732 10.4021 26.5355 9.46447C25.5979 8.52678 24.3261 8 23 8ZM26 14C25.9996 14.647 25.79 15.2765 25.4025 15.7946C25.015 16.3127 24.4705 16.6917 23.85 16.875C23.9491 16.2549 23.9993 15.628 24 15V10.1725C24.5848 10.3792 25.0911 10.7621 25.4492 11.2685C25.8074 11.7749 25.9998 12.3798 26 13V14ZM11 5V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V5C13 5.26522 12.8946 5.51957 12.7071 5.70711C12.5196 5.89464 12.2652 6 12 6C11.7348 6 11.4804 5.89464 11.2929 5.70711C11.1054 5.51957 11 5.26522 11 5ZM15 5V1C15 0.734784 15.1054 0.48043 15.2929 0.292893C15.4804 0.105357 15.7348 0 16 0C16.2652 0 16.5196 0.105357 16.7071 0.292893C16.8946 0.48043 17 0.734784 17 1V5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6C15.7348 6 15.4804 5.89464 15.2929 5.70711C15.1054 5.51957 15 5.26522 15 5ZM7 5V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5Z" fill="white"/>
  </svg>
</div>
<br>
<br>
Coffee Shop HTML CSS is not just a project; it's a journey to elevate the Coffee Shop experience on the Front-End. This immersive project unfolds a tapestry of essential pages, including the Login, Register, Home, Product, Profile, Checkout, and History Order pages.

## Technologies used in this project

- [Vite React Js](https://vitejs.dev/guide/) \
  A build tool designed for web development, and when paired with React JS, it provides a fast and efficient development environment. \

- [Redux](https://react-redux.js.org/introduction/getting-started) \
  A state management library for React applications.\

- [React Router](https://reactrouter.com/en/main/start/overview) \
  Library for handling navigation in React applications. \

- [Tailwind](https://tailwindcss.com/docs/installation) \
  A utility-first CSS framework that simplifies styling in web development. \

- [Axios](https://axios-http.com/docs/intro) \
  Promise-based HTTP client for the browser and Node.js. \

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
VITE_BACKEND_HOST = "YOUR BACKEND URL"
```

## Run Locally

1. Clone the project

```bash
  $ git clone https://github.com/GilangRizaltin/Coffee-Shop-React
```

2. Go to the project directory

```bash
  $ cd Coffee-Shop-React
```

3. Install dependencies

```bash
  $ npm install
```

4. Prepare for backend \
   You can choose one of these to running your backend : [Backend (Javascript)](https://github.com/GilangRizaltin/CoffeeShop), [Backend (Golang)](https://github.com/GilangRizaltin/backend-golang)

5. Start the server

```bash
  $ npm run dev
```

## Route

| Route               | Description                  |
| :------------------ | :--------------------------- |
| `"/"`               | Home page                    |
| `"/auth/login"`     | Login page                   |
| `"/auth/register"`  | register page                |
| `"/product"`        | Product list page            |
| `"/order/checkout"` | Creating an order page       |
| `"/order/history"`  | Getting hstory of order page |
| `"/product/:id"`    | Detail of produtc page       |
| `"/order/:id"`      | Detail of order page         |
| `"/profile"`        | User's profile page          |

## Deployment

This project has been deployed on Netlify

[Coffee Shop Front End Deployment](https://master--coffeeshop-gilang.netlify.app/)

## Screenshots

| Login                                                                                                                        | Home                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![Login Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515214/Coffee%20Shop/login-coffeeshop_nv1odl.png) | ![Home Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515213/Coffee%20Shop/home-coffeeshop_dbk8a0.png) |

| Profile                                                                                                                          | Product                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![Profile Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515209/Coffee%20Shop/profile-coffeeshop_vibg7i.png) | ![Product Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-coffeeshop_hpiwsp.png) |

| Detail Product                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Detail Product Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-detail-coffeeshop_yrn2sh.png) |

## Related Project

[Backend (Javascript)](https://github.com/GilangRizaltin/CoffeeShop)

[Backend (Golang)](https://github.com/GilangRizaltin/backend-golang)

## Support

For support, email gilangzaltin@gmail.com
