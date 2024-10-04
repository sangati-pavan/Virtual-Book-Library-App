// src/components/SearchBar.js
import {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('')

  const handleSearch = e => {
    setQuery(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search by title, author, or genre"
    />
  )
}

export default SearchBar
