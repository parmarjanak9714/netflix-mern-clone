import React, { useState } from 'react';
// useState: જ્યારે યુઝર ફોર્મમાં મેસેજ ટાઇપ કરે, ત્યારે તે ડેટા લાઈવ કોડમાં સાચવવા માટે.

// import UserHeader from '../component/UserHeader';
// UserHeader: આ પેજ પર પણ ઉપર નેવિગેશન બાર બતાવવા માટે.

const Contact = () => {
  // 📝 ફોર્મનો ડેટા સાચવવાની સ્ટેટ્સ
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 🚀 ફોર્મ સબમિટ થતાં જ ચાલતું ફંક્શન
  const handleSubmit = (e) => {
    e.preventDefault(); // પેજને લોડ થતું અટકાવશે
    alert(`Thank you! Your message has been sent to Netflix SaaS support.`);
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-[#111] min-h-screen text-white font-sans overflow-x-hidden">
      {/* bg-[#111]: અસલી Netflix બ્લેક બેકગ્રાઉન્ડ થીમ */}
      

      {/* 🎬 ૨. મુખ્ય કોન્ટેક્ટ બોક્સ (સેન્ટરમાં ગોઠવેલું) */}
      <div className="max-w-md mx-auto px-4 pt-2 pb-2">
        
        <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-lg shadow-2xl">
          {/* Glassmorphic Box: કાચ જેવું મસ્ત પ્રીમિયમ ડાર્ક કાર્ડ */}
          
          <h1 className="text-3xl font-bold tracking-wide text-red-600 mb-2">
            Contact Support
          </h1>
          <p className="text-sm text-slate-400 mb-6">
            Have questions or facing streaming issues? Drop us a message below, and our team will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Your Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // કીબોર્ડનો ૧-૧ અક્ષર વેરિયેબલમાં સાચવશે
                className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-red-600"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">How can we help?</label>
              <textarea 
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-red-600 resize-none"
                placeholder="Type your query here..."
              />
            </div>

            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold p-3 rounded transition-all mt-2">
              Send Message
            </button>
            {/* bg-red-600: Netflix રેડ બટન */}
          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;
