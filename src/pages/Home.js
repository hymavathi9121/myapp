import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the React App</h1>
      <p>This is your home page.</p>
      <div>
        <h3>Explore Features</h3>
        <ul>
          <li><Link to="/counter">Go to Counter</Link></li>
          <li><Link to="/user-form">Go to User Form</Link></li>
          <li><Link to="/rich-text-editor">Go to Rich Text Editor</Link></li>
          <li><Link to="/dashboard">Go to Dashboard</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
