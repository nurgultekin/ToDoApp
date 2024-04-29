import './App.css';
import React from 'react';
import { BrowserRouter,  Route, Routes, Link } from 'react-router-dom';
import TodoPage from './components/Todos';
import NavigationBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import planning from './components/planning.avif';



const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => (
  <div>
    <img src={planning} className="hero-img" alt="hero-image" />
    <h1 className="hero-title">Welcome to the To-Do App!</h1>
    <p className="hero-text">
      This is an application that will make your everyday life easier and allow you to organize your daily tasks.
    </p>
    <p className="hero-text">
      Click <Link to="/todos">here</Link> to proceed!
    </p>
  </div>
);

export default App;