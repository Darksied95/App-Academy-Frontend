import axios from "axios"


axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response
        && error.response.status >= 400
        && error.response.status < 500;

    if (!expectedError) {
        alert("An unexpected Error Occurred")
    }

    return Promise.reject(error)
})

export default {
    get: axios.get,
    patch: axios.patch,
    delete: axios.delete,
    post: axios.post
}