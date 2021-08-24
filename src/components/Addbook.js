import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function Addbook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const submitBookToStore = () => {
    console.log('working');
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <div className="addbook">
        <input type="text" name="book-name" onChange={(e) => setTitle(e.target.value)} required placeholder="Book Title" />
        <select name="category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Economy">Economy</option>
          <option value="Comedy">Comedy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </div>
    </div>

  );
}

export default Addbook;
