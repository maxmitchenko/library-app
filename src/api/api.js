import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = () => api.delete(`/user/${id}`)
export const getUserById = () => api.get(`/user/${id}`)

const apis = {
    insertUser,
    updateUserById,
    deleteUserById,
    getUserById
}

export default apis;