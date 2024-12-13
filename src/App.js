import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Layout from './layouts';
import HomePage from './components/Homepage';
import Login from './components/Login/Login';
import CardDetails from './components/CardDetails';
import ProductDetails from './components/CardDetails/ProductDetails';
import DetailsPage from './components/CardDetails/DetailsPage';
import Bags from './components/Bags/Bags';
import Wishlist from './components/Wishlist/Wishlist';
import { useEffect, useState } from 'react';
import Register from './components/Register/Register';
import { toast, Bounce } from 'react-toastify';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const notify = (message) => {
    toast(message, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      icon: false,
      theme: "light",
      transition: Bounce,
    });
  };


  useEffect(() => {
    // Check login status from localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogin = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      setIsLoggedIn(true);
      // alert("Login successful!");
      notify("Login successful!");
      notify(`Welcome back, ${user.userName}!`);
      navigate("/"); // Redirect to HomePage
    } else {
      notify("Invalid credentials!");
    }
  };

  const handleRegister = (email, password, userName) => {
    localStorage.setItem("user", JSON.stringify({ email, password, userName }));
    notify("Registration successful! Please log in.");
    navigate("/login"); // Redirect to LoginPage after registration
  };

  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            {/* Authenticated Routes with Layout */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:id" element={<DetailsPage />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/bags" element={<Bags />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            {/* Public Routes without Layout */}
            <Route path="/register" element={<Register onRegister={handleRegister} />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
