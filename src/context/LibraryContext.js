// src/context/LibraryContext.js
import {createContext, useState, useContext} from 'react'

const LibraryContext = createContext()

export const useLibrary = () => useContext(LibraryContext)

export const LibraryProvider = ({children}) => {
  const [library, setLibrary] = useState([])

  const addToLibrary = book => {
    setLibrary([...library, book])
  }

  const removeFromLibrary = id => {
    setLibrary(library.filter(book => book.id !== id))
  }

  return (
    <LibraryContext.Provider value={{library, addToLibrary, removeFromLibrary}}>
      {children}
    </LibraryContext.Provider>
  )
}
