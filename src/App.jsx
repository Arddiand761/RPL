import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimationProvider } from "./utils/AnimationContext.jsx";
import Login from "./component/login";
import Reader from "./component/home-reader";
import Register from "./component/register";
import Intro from "./component/intro";
import About from "./component/about";
import Explore from "./component/explore";
import TransitionWrapper from "./utils/TransitionWarper.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <TransitionWrapper>
              <Login />
            </TransitionWrapper>
          }
        />

        <Route
          path="/reader"
          element={
            localStorage.getItem("isLoggedIn") === "true" ? (
              <TransitionWrapper>
                <Reader />
              </TransitionWrapper>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/register"
          element={
            <TransitionWrapper>
              <Register />
            </TransitionWrapper>
          }
        />

        <Route
          path="/intro"
          element={
            <TransitionWrapper>
              <Intro />
            </TransitionWrapper>
          }
        />

        <Route
          path="/about"
          element={
            <TransitionWrapper>
              <About />
            </TransitionWrapper>
          }
        />

        <Route
          path="/explore"
          element={
            <TransitionWrapper>
              <Explore />
            </TransitionWrapper>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AnimationProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AnimationProvider>
  );
}

export default App;
