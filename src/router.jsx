import { createBrowserRouter } from "react-router-dom";

import Checkout from "./pages/checkout";
import History from "./pages/historyorder";
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPwd from "./pages/resetpassword";
import Profile from "./pages/profile";
import DetailProduct from "./pages/detailProduct";
import DetailOrder from "./pages/detailOrder";


// import Test from "./pages/login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        // errorElement: "",
      },
      {
    path: "/checkout",
    element: <Checkout />,
    // errorElement: "",
  },
  {
    path: "/history",
    element: <History />,
    // errorElement: "",
  },
  {
    path: "/product",
    element: <Product />,
    // errorElement: "",
  },
  {
    path: "/profile",
    element: <Profile />,
    // errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: "",
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/resetpassword",
    element: <ResetPwd />,
    // errorElement: "",
  },
  {
    path: "/detailorder",
    element: <DetailOrder />,
    // errorElement: "",
  },
  {
    path: "/detailproduct",
    element: <DetailProduct />,
    // errorElement: "",
  },
  // {
  //   path: "/test",
  //   element: <Test />,
  //   // errorElement: "",
  // },
]);

export default router;