import { useState } from 'react';

export default function BookList({ books, setBooks }) {
  const [editingId, setEditingId] = useState(null);
  const [viewingBook, setViewingBook] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedAuthor, setEditedAuthor] = useState('');

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = (book) => {
    setEditingId(book.id);
    setEditedTitle(book.title);
    setEditedAuthor(book.author);
  };

  const handleUpdate = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, title: editedTitle, author: editedAuthor } : book
    );
    setBooks(updatedBooks);
    setEditingId(null);
  };

  const handleView = (book) => {
    setViewingBook(book);
  };

  return (
    <div>
      <h3>Book List</h3>
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '15px' }}>
          {editingId === book.id ? (
            <>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                placeholder="Edit Title"
              />
              <input
                value={editedAuthor}
                onChange={(e) => setEditedAuthor(e.target.value)}
                placeholder="Edit Author"
              />
              <button onClick={() => handleUpdate(book.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{book.title} - {book.author}</span>
              <button onClick={() => handleEdit(book)}>Edit</button>
              <button onClick={() => handleView(book)}>View</button>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </>
          )}
        </div>
      ))}

      {viewingBook && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
          <h4>Viewing Book</h4>
          <p><strong>Title:</strong> {viewingBook.title}</p>
          <p><strong>Author:</strong> {viewingBook.author}</p>
          <button onClick={() => setViewingBook(null)}>Close</button>
        </div>
      )}
    </div>
  );
}