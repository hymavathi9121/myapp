import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Home from './pages/Home';  // Import Home component

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/counter" element={<Counter />} />
        <Route path="/user-form" element={<UserForm />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
