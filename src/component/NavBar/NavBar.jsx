import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-bg  ">
        <div className="container-fluid ">
          <Link className='nav-head' to="/">E-home Shop</Link>
          <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart'>Product</Link>
              </li>
              <li className="nav-item">
                <Link>About</Link>

              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavBar;