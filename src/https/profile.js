import axios from "axios";


 const url = import.meta.env.VITE_BACKEND_HOST + "/user/profile"

export const getUser = (jwt) => {
    return axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + jwt,
        },
    })
}

const urlUpdateProfile = import.meta.env.VITE_BACKEND_HOST + "/user"
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


const urlSelfProfile = import.meta.env.VITE_BACKEND_HOST  + "/user/profile"
export const getUserProfile = (jwt) => {
    return axios.get(urlSelfProfile, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}