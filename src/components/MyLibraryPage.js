// src/pages/MyLibraryPage.js
import React from 'react'
import {useLibrary} from '../context/LibraryContext'
import BookList from './BookList'

const MyLibraryPage = () => {
  const {library} = useLibrary()

  return (
    <div className="container">
      <h1>My Library</h1>
      {library.length > 0 ? (
        <BookList books={library} />
      ) : (
        <div className="empty-state">
          <p>Your library is empty. Start adding books!</p>
        </div>
      )}
    </div>
  )
}

export default MyLibraryPage
