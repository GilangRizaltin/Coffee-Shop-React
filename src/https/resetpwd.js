import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/users/register"

export const forgetPassword = (params) => {
    return axios.post(import.meta.env.VITE_BACKEND_HOST + "/users/forgetpassword?" + params)
}
