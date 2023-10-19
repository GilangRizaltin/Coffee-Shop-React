import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

// export const useProductContext = () => {
//   const context = useContext(ProductContext);
//   if (!context) {
//     throw new Error("useProductContext must be used within a ProductProvider");
//   }
//   return context;
// };

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([])
    const addProduct = (order) => {
      setProduct([...product, order]);
    };
    const deleteData = (id) => {
      // wrapBody.splice(id, 1);
      // const newData = wrapBody.filter((e) => 0 != id);
      const newData = [];
      for (let i = 0; i < product.length; i++) {
        if (i != id) {
          newData.push(product[i]);
        }
      }
      setProduct(newData);
    };
    return (
      <ProductContext.Provider
        value={{
          product,
          addProduct,
          deleteData,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  };