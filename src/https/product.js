import axios from "axios";


// const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/products"

export const searchProduct = (URL) => {
    return axios.get(URL)
}