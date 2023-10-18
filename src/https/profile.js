import axios from "axios";


//  const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/products"

export const getUser = (URL) => {
    return axios.get(URL)
}

const urlUpdateProfile = import.meta.env.VITE_BACKEND_HOST + "/users"
// const config = {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       'Authorization': 'Bearer ' + jwt,
//     },
// }
export const updateDataUser = (body, jwt) => {
    return axios.patch(urlUpdateProfile, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + jwt,
        },
    })
}


const urlSelfProfile = import.meta.env.VITE_BACKEND_HOST  + "/users/profile"
export const getUserProfile = (jwt) => {
    return axios.get(urlSelfProfile, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}