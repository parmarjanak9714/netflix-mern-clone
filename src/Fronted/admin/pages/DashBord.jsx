import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../Api/Axios.js';

// 🌍 ૧૦૦% ફિક્સ એબ્સોલ્યુટ પાથ
import Header from '/src/Fronted/admin/Component/Header.jsx';
import StateCard from '/src/Fronted/admin/Component/StateCard.jsx';
import UserChart from '/src/Fronted/admin/Component/UserChart.jsx';
import AddUserModal from '/src/Fronted/admin/Component/AddUserModel.jsx';
import AdminAction from '/src/Fronted/admin/Component/AdminAction.jsx';

const DashBord = () => {
  const navigate = useNavigate();

  // 📝 એડમિન માટેની મુખ્ય લાઈવ સ્ટેટ્સ
  const [users, setUsers] = useState([]); 
  const [stats, setStats] = useState({ total: 0, active: 0, deactivated: 0 }); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [search, setSearch] = useState("");

  // 🎯 માસ્ટર ટેબ સ્વિચ સ્વિચ
  const [activeTab, setActiveTab] = useState('dashboard'); 

  
    const fetchAdminData = async () => {
      try {
        const response = await API.get('/admin/users');
        setUsers(response.data); 

        // 🧮 ઓટોમેટિક કાર્ડ્સ ગણતરી લોજિક
        const total = response.data.length;
        const active = response.data.filter(u => u.status === 'Active').length;
        const deactivated = response.data.filter(u => u.status === 'Deactivated').length;

        setStats({ total, active, deactivated });
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    // 🔄 ટેબલ અપડેટ અને ડિલીટ ફંક્શન્સ
const toggleStatus = async (id, currentStatus) => {
  const newStatus = currentStatus === 'Active' ? 'Deactivated' : 'Active';
  try {
    await API.put(`/admin/user/update/${id}`, { status: newStatus });
    alert('User status updated successfully!');
    await fetchAdminData();
  } catch (error) {
    alert('Failed to update status: ' + error.message);
  }
};

const handleDelete = async (id) => {
  if (window.confirm('Are you absolutely sure you want to delete this user from the system?')) {
    try {
      await API.delete(`/admin/user/delete/${id}`);
      alert('User deleted successfully!');
      await fetchAdminData();
    } catch (error) {
      alert('Failed to delete user: ' + error.message);
    }
  }
};

  // 🔐 સિક્યોરિટી અને લાઈવ ડેટા ખેંચવાનું મુખ્ય લોજિક
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!loggedInUser || loggedInUser.role !== 'Admin') {
      alert('Access Denied! Only Administrators can access this panel.');
      navigate('/login'); 
      return;
    }


    fetchAdminData();
  }, [navigate]);

  return (
    <div className="bg-[#111] min-h-screen text-white font-sans p-4 md:p-8 overflow-x-hidden select-none">
      <div className="max-w-6xl mx-auto space-y-6 pt-4">
        
        {/* 👑 ૧. પ્રીમિયમ એડમિન હેડર */}
        <Header />

        {/* 🔗 ૨. ઉપર ડાબી બાજુ માસ્ટર લિંક્સ (Tabs) */}
        <div className="flex justify-center items-center gap-8 border-b border-zinc-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`pb-2 text-sm font-bold tracking-wide transition-all cursor-pointer border-b-2 ${
              activeTab === 'dashboard' 
                ? 'text-red-650 border-red-650 font-extraboldScale' 
                : 'text-zinc-500 border-transparent hover:text-zinc-300'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`pb-2 text-sm font-bold tracking-wide transition-all cursor-pointer border-b-2 ${
              activeTab === 'users' 
                ? 'text-red-650 border-red-650 font-extraboldScale' 
                : 'text-zinc-500 border-transparent hover:text-zinc-300'
            }`}
          >
            Users
          </button>
        </div>

        {/* 📊 3. [DASHBOARD VIEW]: જો 'Dashboard' લિંક ઓન હોય તો આ દેખાશે */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* 🎯 [CONNECTED]: અહીંથી આપણે લાઈવ ચેન્જ કરવાની સ્વિચ અંદર મોકલી દીધી! */}
            <StateCard 
              total={stats.total} 
              active={stats.active} 
              deactivated={stats.deactivated} 
              setActiveTab={setActiveTab} 
            />
            <UserChart users={users} />
          </div>
        )}

        {/* 📋 ૪. [USERS VIEW]: જો 'Users' લિંક ઓન હોય તો ટેબલ દેખાશે */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            
            {/* નવો યુઝર એડ કરવાનું બટન */}
            <div className="flex items-center justify-end">
                <input
    type="text"
    placeholder="Search by name or email..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full md:w-80 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white placeholder:text-zinc-500 focus:outline-none focus:border-red-500"
  />

              <button 
                onClick={() => setIsModalOpen(true)} 
                className="bg-red-650 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded shadow-lg transition-all cursor-pointer"
              >
                + Add New User
              </button>
            </div>

            {/* મુખ્ય ડેટા ટેબલ બોક્સ */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
                <h2 className="text-base font-bold tracking-wide">Registered Users Database</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-950 text-zinc-500 text-xs font-semibold uppercase tracking-wider border-b border-zinc-800">
                      <th className="p-4">Name</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Role</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-zinc-800/60 text-sm">
  {users
    .filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    })
    .map((user) => (
      <tr
        key={user._id}
        className="hover:bg-zinc-950/40 transition-colors"
      >
        <td className="p-4 text-white font-bold">{user.name}</td>

        <td className="p-4 text-zinc-400">{user.email}</td>

        <td className="p-4 text-zinc-500">{user.phone}</td>

        <td className="p-4">
          <span className="bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded text-xs font-semibold">
            {user.role}
          </span>
        </td>

        <td className="p-4">
          <span
            className={`px-2 py-0.5 rounded text-xs font-bold ${
              user.status === "Active"
                ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/10"
                : "bg-rose-500/10 text-rose-500 border border-rose-500/10"
            }`}
          >
            {user.status}
          </span>
        </td>

        <td className="p-4">
          <AdminAction
            userId={user._id}
            userStatus={user.status}
            onToggleStatus={toggleStatus}
            onDeleteUser={handleDelete}
          />
        </td>
      </tr>
    ))}

  {users.filter((user) => {
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  }).length === 0 && (
    <tr>
      <td
        colSpan="6"
        className="text-center p-8 text-zinc-500 font-semibold"
      >
        No users found.
      </td>
    </tr>
  )}
</tbody>
                </table>

                {users.length === 0 && (
                  <div className="text-center p-8 text-zinc-650 font-semibold">No registered users found in the system.</div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 🚪 ૫. નવો યુઝર ઉમેરવાનું અસલી પોપ-અપ મોડલ */}
        <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
      <footer className="mt-10 border-t border-zinc-800 pt-6">
  <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
    
    <p className="text-zinc-500">
      © 2026 <span className="text-red-600 font-semibold">Netflix Admin Dashboard</span>. All Rights Reserved.
    </p>

    <p className="text-zinc-500">
      Designed & Developed by{" "}
      <span className="text-white font-semibold">
        Janak Parmar
      </span>
    </p>

  </div>
</footer>
    </div>
  );
};

export default DashBord;
