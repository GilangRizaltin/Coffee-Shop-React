import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const addProduct = (order) => {
      setProduct([...product, order]);
    };
    return (
      <ProductContext.Provider
        value={{
          product,
          addProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };