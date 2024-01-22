import { createBrowserRouter } from "react-router-dom";

import Checkout from "./pages/Checkout";
import History from "./pages/Historyorder";
import Home from "./pages/home";
import Product from "./pages/product";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgetPwd from "./pages/ForgetPassword";
import ResetPwd from "./pages/ResetPassword"
import Profile from "./pages/profile";
import DetailProduct from "./pages/DetailProduct";
import DetailOrder from "./pages/detailOrder";
import Dashboard from "./pages/Dashboard";
import ProductAdmin from "./pages/ProductAdmin";
import OrderAdmin from "./pages/OrderAdmin";
import UserAdmin from "./pages/UserAdmin";
import Private  from "./components/Private";
import AdminPage from "./components/AdminPageAuth";


// import Test from "./pages/Test"
// import Test from "./pages/login";
// import Sidebar from "./components/Sidebar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: "",
  },
  {
    path: "/auth/login",
    element: <Login />,
    // errorElement: "",
  },
  {
    path: "/auth/register",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/auth/forget-password",
    element: <ForgetPwd />,
    // errorElement: "",
  },
  {
    path: "/auth/resetpassword",
    element: <ResetPwd />,
    // errorElement: "",
  },
  {
    path: "/order/checkout",
    element: (
    <Private>
      <Checkout />
    </Private>),
    // errorElement: "",
  },
  {
    path: "/order/history",
    element: (
    <Private>
      <History />
    </Private>),
    // errorElement: "",
  },
  {
    path: "/product",
    element: (
    <Private>
      <Product />
    </Private>) ,
    // errorElement: "",
  },
  {
    path: "/profile",
    element: (
    <Private>
      <Profile />
    </Private>),
    // errorElement: "",
  },
  {
    path: `/order/:id`,
    element: (
    <Private>
      <DetailOrder />
    </Private>),
    // errorElement: "",
  },
  {
    path: "/product/:id",
    element: (
    <Private>
      <DetailProduct />
    </Private>),
    // errorElement: "",
  },
  {
    path: "/admin",
    element: (
      <Private>
        <AdminPage>
          <Dashboard />
        </AdminPage>
      </Private>),
    // errorElement: "",
  },
  {
    path: "/admin/product",
    element: (
      <Private>
        <AdminPage>
          <ProductAdmin />,
        </AdminPage>
      </Private>),
    // errorElement: "",
  },
  {
    path: "/admin/order",
    element: (
      <Private>
        <AdminPage>
          <OrderAdmin />,
        </AdminPage>
      </Private>),
    // errorElement: "",
  },
  {
    path: "/admin/user",
    element: (
      <Private>
        <AdminPage>
          <UserAdmin />,
        </AdminPage>
      </Private>),
    // errorElement: "",
  },
]);

export default router;