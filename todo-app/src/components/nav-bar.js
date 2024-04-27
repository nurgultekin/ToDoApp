import React from 'react';
import { Link } from 'react-router-dom'; 
import About from './about.js';
import Contact from './contact.js';
import ToDoList from './todo.js';


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