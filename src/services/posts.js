import { BASE_URL } from '../utils/constants'

const USERS_PATH = 'users.json'

const createUser = async (data) => {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

const getUsers = async () => {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`)
  return await response.json()
}

const getUser = async (id) => {
  const response = await fetch(`${BASE_URL}users/${id}.json`)
  return await response.json()
}

const updateUser = async (id, data) => {
  const response = await fetch(`${BASE_URL}users/${id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

const deleteUser = async (id) => {
  return await fetch(`${BASE_URL}users/${id}.json`, {
    method: 'DELETE',
  })
}

export { createUser, getUsers, getUser, updateUser, deleteUser }
