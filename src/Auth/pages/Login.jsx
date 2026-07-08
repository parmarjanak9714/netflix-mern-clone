import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../Fronted/Api/Axios.js";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", { email, password });
      alert("Login Successful!");
      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      if (response.data.user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div
    className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-5 py-8 overflow-y-auto"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/netflix.jpg')",
    }}
  >
      
      {/* 🎬 અસલી Netflix બ્રાન્ડ કસ્ટમ સિનેમેટિક એનિમેશન */}
      <style>{`
        @keyframes netflixFadeInLeft {
          0% {
            opacity: 0;
            transform: translate3d(50px, 0, 0) scale(0.96);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        .animate-netflix-premium {
          animation: netflixFadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
        }
      `}</style>

      {/* 📦 ૧૦０% ઓટો-ફિટ રિયલ એનિમેટેડ કાર્ડ */}
     
     <div className="animate-netflix-premium w-full max-w-sm sm:max-w-md bg-black/75 border border-zinc-800 rounded-xl shadow-2xl text-white p-5 sm:p-8">
     <div className="mb-6">
  <span className="text-red-600 text-3xl font-black">
    Netflix
  </span>
</div>
<div className="mb-6 sm:mb-8">
  <p className="text-red-600 uppercase tracking-[5px] text-xs font-bold mb-2">
    Welcome Back
  </p>
<h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
    Login
  </h2>

<p className="mt-2 text-sm text-gray-400 leading-6">
    Continue watching your favourite movies, TV shows and Netflix Originals.
  </p>
</div>
        {error && (
          <div style={{ backgroundColor: 'rgba(229,9,20,0.1)', border: '1px solid #E50914', color: '#ff8888', padding: '12px', borderRadius: '4px', marginBottom: '20px', fontSize: '14px' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="email" required placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500"          />

          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={showPassword ? "text" : "password"} required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
               className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-red-500"            />
            <button
              type="button" onClick={() => setShowPassword(!showPassword)}
              style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'transparent', border: 'none', color: '#aaa', fontSize: '14px', cursor: 'pointer', outline: 'none' }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex justify-end mt-1 mb-2">
  <Link
    to="/forgate-password"
    className="text-sm text-zinc-400 hover:text-red-500 transition-colors"
  >
    Forgot Password?
  </Link>
</div>

          <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-md font-semibold transition-all duration-300">
            Login
          </button>
        </form>

        <p style={{ color: '#aaa', marginTop: '25px', fontSize: '15px', marginBottom: '8px' }}>
          New to Netflix? <Link to="/register" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Sign up now.</Link>
        </p>

        {/* એડમિન સપોર્ટ */}
        <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #333', textAlign: 'center' }}>
          <p style={{ color: '#aaa', fontSize: '14px', margin: '0 0 10px 0' }}>
            Account Deactivated?{" "}
            <a href="mailto:તારો-ઈમેઈલ@://gmail.com SaaS Account Activation Request" style={{ color: '#E50914', textDecoration: 'none', fontWeight: 'bold' }}>Contact Admin to Activate</a>
          </p>
        </div>

        {/* ડેવલપર ક્રેડિટ્સ */}
        <div style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #222', textAlign: 'center' }}>
          <p style={{ color: '#555', fontSize: '11px', margin: 0, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
            Designed & Engineered by <span style={{ color: '#aaa', fontWeight: 'bold' }}>Janak Parmar</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
