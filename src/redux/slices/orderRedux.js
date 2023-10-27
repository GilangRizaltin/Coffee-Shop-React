// order slice page
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productInfo: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder(state, action) {
            // Destructure payload directly from the action parameter
            const { data } = action.payload;
            return {
                ...state,
                productInfo: [...state.productInfo, data],
            };
        },
        delOrder(state, action) {
            // Destructure id directly from the payload
            const { id } = action.payload;
            const updatedProductInfo = state.productInfo.filter(
                (product, index) => index !== id
            );
            return {
                ...state,
                productInfo: updatedProductInfo,
            };
        },
    },
});

export const { addOrder, delOrder } = orderSlice.actions;
export default orderSlice.reducer;
