import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/users/register"

export const registerUser = (body) => {
    return axios.post(baseUrl, body)
}
export const verifyUser = (url) => {
    return axios.get(url)
}