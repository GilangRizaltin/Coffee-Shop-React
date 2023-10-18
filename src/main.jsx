import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { UserProvider } from "./context/context";
import { ProductProvider } from "./context/productContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider> 
    <ProductProvider> 
    <RouterProvider router={router} />
    </ProductProvider> 
    </UserProvider>
  </React.StrictMode>,
)
