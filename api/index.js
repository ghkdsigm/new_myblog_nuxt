import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.baseURL,  
})

function getPosts() {
  return instance.get(`/posts`)
}

function getArticles() {
  return instance.get(`/articles`)
}

function fetchPostId(id) {
  return instance.get(`/posts/${id}`)
}

function fetchArticleId(id) {
  return instance.get(`/articles/${id}`)
}

export { getPosts, fetchPostId, getArticles, fetchArticleId }