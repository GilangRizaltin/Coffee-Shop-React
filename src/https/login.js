import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/users/login"

export const loginUser = (body) => {
    return axios.post(baseUrl, body)
}

const logOutUrl = import.meta.env.VITE_BACKEND_HOST + "/users/logout"

export const logOutUser = (jwt) => {
    return axios.delete(logOutUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}