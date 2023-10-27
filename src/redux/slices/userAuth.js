import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../https/login";

const initialState = {
    isUserAvilable: false,
    userInfo: null,
    err: {
        login: null,
        register: null,
    },
    isPending: false, //membuat animasi loading
    isRejected: false, //memunculkan modal error
    isFulfilled: false, //melakukan aksi berhasil
}

const loginThunk = createAsyncThunk("user/login", async(body, { rejectWithValue }) => {
    try {
        const {data} = await loginUser(body);
        return data.data
    } catch (err) {
        const errObj = {
            status: err.response.status,
            message: err.response.data.msg
        }
        return rejectWithValue(errObj)
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loginThunk.pending, (prevState) => {
            return {
                ...prevState,
                isPending: true,
                isRejected: false,
                isFulfilled: false,
                err: null,
            }
        })
        .addCase(loginThunk.rejected, (prevState, {payload}) => {
            return {
                ...prevState,
                isPending: false,
                isRejected: true,
                err: {
                    ...prevState.err,
                    login: payload,
                }
            }
        })
        .addCase(loginThunk.fulfilled, (prevState, {payload}) => {
            return {
                ...prevState,
                isPending: false,
                isFulfilled: true,
                userInfo: payload,
            }
        })
    }
})

export const userAction = {
    ...userSlice.actions,
    loginThunk,
}

export default userSlice.reducer