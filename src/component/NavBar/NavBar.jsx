import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const items=useSelector((state)=>state.cart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-bg fixed-top ">
        <div className="container-fluid ">
          <Link className='nav-head' to="/">E-home Shop</Link>

          <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
         
            <FontAwesomeIcon icon={faBars} />
           
          </button>

          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav mx-auto d-flex">
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart'>ProductsCart</Link>
              </li>
              <li className="nav-item">
                <Link>Cart Item: <span>{items.length}</span></Link>

              </li> 

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default NavBar;