import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/Responsive.css";

import SplashScreen from "./components/SplashScreen";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // Show Splash Screen First
  if (showSplash) {
    return <SplashScreen />;
  }

  // After 3 seconds show app routes
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login */}
      <Route path="/login" element={<Login />} />

      {/* Register */}
      <Route path="/register" element={<Register />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;