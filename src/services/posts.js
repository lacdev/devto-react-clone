import { BASE_URL } from '../utils/constants'

const POSTS_PATH = 'posts'

//${BASE_URL}${POSTS_PATH}

const createPost = async (data) => {
  const response = await fetch(`${BASE_URL}${POSTS_PATH}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

const getPosts = async (filter = null) => {
  let requestURL = `${BASE_URL}${POSTS_PATH}`

  if (filter !== null) {
    requestURL = `${BASE_URL}${POSTS_PATH}?date=${filter}`
  }

  const response = await fetch(requestURL)
  return await response.json()
}

const getPost = async (id) => {
  const response = await fetch(`${BASE_URL}${POSTS_PATH}/${id}`)
  return await response.json()
}

const updatePost = async (id, data) => {
  const response = await fetch(`${BASE_URL}${POSTS_PATH}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

const deletePost = async (id) => {
  return await fetch(`${BASE_URL}${POSTS_PATH}/${id}`, {
    method: 'DELETE',
  })
}

export { createPost, getPosts, getPost, updatePost, deletePost }
