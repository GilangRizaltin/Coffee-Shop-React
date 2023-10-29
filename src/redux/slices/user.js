import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../https/login";
import { registerUser } from "../../https/register";
// import { useNavigate } from "react-router-dom";

const initialState = {
    isUserAvailable: false,
    userInfo: null,
    err: {
        login: null,
        register: null,
    },
    isPending: false, //membuat animasi loading
    isRejected: false, //memunculkan modal error
    isFulfilled: false, //melakukan aksi berhasil
}

const loginThunk = createAsyncThunk("users/login", async(body, { rejectWithValue }) => {
  // const navigate = useNavigate()  
  try {
        const {data} = await loginUser(body);
        // navigate("/")
        return data.data
    } catch (err) {
        const errObj = {
            status: err.response.status,
            message: err.response.data.msg,
        }
        return rejectWithValue(errObj)
    }
});

const registerThunk = createAsyncThunk("users/register", async (body, { rejectWithValue }) => {
    try {
      const { data } = await register(body);
      return data.data;
    } catch (err) {
      const errObj = {
        status: err.response.status,
        message: err.response.data.msg,
      };
      return rejectWithValue(errObj);
    }
  });


  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
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
                isUserAvailable: true,
                isPending: false,
                isFulfilled: true,
                userInfo: payload,
            }
        })
        .addCase(registerThunk.pending, (prevState) => {
            return {
              ...prevState,
              isPending: true,
              isRejected: false,
              isFulfilled: false,
              err: {
                ...prevState.err,
                register: null,
              },
            };
          })
          .addCase(registerThunk.rejected, (prevState, { payload }) => {
            return {
              ...prevState,
              isPending: false,
              isRejected: true,
              err: {
                ...prevState.err,
                register: payload,
              },
            };
          })
          .addCase(registerThunk.fulfilled, (prevState, { payload }) => {
            return {
              ...prevState,
              isPending: false,
              isFulfilled: true,
              userInfo: payload,
            };
          });
    }
})

export const userAction = {
    ...userSlice.actions,
    loginThunk,
    registerThunk,
}

export default userSlice.reducer