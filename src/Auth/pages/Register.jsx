import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from "../../Fronted/Api/Axios.js";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/register', { name, email, password, phone });
      alert('Registration Successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
     <div
     className="min-h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-5 overflow-x-hidden"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/netflix.jpg')",
    }}
  >
      
      {/* 🎬 અસલી Netflix વિરોધી દિશાવાળું કસ્ટમ સિનેમેટિક એનિમેશન */}
      <style>{`
        @keyframes netflixFadeInRight {
          0% {
            opacity: 0;
            transform: translate3d(-50px, 0, 0) scale(0.96);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        .animate-netflix-premium-register {
          animation: netflixFadeInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>


      {/* 📦 ૧૦０% ઓટો-ફિટ રિયલ એનિમેટેડ રજીસ્ટ્રેશન કાર્ડ */}
      <div className="animate-netflix-premium-register w-full max-w-sm sm:max-w-md bg-black/75 border border-zinc-800 rounded-xl shadow-2xl text-white p-5 sm:p-8">
      <div className="mb-6">
  <span className="text-red-600 text-3xl font-black">
    Netflix
  </span>
</div>
<div className="mb-4 sm:mb-8">
  <p className="text-red-600 uppercase tracking-[5px] text-xs font-bold mb-1">
    Start Streaming
  </p>

  <h2 className="text-3xl sm:text-4xl">
    Create Account
  </h2>

  <p className="mt-3 text-sm text-gray-400 leading-6">
    Unlimited movies, TV shows and more. Join Netflix today.
  </p>
</div>
        {error && (
          <div 
          className="mb-5 rounded-lg border border-red-500 bg-red-500/10 px-4 py-3 text-sm text-red-300"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className='flex flex-col gap-4'>
          <input type="text" required placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} 
          className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-all duration-300"
           />
          <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} 
           className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-all duration-300"
           />
          <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} 
           className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-all duration-300"
           />
          <input type="text" required placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} 
           className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-2.5 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 transition-all duration-300"
           />
          <button type="submit" 
          className="w-full bg-red-600 hover:bg-red-700 hover:scale-[1.02] hover:shadow-red-600/30 transition-all duration-300 text-white font-bold py-2.5 rounded-md shadow-lg mt-2"
          >
            Register
            </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
  Already have an account?{" "}
  <Link
    to="/login"
    className="font-semibold text-white hover:text-red-500 transition"
  >
    Login now
  </Link>
</p>

        {/* 👑 DEVELOPER CREDITS INTERFACE */}
        <div className="mt-6 border-t border-zinc-800 pt-4 text-center">
  <p className="text-[11px] uppercase tracking-wider text-zinc-600">
    Designed &amp; Engineered by{" "}
    <span className="font-semibold text-zinc-300">
      Janak Parmar
    </span>
  </p>
</div>

      </div>
    </div>
  );
};

export default Register;
