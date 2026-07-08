import React from 'react';
// import: React લાવ્યા જેથી JSX કોડ લખી શકાય.

// import UserHeader from '../component/UserHeader';
// UserHeader: આ પેજ પર પણ ઉપર આપણું પ્રીમિયમ નેવિગેશન બાર લોડ કરાવવા માટે.

const Services = () => {
  return (
    <div className="bg-[#111] min-h-screen text-white font-sans overflow-x-hidden pb-20">
      {/* bg-[#111]: આખા પેજને ઘાટો Netflix બ્લેક કલર આપવા માટે */}
      

      {/* 🎬 ૨. મુખ્ય સર્વિસીસ કન્ટેન્ટ */}
      <div className="max-w-4xl mx-auto px-4 pt-0.5 pb-20 space-y-8">
        
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide border-b border-red-650 pb-4 text-red-600">
          Our Premium Services
        </h1>

        <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium">
          Explore the world-class features and streaming services provided by our Netflix SaaS platform. We deliver an uninterrupted cinematic experience tailored just for you.
        </p>

        {/* 🚀 સર્વિસીસ દર્શાવતી પ્રીમિયમ ગ્રીડ (૪ લાઈવ સેક્શન કાર્ડ્સ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* સર્વિસ ૧: 4K Ultra HD Streaming */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300 flex flex-col justify-between min-h-[170px]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">📺 4K Ultra HD Streaming</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                Experience crystal-clear video quality with high dynamic range (HDR) and Dolby Atmos sound synchronization on all supported devices.
              </p>
            </div>
          </div>

          {/* સર્વિસ ૨: Multi-Profile Sync */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300 flex flex-col justify-between min-h-[170px]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">👥 Multi-Profile Sync</h3>
               <p className="text-sm text-slate-400 leading-relaxed flex-1">
                Create up to five different profiles for family members, each with their own personalized recommendation lists and history trackers.
              </p>
            </div>
          </div>

          {/* સર્વિસ ૩: Smart Admin Moderation */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300 flex flex-col justify-between min-h-[170px]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">🛠️ Smart Admin Moderation</h3>
              <p className='text-sm text-slate-400 leading-relaxed flex-1'>
                Our backend provides master admin locks to safely activate, deactivate, or customize user permissions instantly without server delay.
              </p>
            </div>
          </div>

          {/* સર્વિસ ૪: Advanced Analytics Graph */}
          <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-lg shadow-md hover:border-red-600/50 transition duration-300 flex flex-col justify-between min-h-[170px]">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">📈 User Behavior Analytics</h3>
              <p className='text-sm text-slate-400 leading-relaxed flex-1'>
                Track login frequencies and system metrics smoothly with automated full-stack charts for commercial platforms.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;
