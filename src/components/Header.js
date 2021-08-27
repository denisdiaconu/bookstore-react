import React from 'react';
import { Link } from 'react-router-dom';
import './style/header.css';

const Header = () => (
  <header>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link className="navTitle" to="/"><h3 className="navTitle">BOOKS</h3></Link></li>
        <li><Link className="navTitle" to="/categories"><h3 className="navTitle">CATEGORIES</h3></Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
