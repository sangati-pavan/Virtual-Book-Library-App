// src/pages/BookDetailsPage.js
import React from 'react'
import {useParams} from 'react-router-dom'
import {booksData} from '../services/booksData'
import {useLibrary} from '../context/LibraryContext'

const BookDetailsPage = () => {
  const {id} = useParams()
  const {addToLibrary, removeFromLibrary, library} = useLibrary()
  const book = booksData.find(b => b.id === parseInt(id))

  const isInLibrary = library.some(b => b.id === book.id)

  return (
    <div className="container book-details">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>Description: {book.description}</p>
      <p>Published: {book.publication_year}</p>
      {isInLibrary ? (
        <button onClick={() => removeFromLibrary(book.id)}>
          Remove from Library
        </button>
      ) : (
        <button onClick={() => addToLibrary(book)}>Add to Library</button>
      )}
    </div>
  )
}

export default BookDetailsPage
