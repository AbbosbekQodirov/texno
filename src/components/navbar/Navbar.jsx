import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <h1>
            <Link to={"/"}>TEKNIK INNAVATSION MCHJ</Link>
          </h1>
        </div>
        <ul className="links">
          <li>
            <a href="">+998911612501</a>
          </li>
          <li>
            <a href="">tehnikinnovation@gmail.com</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar