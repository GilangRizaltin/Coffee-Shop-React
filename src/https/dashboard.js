import axios from "axios";

export const statistic = (baseUrl, jwt) => {
    return axios.get(baseUrl, {
      headers: {
          'Authorization': 'Bearer ' + jwt,
      }
    })
}


export const statisticProduct = (statUrl, jwt) => {
  return axios.get(statUrl, {
    headers: {
        'Authorization': 'Bearer ' + jwt,
    }
  })
}


const orderStatusUrl = import.meta.env.VITE_BACKEND_HOST + "/order/statistic"
export const getOrdersAllStatus = (jwt) => {
  return axios.get(orderStatusUrl, {
    headers: {
        'Authorization': 'Bearer ' + jwt,
    }
  })
}