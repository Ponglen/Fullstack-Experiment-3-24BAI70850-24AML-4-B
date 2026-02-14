import { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");

  // Add Book
  const addBook = () => {
    if (title.trim() === "" || author.trim() === "") {
      alert("Please enter both title and author");
      return;
    }

    const newBook = {
      id: Date.now(),
      title,
      author,
    };

    setBooks([...books, newBook]);
    setTitle("");
    setAuthor("");
  };

  // Remove Book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Search Filter
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-slate-800">
          📚 Library Management System
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search books by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Add Book Form */}
        <div className="bg-white p-5 rounded-xl shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <button
              onClick={addBook}
              className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Book
            </button>
          </div>
        </div>

        {/* Book List */}
        <div className="space-y-4">
          {filteredBooks.length === 0 && (
            <p className="text-center text-slate-500">No books found</p>
          )}

          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white p-5 rounded-xl shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-slate-800">
                  {book.title}
                </h2>
                <p className="text-slate-500">by {book.author}</p>
              </div>

              <button
                onClick={() => removeBook(book.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
