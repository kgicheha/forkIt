import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Favorites from "./Favorites";
import ShoppingList from "./ShoppingList";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
