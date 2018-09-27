import axios from 'axios'
export const storeTask = payload => {
    return axios.post(`http://localhost:3000/tasks`, payload)
}
export const deleteTask = payload => {
    return axios.delete(`http://localhost:3000/tasks/${payload}`)
}
export const getTasks = () => {
    return axios.get(`http://localhost:3000/tasks`)
}
