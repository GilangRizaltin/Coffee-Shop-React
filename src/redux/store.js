import { configureStore, combineReducers } from "@reduxjs/toolkit";
import orderReducer from "../redux/slices/orderRedux";
import userReducer from "./slices/user";
import storage from "redux-persist/lib/storage"
import {
    persistStore,
    persistReducer,
    PERSIST,
    FLUSH,
    REHYDRATE,
    PAUSE,
    REGISTER,
    PURGE,
  } from "redux-persist";
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

const combinedReducers = combineReducers({
    order: orderReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST, FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE],
            },
        }),
});

// export default store;
export const persistedStore = persistStore(store)