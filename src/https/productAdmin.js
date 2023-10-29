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
    return axios.patch(url, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const searchProduct = (url, jwt) => {
  return axios.patch(url, {
      headers: {
        'Authorization': 'Bearer ' + jwt,
      },
  })
}