import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link className="special" to="/categories">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;