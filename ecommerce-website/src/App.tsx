import React from "react";
import "./App.css";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import { Routes, Route, Link } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="shop" element={<Shop />} />

        <Route
          path="checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route path="products" element={<Shop />} />
        <Route
          path="*"
          element={
            <main className="flex items-center flex-col gap-8 justify-center h-screen">
              <p className="text-4xl text-gray-900">Page not found</p>
              <Link to="/">
                <p className="text-lg text-blue-600 underline">
                  back to HomePage
                </p>
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
