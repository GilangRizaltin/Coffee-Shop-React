import axios from "axios";

export const updateStatusOrder = (url, body, jwt) => {
    return axios.post(url, body, {
        headers: {
          'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const getAllOrder = (url, jwt) => {
    return axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + jwt,
        },
    })
}