import React from 'react';
// import: React લાયબ્રેરી લાવ્યા જેથી આપણે JSX (HTML જેવો કોડ) લખી શકીએ.

// import UserHeader from '../component/UserHeader';

const About = () => {
  return (
    <div className="bg-[#111] min-h-screen text-white font-sans overflow-x-hidden">
      
      {/* <UserHeader /> */}

      <div className="max-w-4xl mx-auto px-4 pt-28 pb-12 space-y-8">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide border-b border-red-650 pb-4 text-red-600">
          About Netflix SaaS
        </h1>

        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
          Welcome to our elite Netflix SaaS platform, a production-level movie streaming and user management dashboard. This application bridges high-end entertainment with powerful admin control analytics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-2">🎬 Movie Rows</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dynamically categorized web series and movies layout synced beautifully with flexible configuration models.
            </p>
          </div>

          {/* CARD 2: Security & Roles */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-2">🔐 Role Security</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Advanced middleware rules that separate user profiles from master admin powers effortlessly.
            </p>
          </div>

          {/* CARD 3: Graph Analytics */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-2">📈 Live Graphs</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full-stack tracking using Recharts to visualize registration and active user sessions beautifully.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
