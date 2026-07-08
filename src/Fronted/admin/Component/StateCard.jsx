import React from 'react';

// 🎯 [FIXED]: આપણે બહારથી 'setActiveTab' નામની જાદુઈ સ્વિચ Props તરીકે અંદર લાવ્યા
const StateCard = ({ total, active, deactivated,}) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 my-6">

      {/* 📊 કાર્ડ ૧: TOTAL USERS (ક્લિક કરતાં જ યુઝર્સ લિસ્ટ ખુલશે) */}
      <div 
        
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md flex items-center justify-between transition-all hover:scale-102 hover:border-blue-500/40"
      >
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Total Users</p>
          <h3 className="text-3xl font-extrabold text-white mt-1">{total}</h3>
        </div>
        <div className="bg-blue-600/10 text-blue-500 p-3 rounded-full text-xl font-bold">👤</div>
      </div>

      {/* 🟢 કાર્ડ ૨: ACTIVE USERS */}
      <div 
        
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md flex items-center justify-between transition-all hover:scale-102 hover:border-emerald-500/40"
      >
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Active</p>
          <h3 className="text-3xl font-extrabold text-emerald-500 mt-1">{active}</h3>
        </div>
        <div className="bg-emerald-600/10 text-emerald-500 p-3 rounded-full text-xl font-bold">✅</div>
      </div>

      {/* 🔴 કાર્ડ ૩: DEACTIVATED USERS */}
      <div 
        
        className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg shadow-md flex items-center justify-between transition-all hover:scale-102 hover:border-rose-500/40"
      >
        <div>
          <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Deactivated</p>
          <h3 className="text-3xl font-extrabold text-rose-500 mt-1">{deactivated}</h3>
        </div>
        <div className="bg-rose-600/10 text-rose-500 p-3 rounded-full text-xl font-bold">🚫</div>
      </div>

    </div>
  );
};

export default StateCard;
