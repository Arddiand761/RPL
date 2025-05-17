import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./component/login";
import Reader from "./component/home-reader";
import Register from "./component/register";
import Intro from "./component/intro";
import About from "./component/about";

function App() {
  return (
    <Router>
      <Routes>
        {/* Selalu mulai dari halaman login */}
        <Route path="/" element={<Login />} />
        {/* Hanya bisa ke /home jika sudah login */}
        <Route
          path="/reader"
          element={
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Reader />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        {/* Redirect semua route yang tidak dikenal ke login */}
        <Route path="*" element={<Navigate to="/" replace />} />

        {/* Halaman register */}
        <Route path="/register" element={<Register />} />
        {/* Halaman forgot password */}

        <Route path="/intro" element={<Intro />}></Route>

        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
