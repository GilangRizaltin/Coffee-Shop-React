import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/statistic"

export const statistic = () => {
    return axios.get(baseUrl)
}


const statUrl = import.meta.env.VITE_BACKEND_HOST + "/products/state"
export const statisticProduct = () => {
  return axios.get(statUrl)
}


const orderStatusUrl = import.meta.env.VITE_BACKEND_HOST + "/orders/status"
export const getOrdersAllStatus = () => {
  return axios.get(orderStatusUrl)
}