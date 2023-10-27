import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import orderReducer from "../redux/slices/orderRedux";
import userReducer from "../redux/slices/userAuth";
import {persistReducer , persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage"

// const initialState = {
//     productInfo: []
// };

// const ADD_PRODUCT = "ADD_PRODUCT";
// const DELETE_PRODUCT = "DELETE_PRODUCT";

// const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD_PRODUCT":
//             return {
//                 ...state,
//                 productInfo: [...state.productInfo, action.data]
//             };
//         case "DELETE_PRODUCT":
//             const updatedProductInfo = state.productInfo.filter((product, index) => index !== action.id);
//             return {
//                 ...state,
//                 productInfo: updatedProductInfo
//             };
//         default:
//             return state;
//     }
// };

const persistConfig = {
    key: "lib",
    storage,
};

const store = configureStore({
    reducer: {
        order: orderReducer,
        user: userReducer,
    },
    middleware: [thunk]
});

export default store;
