import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../logo.svg';



const NavigationBar = () => (

  <nav className="navbar">
  <div className="logo">
    <img src={logo} className="App-logo" alt="logo" />
  </div>
  <ul className="nav-links">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/todos">Todos</Link>
    </li>
    <li>
      <Link to="/contact">Contact Us</Link>
    </li>
  </ul>
</nav>
);
      


export default NavigationBar;

