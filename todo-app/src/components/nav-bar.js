import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './about.js';
import Contact from './contact.js';
import TodoPage from './components/todo';


const NavigationBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/todo">Application</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    </nav>
);

export default NavigationBar;

<About/>