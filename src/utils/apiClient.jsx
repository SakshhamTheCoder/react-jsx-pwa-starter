import axios from "axios"

const APIClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

APIClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

APIClient.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        console.error("API Error:", error.response || error.message)
        return Promise.reject(error)
    }
)

export default APIClient
