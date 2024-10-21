import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons for dark mode toggle

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedSearchTerm = searchTerm.trim(); // Trim whitespace
    if (trimmedSearchTerm) {
      navigate(`/search?query=${encodeURIComponent(trimmedSearchTerm)}`); // Navigate with query
      setSearchTerm(""); // Clear input after submission
    } else {
      alert("Please enter a search term."); // Alert if search term is empty
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <nav
      className={`p-4 shadow-lg transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-blue-500 to-purple-500"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* App Title */}
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-gray-100" : "text-white"
          }`}
        >
          News Owl
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 ${
              darkMode
                ? "bg-gray-800 text-white placeholder-gray-300"
                : "bg-white text-black"
            } transition-colors duration-300`}
          />
          <button
            type="submit"
            className={`p-2 rounded-r-md ${
              darkMode
                ? "bg-gray-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            } transition duration-200`}
          >
            Search
          </button>
        </form>

        {/* Links and Dark Mode Toggle */}
        <div className="flex items-center">
          <Link
            to="/"
            className={`px-4 text-lg ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-white hover:text-blue-200"
            }`}
          >
            Home
          </Link>
          {currentUser ? (
            <>
              <Link
                to="/profile"
                className={`px-4 text-lg ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className={`px-4 text-lg ${
                  darkMode ? "text-gray-300 hover:text-white" : "text-white"
                }`}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className={`px-4 text-lg ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`px-4 text-lg ${
                  darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-white hover:text-blue-200"
                }`}
              >
                Sign Up
              </Link>
            </>
          )}
          {/* Dark Mode Toggle Button with Icon */}
          <button
            onClick={toggleDarkMode}
            className={`ml-4 p-2 rounded-full ${
              darkMode
                ? "bg-gray-600 text-yellow-400 hover:bg-gray-500"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            } transition-colors duration-300`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
