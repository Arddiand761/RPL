import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    // For example, send a request to your backend API for authentication
    // If successful, redirect to the home page
    if (email === "admin@email.com" && password === "admin") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/reader");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand">
      <div className="w-full max-w-sm md:max-w-md">
        <div
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md opacity-0  translate-y-4 transition-all duration-700 ease-in-out" 
          style={{ animation: "fadeInUp 0.7s forwards" }}
        >
          <h2 className="text-2xl font-bold text-center mb-6 ">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <div className="text-sm text-gray-600 mb-4">
              Belum punya akun?{" "}
              <a href="/register" className="text-brand hover:underline">
                Daftar dulu
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              LOGIN
            </button>
            <div className="text-center mt-4 text-sm text-gray-600">
              <a href="/forgot-password" className="hover:underline">
                Lupa Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
