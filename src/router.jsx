import { createBrowserRouter } from "react-router-dom";

import Checkout from "./pages/checkout";
import History from "./pages/historyorder";
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPwd from "./pages/resetpassword";
import Profile from "./pages/profile";


import Test from "./components/filter";


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
    path: "/test",
    element: <Test />,
    // errorElement: "",
  },
]);

export default router;