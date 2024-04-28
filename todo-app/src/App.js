import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TodoPage from './components/todo';
import NavigationBar from './components/nav-bar';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/todos">
            <ToDoList />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the To-Do App!</h1>
        <p>
          This is an application that will make your everyday life easier and allow you to organize your daily tasks.
        </p>
        <p>
          Click <Link to="/todos">here</Link> to proceed!
        </p>
      </div>
    </Router>
  );
};

export default App;
