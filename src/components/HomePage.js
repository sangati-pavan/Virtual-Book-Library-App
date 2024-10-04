// src/pages/HomePage.js
import React from 'react'
import BookList from './BookList'
import SearchBar from './SearchBar'

const HomePage = () => (
  <div className="container">
    <h1>Book Library</h1>
    <SearchBar />
    <BookList />
  </div>
)

export default HomePage
