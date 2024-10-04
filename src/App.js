// src/App.js
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import BookDetailsPage from './components/BookDetailsPage'
import MyLibraryPage from './components/MyLibraryPage'
import {LibraryProvider} from './context/LibraryContext'

function App() {
  return (
    <LibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/my-library" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </LibraryProvider>
  )
}

export default App
