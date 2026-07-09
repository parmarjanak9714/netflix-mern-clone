import React, { useState } from 'react';
// useState: પોપ-અપ ફોર્મની અંદર એડમિન જે નામ, ઇમેઇલ, ફોન, રોલ અને સ્ટેટસ લખશે તેને લાઈવ સેવ કરવા માટે.

import API from '../../Api/axios';
// API: આપણા Node.js બેકએન્ડ સર્વરની લિંક (Port 5000) લાવ્યા જેથી નવો યુઝર ડેટાબેઝમાં સેવ થઈ શકે.

const AddUserModal = ({ isOpen, onClose }) => {
// isOpen: આ એક હા/ના (Boolean) સ્વિચ છે જે બહારથી આવશે. જો 'true' હશે તો જ આ પોપ-અપ સ્ક્રીન પર દેખાશે.
// onClose: જ્યારે એડમિન 'Cancel' કે બંધ કરવાનું બટન દબાવશે, ત્યારે આ પોપ-અપને બંધ કરવાનું ફંક્શન.

  // 📝 ફોર્મનો ડેટા લાઈવ સાચવવા માટેની સ્ટેટ્સ
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('User'); // ડિફોલ્ટ રોલ 'User' રાખ્યો
  const [status, setStatus] = useState('Deactivated'); // ડિફોલ્ટ સ્ટેટસ 'Deactivated' રાખ્યો

  // 🚀 ફોર્મ સબમિટ કરવાનું મુખ્ય લોજિક
  const handleSubmit = async (e) => {
    e.preventDefault(); // પેજને રિફ્રેશ થતું અટકાવશે

    try {
      // 📡 બેકએન્ડના 'adminAddUser' લોજિક પર ડેટા પોસ્ટ કરવો
      await API.post('/admin/user/add', { name, email, phone, role, status });

      alert('New User added successfully by Admin!');
      
      // ફોર્મ સબમિટ થયા પછી ઇનપુટ બોક્સ પાછા એકદમ ચોખ્ખા (ખાલી) કરી દેવા
      setName('');
      setEmail('');
      setPhone('');
      
      onClose(); // પોપ-અપ મોડલ ઓટોમેટિક બંધ થઈ જશે
      window.location.reload(); // ડેશબોર્ડ ટેબલ રિફ્રેશ કરીને નવો યુઝર લાઈવ બતાવશે

    } catch (error) {
      alert(error.response?.data?.message || 'Server Error: Failed to add user.');
    }
  };

  // 🔐 જો બહારથી 'isOpen' ની વેલ્યુ false હોય, તો આ આખો કોડ સ્ક્રીન પર કંઈ જ નહીં બતાવે (ખાલી રિટર્ન)
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
      {/* bg-black/80: બેકગ્રાઉન્ડનું આખું પેજ ઝાંખું અને કાળું (Blur effect) કરી દેશે જેથી ધ્યાન આ બોક્સ પર રહે */}

      <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <h2 className="text-xl font-bold text-white">Add New System User</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white font-bold text-lg cursor-pointer">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
            <input 
              type="text" required value={name} onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email Address</label>
            <input 
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Phone Number</label>
            <input 
              type="text" required value={phone} onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white text-sm focus:outline-none focus:border-red-600"
            />
          </div>

          {/* 👥 રોલ સિલેક્ટ કરવાનું ડ્રોપડાઉન મેનૂ */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">System Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white text-sm focus:outline-none focus:border-red-600"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {/* 🟢 સ્ટેટસ સિલેક્ટ કરવાનું ડ્રોપડાઉન મેનૂ */}
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Account Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded p-2.5 text-white text-sm focus:outline-none focus:border-red-600"
              >
                <option value="Active">Active</option>
                <option value="Deactivated">Deactivated</option>
              </select>
            </div>
          </div>

          {/* 🔘 નીચેના કેન્સલ અને સબમિટ બટન્સ */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-800 mt-6">
            <button type="button" onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs px-4 py-2 rounded transition cursor-pointer"
            >
              Cancel
            </button>
            <button type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded transition shadow-md cursor-pointer"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
