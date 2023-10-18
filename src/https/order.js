import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/orders"

export const createOrder = (body) => {
    return axios.post(baseUrl, body)
}