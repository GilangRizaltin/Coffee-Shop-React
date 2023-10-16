import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    // sediakan value yang akan di provide
    const [product, setProduct] = useState({
      isProductAvailable: false,
    });
    const changeProduct = (data) => {
        setProduct((product) => ({
        ...product,
        ...data,
      }));
    };
  
    return (
      <ProductContext.Provider
        value={{
          product,
          changeProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };