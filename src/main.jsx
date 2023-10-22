import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { UserProvider } from "./context/context";
import { ProductProvider } from "./context/productContext";
import { Provider as ReduxProvider } from 'react-redux';
import reduxStore from "./redux/store"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={reduxStore}>
    <UserProvider> 
    <ProductProvider> 
    <RouterProvider router={router} />
    </ProductProvider> 
    </UserProvider>
    </ReduxProvider>
  </React.StrictMode>,
)
