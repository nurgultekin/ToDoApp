import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ToDoList from './components/todo.js';
import NavigationBar from './components/nav-bar.js';
import About from './components/about.js';
import Contact from './components/contact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="App">
            <NavigationBar />
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/todo" component={ToDoList} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the To-Do App!</h1>
        <p>
          This is an application that will make your everyday life easier and allow you to organize your daily tasks.
        </p>
        <p>
          Click <a href="todo">here</a> to proceed!
        </p>
      </header>
    </div>
  );
}


export default App;
