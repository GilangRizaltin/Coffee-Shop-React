import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/order"

export const createOrder = (jwt, body) => {
    return axios.post(baseUrl, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const generateToken = (jwt, body) => {
    const tokenUrl = baseUrl + "/token"
    return axios.post(tokenUrl, body, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const getOrderDetail = (orderDetailUrl, jwt) => {
    return axios.get(orderDetailUrl, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}



export const getOrderIdDetail = (id, jwt) => {
    return axios.get(import.meta.env.VITE_BACKEND_HOST + "/orders/" + id, {
        headers: {
            'Authorization': 'Bearer ' + jwt,
        },
    })
}