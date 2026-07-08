import React from "react";
import { Link } from "react-router-dom";

const Foregate = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl">

        {/* Lock Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-600/20 flex items-center justify-center text-3xl border border-red-500/30">
            🔒
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center">
          Forgot Password
        </h2>

        {/* Description */}
        <p className="text-zinc-400 text-center mt-4 leading-7">
          This demo project does not support
          <br />
          email-based password reset.
        </p>

        {/* Message Box */}
        <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-center text-red-400 font-semibold">
            Please contact the administrator.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/login"
          className="mt-8 block w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white text-center py-3 rounded-lg font-semibold"
        >
          ← Back to Login
        </Link>

      </div>

    </div>
  );
};

export default Foregate;