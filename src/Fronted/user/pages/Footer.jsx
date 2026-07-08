import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-14">

        {/* Contact */}
        <p className="text-base mb-10">
          Questions? Call{" "}
          <a
            href="tel:0008009191743"
            className="underline hover:text-white transition"
          >
            000-800-919-1743
          </a>
        </p>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-8 text-sm">

          <a href="#" className="underline hover:text-white">
            FAQ
          </a>

          <a href="#" className="underline hover:text-white">
            Help Centre
          </a>

          <a href="#" className="underline hover:text-white">
            Account
          </a>

          <a href="#" className="underline hover:text-white">
            Media Centre
          </a>

          <a href="#" className="underline hover:text-white">
            Investor Relations
          </a>

          <a href="#" className="underline hover:text-white">
            Jobs
          </a>

          <a href="#" className="underline hover:text-white">
            Ways to Watch
          </a>

          <a href="#" className="underline hover:text-white">
            Terms of Use
          </a>

          <a href="#" className="underline hover:text-white">
            Privacy
          </a>

          <a href="#" className="underline hover:text-white">
            Cookie Preferences
          </a>

          <a href="#" className="underline hover:text-white">
            Corporate Information
          </a>

          <a href="#" className="underline hover:text-white">
            Contact Us
          </a>

          <a href="#" className="underline hover:text-white">
            Speed Test
          </a>

          <a href="#" className="underline hover:text-white">
            Legal Notices
          </a>

          <a href="#" className="underline hover:text-white">
            Only on Netflix
          </a>

        </div>

        {/* Language */}
        <div className="mt-10">
          <select className="bg-black border border-gray-600 text-white rounded px-4 py-2 focus:outline-none focus:border-white">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Country */}
        <p className="mt-8 text-sm">Netflix India</p>

        {/* Recaptcha */}
        <p className="mt-8 text-xs text-gray-500 leading-6 max-w-xl">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <span className="text-blue-500 cursor-pointer hover:underline ml-1">
            Learn more.
          </span>
        </p>

      </div>
    </footer>
  );
};

export default Footer;