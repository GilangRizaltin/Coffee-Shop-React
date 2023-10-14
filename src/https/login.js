import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/users/login"

export const loginUser = (body) => {
    return axios.post(baseUrl, body)
}