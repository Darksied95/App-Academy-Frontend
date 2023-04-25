import http from "../Services/HttpService"
import { apiUserEndPoint } from "../config.json"


export async function registerUser(user) {
    const { data } = await http.post(apiUserEndPoint + '/register', user)
    return data
}

export async function loginUser(user) {
    const { data } = await http.post(apiUserEndPoint, user)
    console.log(data);
    return data
}