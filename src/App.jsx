import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./assets/Components/Login";
import Signup from "./assets/Components/Signup";
import NewsGrid from "./assets/Components/NewsGrid";
import Navbar from "./assets/Components/Navbar";
import Profile from "./assets/Components/Profile";
import SearchResults from "./assets/Components/SearchResults"; // Import SearchResults
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./assets/Components/PrivateRoute";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthProvider>
      <div className={darkMode ? "dark bg-gray-900" : "bg-white"}>
        <Router>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="container mx-auto mt-5 min-h-screen transition-colors duration-300">
            <Routes>
              <Route path="/" element={<NewsGrid />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/search" element={<SearchResults />} /> {/* Add search route */}
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
