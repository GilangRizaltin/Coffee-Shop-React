# Coffee Shop React JS

<br>
<br>
<div align="center">
  <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705476586/samples/Frame_13_ksk8wi.png" alt="Logo" width="340" height="100"/>
</div>
<br>
<br>
Coffee Shop HTML CSS is not just a project; it's a journey to elevate the Coffee Shop experience on the Front-End. This immersive project unfolds a tapestry of essential pages, including the Login, Register, Home, Product, Profile, Checkout, and History Order pages.

## Technologies used in this project

- [Vite React Js](https://vitejs.dev/guide/) \
  A build tool designed for web development, and when paired with React JS, it provides a fast and efficient development environment.

- [Redux](https://react-redux.js.org/introduction/getting-started) \
  A state management library for React applications.

- [React Router](https://reactrouter.com/en/main/start/overview) \
  Library for handling navigation in React applications.

- [Tailwind](https://tailwindcss.com/docs/installation) \
  A utility-first CSS framework that simplifies styling in web development.

- [Axios](https://axios-http.com/docs/intro) \
  Promise-based HTTP client for the browser and Node.js.

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

4. Preparing backend \
   You can choose one of these to running your backend :
   - [Backend Coffee Shop (Javascript)](https://github.com/GilangRizaltin/CoffeeShop)
   - [Backend Coffee Shop (Golang)](https://github.com/GilangRizaltin/backend-golang)
5. Start the server

```bash
  $ npm run dev
```

## Route

| Route               | Description                   |
| :------------------ | :---------------------------- |
| `"/"`               | Home page                     |
| `"/auth/login"`     | Login page                    |
| `"/auth/register"`  | register page                 |
| `"/product"`        | Product list page             |
| `"/order/checkout"` | Creating an order page        |
| `"/order/history"`  | Getting history of order page |
| `"/product/:id"`    | Detail of product page        |
| `"/order/:id"`      | Detail of order page          |
| `"/profile"`        | User's profile page           |

## Deployment

[Coffee Shop Front End Deployment](https://coffee-shop-react-eorg.vercel.app/)

## Screenshots

| Login                                                                                                                                          | Home                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| ![Login Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515214/Coffee%20Shop/login-coffeeshop_nv1odl.png)                   | ![Home Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515213/Coffee%20Shop/home-coffeeshop_dbk8a0.png)       |
| Profile                                                                                                                                        | Product                                                                                                                          |
| ![Profile Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515209/Coffee%20Shop/profile-coffeeshop_vibg7i.png)               | ![Product Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-coffeeshop_hpiwsp.png) |
| Detail Product                                                                                                                                 |
| ![Detail Product Screenshot](https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-detail-coffeeshop_yrn2sh.png) |

<!-- <div>
  <div id="grid">
    <div class="container">
      <p>Home</p>
      <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705515213/Coffee%20Shop/home-coffeeshop_dbk8a0.png" alt="" />
    </div>
    <div class="container">
      <p>Login</p>
      <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705515214/Coffee%20Shop/login-coffeeshop_nv1odl.png" alt="" />
    </div>
    <div class="container">
      <p>Profile</p>
      <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705515209/Coffee%20Shop/profile-coffeeshop_vibg7i.png" alt="" />
    </div>
    <div class="container">
      <p>Product</p>
      <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-coffeeshop_hpiwsp.png" alt="" />
    </div>
    <div class="container">
      <p>Detail Product</p>
      <img src="https://res.cloudinary.com/doncmmfaa/image/upload/v1705515210/Coffee%20Shop/product-detail-coffeeshop_yrn2sh.png" alt="" />
    </div>
  </div>
</div>

<style>
  #grid {
    display: grid;
    gap: 20px;
  }

  p {
    font-size: 20px;
  }

  .container {
    padding: 10px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 655px) {
    #grid {
      grid-template-columns: 1fr;
    }
  }

  @media (min-width: 656px) {
    #grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style> -->

## Related Project

[Backend Coffee Shop (Javascript)](https://github.com/GilangRizaltin/CoffeeShop)

[Backend Coffee Shop (Golang)](https://github.com/GilangRizaltin/backend-golang)

## Support

For support, email gilangzaltin@gmail.com
