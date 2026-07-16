import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="container-fluid b-gr">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/landing" className="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link to="/landing/features" className="nav-link px-2 text-white">Features</Link></li>
          <li><Link to="/landing/service" className="nav-link px-2 text-white">Services</Link></li>
          <li><Link to="/landing/faqs" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="/landing/about" className="nav-link px-2 text-white">About</Link></li>
        </ul>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            className="form-control form-control-dark text-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div className="text-end">
          <Link to="/" className="btn btn-outline-light me-2">Login</Link>
          <Link to="/registor" className="btn btn-warning">Register new</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
