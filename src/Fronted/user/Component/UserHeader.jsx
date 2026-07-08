import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const UserHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Route change થાય ત્યારે menu close
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
    <style>{`
@keyframes logoLine {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(420%);
  }
}

.animate-logoLine {
  animation: logoLine 2.8s linear infinite;
}
`}</style>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-[110] transition-all duration-300 ${
          isScrolled
            ? "bg-black shadow-lg"
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link to="/home" className="group inline-block">
  <h1 className="text-red-600 text-2xl sm:text-3xl lg:text-4xl font-black tracking-widest">
    NETFLIX
  </h1>

  <div className="relative mt-1 h-[2px] w-full overflow-hidden rounded-full bg-red-900">
    <div className="absolute left-0 top-0 h-full w-8 animate-logoLine rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]"></div>
  </div>
</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
            <Link
                to="/home"
                 className="relative group pb-1">
          <span className="text-white">Home</span>

  <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-600 transition-all duration-300 ${
      location.pathname === "/home"
        ? "w-full"
        : "w-0 group-hover:w-full"
    }`}
  ></span>
</Link>

        <Link to="/about" className="relative group pb-1">
             <span className="text-white">About</span>

         <span
         className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-600 transition-all duration-300 ${
           location.pathname === "/about"? "w-full": "w-0 group-hover:w-full"}`}>
           </span>
        </Link>

<Link to="/services" className="relative group pb-1">
  <span className="text-white">Services</span>

    <span className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-600 transition-all duration-300 ${
         location.pathname === "/services"? "w-full": "w-0 group-hover:w-full"}`}>
    </span>
  </Link>


  <Link to="/contact" className="relative group pb-1">
    <span className="text-white">Contact</span>

  <span
    className={`absolute left-0 -bottom-0.5 h-[2px] bg-red-600 transition-all duration-300 ${
      location.pathname === "/contact"? "w-full": "w-0 group-hover:w-full"}`}>
  </span>
</Link>
</nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white font-semibold transition">
              Browse
            </button>

            <button
              onClick={handleLogout}
              className="bg-white text-black hover:bg-gray-300 px-5 py-2 rounded font-semibold transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl z-[120]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/60 z-[90] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-black z-[100] transform transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <h2 className="text-red-600 text-2xl font-bold">NETFLIX</h2>

          <button
            onClick={closeMenu}
            className="text-white text-3xl"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="flex flex-col text-white mt-5">
          <Link
            to="/home"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-red-600 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-red-600 transition"
          >
            About
          </Link>

          <Link
            to="/services"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-red-600 transition"
          >
            Services
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-red-600 transition"
          >
            Contact
          </Link>

          <button className="mx-6 mt-6 bg-red-600 hover:bg-red-700 py-3 rounded text-white font-semibold transition">
            Browse
          </button>

          <button
            onClick={() => {
              closeMenu();
              handleLogout();
            }}
            className="mx-6 mt-4 bg-white hover:bg-gray-300 text-black py-3 rounded font-semibold transition"
          >
            Logout
          </button>
        </nav>
      </div>
    </>
  );
};

export default UserHeader;