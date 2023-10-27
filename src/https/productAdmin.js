import axios from "axios";

export const addProduct = (url, body, jwt) => {
    return axios.post(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const updateProduct = (url,body, jwt) => {
    return axios.get(url, body, {
        headers: {
          'Authorization': 'Bearer ' + jwt,
        },
    })
}