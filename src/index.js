import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import CreatePost from 'pages/CreatePost'
import Search from 'pages/Search'
import Post from 'pages/Post'
import NotFoundPage from 'pages/NotFoundPage'
import { Footer } from 'components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
