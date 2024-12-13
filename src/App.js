import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes, Navigate } from 'react-router-dom';
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const user = localStorage.getItem("user")
    console.log(user, 'user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogin = (email, password) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user, 'djd')
    if (user && user.email === email && user.password === password) {
      setIsLoggedIn(true);
      alert("Login successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  const handleRegister = (email, password, userName) => {
    localStorage.setItem("user", JSON.stringify({ email, password, userName }));
    setIsLoggedIn(true);
    alert("Registration successful!");
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

    </div >
  );
}

export default App;
