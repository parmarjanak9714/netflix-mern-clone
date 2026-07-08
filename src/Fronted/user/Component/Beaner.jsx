import React, { useState } from 'react';

const Beaner = () => {
  // 🍿 ૧૦૦% ગેરેંટેડ અસલી HD નેટફ્લિક્સ વૉલપેપર્સ ડેટાબેઝ
  const sliderMovies = [
    {
      id: 1,
      name: "Stranger Things",
      category: "Netflix Original • Sci-Fi Thriller",
      summary: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
      image: "/stranger.jpg" // 🟥 Stranger Things HD Wallpaper
      
    },
    {
      id: 2,
      name: "Squid Game",
      category: "Netflix Original • Psychological Drama",
      summary: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
      image: "/squidGame.jpg" // 🟩 Squid Game HD Wallpaper
    },
    {
      id: 3,
      name: "Money Heist",
      category: "Netflix Original • Action Crime",
      summary: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      image: "/money.jpg" // 🟫 Money Heist HD Wallpaper
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMovie = sliderMovies[currentIndex];

  // ➡️ આગળ જવાનું બટન
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderMovies.length);
  };

  // ⬅️ પાછળ જવાનું બટન
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderMovies.length) % sliderMovies.length);
  };

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  return (
    <div className="relative w-full h-[350px] md:h-[450px] text-white overflow-hidden bg-zinc-950 block select-none border-b border-zinc-900 group">
      
      {/* 🖼️ અસલી પ્રીમિયમ ફોટો જે ક્યારેય બ્લેન્ક નહિ થાય */}
      <img
  src={currentMovie.image}
  alt={currentMovie.name}
  className="absolute inset-0 w-full h-full object-contain object-center z-0 block border-0 opacity-80 transition-all duration-300"
/>
      
      {/* 🖤 સિનેમેટિક ડાર્ક ઓવરલે */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/40 to-transparent z-1"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-1"></div>
      
      {/* 🎬 મૂવી વિગતો */}
      <div className="absolute bottom-[15%] left-4 md:left-12 max-w-xl space-y-3 z-10 block">
        <span className="text-red-500 text-xs font-extrabold uppercase tracking-widest block">{currentMovie.category}</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-white drop-shadow-2xl">{currentMovie.name}</h1>
        
        {/* સાદા પ્લે એન્ડ લિસ્ટ બટન્સ */}
        <div className="flex items-center space-x-3 pt-1">
          <button className="bg-white text-black font-extrabold px-6 py-2 rounded text-sm shadow-md">
            ▶ Play
          </button>
          <button className="bg-zinc-800/60 text-white font-bold px-6 py-2 rounded text-sm border border-zinc-700/30">
            + My List
          </button>
        </div>
        
        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed drop-shadow-lg">{truncate(currentMovie.summary, 150)}</p>
      </div>

      {/* ⬅️ ડાબું સ્લાઇડર બટન (બધા ડિવાઇસ પર ફરજિયાત દેખાશે) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer font-black border border-zinc-800"
      >
        ❮
      </button>

      {/* ➡️ જમણું સ્લાઇડર બટન (બધા ડિવાઇસ પર ફરજિયાત દેખાશે) */}
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer font-black border border-zinc-800"
      >
        ❯
      </button>

      {/* 🔘 નીચેના નાના ડોટ્સ */}
      <div className="absolute bottom-4 right-4 md:right-12 z-20 flex space-x-1.5">
        {sliderMovies.map((_, index) => (
          <div 
            key={index}
            className={`h-1.5 rounded-full transition-all duration-200 ${index === currentIndex ? 'w-5 bg-red-600' : 'w-1.5 bg-zinc-650'}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Beaner;
