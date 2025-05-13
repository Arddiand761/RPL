import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './component/login';
import Home from './component/home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Selalu mulai dari halaman login */}
        <Route path="/" element={<Login />} />
        {/* Hanya bisa ke /home jika sudah login */}
        <Route
          path="/home"
          element={
            localStorage.getItem('isLoggedIn') === 'true'
              ? <Home />
              : <Navigate to="/" replace />
          }
        />
        {/* Redirect semua route yang tidak dikenal ke login */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;