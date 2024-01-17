import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/user"

export const insertUser = (body, jwt) => {
    return axios.post(baseUrl, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + jwt,
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


export const updateUserByAdmin = (body, jwt, id) => {
  const updateUrl = import.meta.env.VITE_BACKEND_HOST + "/user/" + id
  return axios.patch(updateUrl, body, {
      headers: {
        'Authorization': 'Bearer ' + jwt,
      },
  })
}