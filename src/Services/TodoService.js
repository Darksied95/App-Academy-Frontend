import http from "./HttpService";
import { apiTodoEndPoint } from "../config.json"


export async function getTodos() {
    const { data } = await http.get(apiTodoEndPoint)
    return data
}

export async function createTodo(todo) {
    const { data } = await http.post(apiTodoEndPoint, { text: todo })
    return data
}

export async function deleteTodo(id) {
    const { data } = await http.delete(apiTodoEndPoint + `/${id}`)
    return data
}

export async function updateTodo(id, update) {
    const { data } = await http.patch(apiTodoEndPoint + `/${id}`, update)
    return data
}


