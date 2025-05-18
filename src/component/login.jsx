import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AnimationContext } from "../utils/AnimationContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { setTransitionType } = useContext(AnimationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    setTransitionType("slide");

    // Simulate login process
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (email === "admin@email.com" && password === "admin") {
        setShowSuccess(true);
        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
          navigate("/reader", {
            state: {
              transition: "slide",
            },
          });
        }, 1500);
      } else {
        setError("Email atau password salah");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Terjadi kesalahan saat login");
      setIsLoading(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setTransitionType("slide");
    navigate("/register", {
      state: {
        transition: "slide",
      },
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center justify-center min-h-screen bg-brand"
      >
        <div className="w-full max-w-sm md:max-w-md px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-lg w-full"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              >
                👋
              </motion.div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Selamat Datang
            </h2>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #ef4444" }}
                  id="email"
                  type="email"
                  placeholder="admin@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01, boxShadow: "0 0 0 2px #ef4444" }}
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Ingat saya
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-red-600 hover:underline"
                >
                  Lupa password?
                </Link>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition relative flex items-center justify-center h-12"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : showSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Login Berhasil!
                  </motion.div>
                ) : (
                  "LOGIN"
                )}
              </motion.button>
            </form>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-center text-sm text-gray-600"
            >
              Belum punya akun?{" "}
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/register"
                  onClick={handleRegister}
                  className="text-red-500 font-medium hover:underline"
                >
                  Daftar disini
                </Link>
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
