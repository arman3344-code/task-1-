import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-fluid b-gr text-light">
      <footer className="py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link to="/landing" className="nav-link px-2 text-light">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="landing/features" className="nav-link px-2 text-light">Features</Link>
          </li>
          <li className="nav-item">
            <Link to="landing/pricing" className="nav-link px-2 text-light">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="landing/faqs" className="nav-link px-2 text-light">FAQs</Link>
          </li>
          <li className="nav-item">
            <Link to="landing/about" className="nav-link px-2 text-light">About</Link>
          </li>
        </ul>
        <p className="text-center text-light">© 2025 Company, Inc</p>
      </footer>
    </div>
  );
}
