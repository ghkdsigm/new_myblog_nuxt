import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL,
})

function getToken() {
  return instance.get(`/users`)
}

function fetchUser(userData) {
  return instance.push(`/users/${userData}`)
}

export { getToken, fetchUser }