import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // If Home.css is inside the `styles` folder


const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to the React App</h1>
    <div className="home-links">
      <Link to="/counter" className="home-link">Counter</Link>
      <Link to="/form" className="home-link">User Form</Link>
      <Link to="/editor" className="home-link">Rich Text Editor</Link>
      <Link to="/dashboard" className="home-link">Dashboard</Link>
    </div>
  </div>
);

export default Home;
