import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../App';


export default function Nav() {
  let {cart} = useContext(AppContext);
  return (
    <header>
    <nav className="fixed-top navbar navbar-expand-lg navbar-light bs-tertiary-bg bg-light shadow-sm py-3">
      <div className="container-fluid px-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <i className="fa fa-shopping-bag fa-2x"><h1><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="30"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" /></svg></h1></i>
          <h1 className="ms-2 h4 fw-bold fs-2 mb-0">Mart</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center gap-lg-3">
            <li className="nav-item">
              <Link to="/" className="nav-link fs-4 fw-bold px-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link fs-4 fw-bold px-2">
                Shop
              </Link>
            </li>
            
            <li className="nav-item position-relative">
              <Link to="/cart" className="nav-link fs-4 fw-bold px-2">
                Cart
              </Link>
          
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
            <i
              className="fa fa-user fa-2x"
              style={{ cursor: 'pointer' }}
            ><h3><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg></h3></i>
            <Link to="/cart" className="position-relative">
              <i
                className="fa fa-shopping-cart fa-2x text-dark"
                style={{ cursor: 'pointer' }}
              ><h1><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg></h1></i>
              <span
                className="position-absolute top-0 start-100 translate-middle rounded-pill"
                style={{
                  fontSize: '0.75rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  lineHeight: '1.5rem',
                  textAlign:'center',
                  color: 'white',
                  fontWeight:'bold',
                  backgroundColor:'rgb(0,71,171)'
                }}
              >
                {Object.keys(cart).length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
  
  );
}