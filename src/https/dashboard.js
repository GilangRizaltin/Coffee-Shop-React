import axios from "axios";


const baseUrl = import.meta.env.VITE_BACKEND_HOST + "/statistic"

export const statistic = () => {
    return axios.get(baseUrl)
}