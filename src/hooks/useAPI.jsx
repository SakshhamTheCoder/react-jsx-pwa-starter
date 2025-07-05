import { useState, useEffect } from "react"
import APIClient from "../utils/apiClient"

const useAPI = (url, { method = "GET", body = null, headers = {} } = {}) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)

            try {
                const result = await APIClient({
                    url,
                    method,
                    headers,
                    data: body,
                })
                setData(result)
            } catch (err) {
                setError(err.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return { data, loading, error }
}

export default useAPI
