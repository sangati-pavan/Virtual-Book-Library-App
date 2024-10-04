// src/components/BookList.js
import BookCard from './BookCard'

const BookList = ({books}) => (
  <div className="book-list">
    {books.map(book => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
)

export default BookList
