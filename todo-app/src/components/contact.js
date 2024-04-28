import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavigationBar from '../components/nav-bar.js';

const Contact = () => (
    <div className="App">
        <header className="App-header">
            <NavigationBar/>
            <h1>Contact</h1>
            <p>
                Send us an email here or chat with us!
            </p>
        </header>
    </div>
);

export default Contact;