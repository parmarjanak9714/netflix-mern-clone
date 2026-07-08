import React from 'react';

import { useNavigate } from 'react-router-dom';
// useNavigate: જ્યારે એડમિન 'Sign Out' બટન દબાવશે, ત્યારે તેને પકડીને સીધો બહાર લોગિન પેજ પર મોકલવા માટે.
const loggedInUser = JSON.parse(localStorage.getItem("currentUser"));

const Header = () => {
  const navigate = useNavigate(); // પેજ બદલવાનું ફંક્શન ચાલુ કર્યું.

  // 🚀 લોગઆઉટ કરવાનું શોર્ટ લોજિક
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    // localStorage.removeItem: બ્રાઉઝરના ખિસ્સામાંથી એડમિનનું લોગિન સેશન કાયમ માટે ડીલીટ કરી દેશે.
    
    alert('Admin logged out successfully!');
    navigate('/login'); // એડમિનને બહાર મોકલી દેશે.
  };

  return (
    <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
      {/* flex justify-between: ડાબી બાજુનું હેડિંગ અને જમણી બાજુનું બટન બંનેને સામસામે ખૂણામાં સુંદર ગોઠવી દેશે */}
      {/* border-b border-slate-800: હેડરની નીચે મસ્ત પ્રીમિયમ ડાર્ક ગ્રે લાઇન આપશે */}

      <div>
  <p className="text-red-500 uppercase tracking-[4px] text-xs font-bold">
    Netflix Admin Panel
  </p>

  <h1 className="text-3xl md:text-4xl font-black text-white mt-2">
    Welcome Back,
    <span className="text-red-600">
      {" "}
      {loggedInUser?.name}
    </span>
    👋
  </h1>

  <p className="text-sm text-slate-400 mt-2">
    Manage users, monitor activity and control your platform.
  </p>
</div>
<button
      onClick={handleLogout}
      className="self-start md:self-center bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-red-600/30 transition-all duration-300 cursor-pointer"
    >
      Sign Out
    </button>
    </div>
  );
};

export default Header;
