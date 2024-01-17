import axios from "axios";



export const updateStatusOrder = (id, body, jwt) => {
  const updateUrl = import.meta.env.VITE_BACKEND_HOST + "/order/" + id
    return axios.post(updateUrl, body, {
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