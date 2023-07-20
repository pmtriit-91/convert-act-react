import axios from "axios"

const request = axios.create({
    baseURL: 'https://actcuakinh.pdteam.net/api/',
})

export default request