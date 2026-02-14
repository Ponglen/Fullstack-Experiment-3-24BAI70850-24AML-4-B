import React, { useState } from 'react';
import './App.css';

function LibraryManager() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  ]);

  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
  const [isAdding, setIsAdding] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.year) {
      setIsAdding(true);
      setTimeout(() => {
        setBooks([...books, { ...newBook, id: books.length + 1 }]);
        setNewBook({ title: '', author: '', year: '' });
        setIsAdding(false);
      }, 300);
    }
  };

  const deleteBook = (id) => {
    setDeletingId(id);
    setTimeout(() => {
      setBooks(books.filter(book => book.id !== id));
      setDeletingId(null);
    }, 300);
  };

  return (
    <div className="library-manager">
      <h2>Library Management System</h2>
      
      <div className="add-book-form">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        />
        <button 
          className={`add-btn ${isAdding ? 'adding' : ''}`} 
          onClick={addBook}
        >
          {isAdding ? '✓ Added!' : 'Add Book'}
        </button>
      </div>

      <table className="book-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr 
              key={book.id} 
              className={`book-row ${deletingId === book.id ? 'deleting' : ''}`}
            >
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>
                <button 
                  className="delete-btn"
                  onClick={() => deleteBook(book.id)}
                >
                  {deletingId === book.id ? '✓' : 'Delete'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LibraryManager;
