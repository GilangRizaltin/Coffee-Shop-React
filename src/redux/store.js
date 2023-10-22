import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initialState = {
    productInfo: []
};

const ADD_PRODUCT = "ADD_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";

// const addProduct = (data) => ({
//     type: ADD_PRODUCT,
//     data
// });

// const deleteProduct = (id) => ({
//     type: DELETE_PRODUCT,
//     id
// });

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                productInfo: [...state.productInfo, action.data]
            };
        case "DELETE_PRODUCT":
            const updatedProductInfo = state.productInfo.filter((product, index) => index !== action.id);
            return {
                ...state,
                productInfo: updatedProductInfo
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export default store;
