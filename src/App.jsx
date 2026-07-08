import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { AuthProvider } from "./Fronted/context/AuthContext.jsx";

import UserHeader from "./Fronted/user/Component/UserHeader";

import Login from "./Auth/pages/Login";
import Register from "./Auth/pages/Register";
import Foregate from "./Auth/pages/Foregate.jsx";

import Home from "./Fronted/user/pages/Home.jsx";
import About from "./Fronted/user/pages/About.jsx";
import Services from "./Fronted/user/pages/Services.jsx";
import Contact from "./Fronted/user/pages/Contac.jsx";
import Footer from "./Fronted/user/pages/Footer.jsx";

import DashBord from "./Fronted/admin/pages/DashBord.jsx";

// Common Layout for User Pages
const UserLayout = () => {
  return (
    <div className="bg-[#111] min-h-screen text-white overflow-x-hidden">
      <UserHeader />

      <div className="pt-20">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Default */}
          <Route path="/" element={<Navigate to="/login" />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgate-password" element={<Foregate/>}/>

          {/* User Pages */}
          <Route element={<UserLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin */}
          <Route path="/admin/dashboard" element={<DashBord />} />

          {/* Invalid Route */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;