import React, { useState } from 'react';
import './App.css';
import Register from './Register';
import Login from './Login';
import Main from './Main';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



function App() {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user? <Main user={user}/> : <Navigate to="/register"/>} />
        <Route path="/main" element={<Main user={user} />} />
        <Route path="/register" element={<Register user={user} setUser={setUser} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
