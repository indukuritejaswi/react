import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BookForm from './BookForm';
import BookList from './BookList';

export default function Home() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [books, setBooks] = useState([
    { id: 1, title: 'Atomic Habits', author: 'James Clear' },
    { id: 2, title: 'Deep Work', author: 'Cal Newport' },
  ]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>Welcome, {user}</h2>
      <BookForm books={books} setBooks={setBooks} />
      <BookList books={books} setBooks={setBooks} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}