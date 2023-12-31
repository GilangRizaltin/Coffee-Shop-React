// order slice page
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productInfo: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, {payload}) {
            return {
                ...state,
                productInfo: [...state.productInfo, payload],
            };
        },
        delOrder(state, {payload}) {
            const updatedProductInfo = state.productInfo.filter(
                (product, index) => index !== payload
            );
            return {
                ...state,
                productInfo: updatedProductInfo,
            };
        },
        cleanOrder(state) {
            return {
                ...state,
                productInfo: []
            }
        }
    },
});

export const { addOrder, delOrder, cleanOrder } = orderSlice.actions;
export default orderSlice.reducer;
