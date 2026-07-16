import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="g-b">
      <div className="d-flex flex-column g-b g-0 flex-shrink-0 p-3 bg-body-tertiary shadow light">
        Sidebar
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/landing" className="nav-link text-white" aria-current="page">
              Home
            </Link>
          </li>
          <li>
            <Link to="/landing/Userlist" className="nav-link link-body-emphasis text-white">
              Users
            </Link>
          </li>
          <li>
            <Link to="landing/orders" className="nav-link link-body-emphasis text-white">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/landing/products" className="nav-link link-body-emphasis text-white">Products</Link>
          </li>
          <li>
            <Link to="/landing/db" className="nav-link link-body-emphasis text-white">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="/profile"
            className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <strong>other</strong>
          </Link>
          <ul className="dropdown-menu text-small shadow">
            <li><Link to="landing/new-services" className="dropdown-item">New project...</Link></li>
            <li><Link to="landing/settings" className="dropdown-item">Settings</Link></li>
            <li><Link to="landing/profile" className="dropdown-item">Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="landing/signout" className="dropdown-item">Sign out</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
