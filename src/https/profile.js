import axios from "axios";


//  const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/products"

export const getUser = (URL) => {
    return axios.get(URL)
}


const urlProfile = import.meta.env.VITE_BACKEND_HOST + "/users"
const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
}
export const updateDataUser = (body) => {
    return axios.patch(urlProfile, body, config)
}
