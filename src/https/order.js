import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/orders"

export const createOrder = (jwt, body) => {
    return axios.post(baseUrl, body, {
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