import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/users"

export const insertUser = (body) => {
    return axios.post(baseUrl, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
    })
}

export const getAllUser = (url, jwt) => {
    return axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + jwt,
        },
    })
}

export const searchUser = (url, jwt) => {
  return axios.get(url, {
      headers: {
        'Authorization': 'Bearer ' + jwt,
      },
  })
}