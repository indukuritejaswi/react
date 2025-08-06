import { useState } from 'react';

export default function BookForm({ books, setBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book Title"
        required
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
}