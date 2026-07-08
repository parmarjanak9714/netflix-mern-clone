import React from 'react';
// import: React લાવ્યા જેથી આપણે JSX (HTML જેવો કોડ) લખી શકીએ.

const AdminAction = ({ userId, userStatus, onToggleStatus, onDeleteUser }) => {
// userId: કયા યુઝર પર ક્લિક થયું તેની અસલી MongoDB ID Props તરીકે બહારથી આવશે.
// userStatus: તે યુઝર અત્યારે Active છે કે Deactivated તે લાઈવ સ્ટેટસ.
// onToggleStatus: સ્ટેટસ બદલવા માટેનું મુખ્ય ફંક્શન જે ડેશબોર્ડ પેજમાંથી કનેક્ટ થઈને અહીં આવશે.
// onDeleteUser: યુઝરને ડિલીટ કરવાનું મુખ્ય ફંક્શન જે બહારથી અહીં પાસ થશે.

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* flex space-x-2: બંને બટન્સને આડા એક સરખા અંતરે લાઈનમાં ગોઠવવા માટે */}

      {/* 🟢/🟡 બટન ૧: ACTIVATE / DEACTIVATE BUTTON */}
      <button 
        onClick={() => onToggleStatus(userId, userStatus)}
        className={`text-xs font-bold px-3 py-1.5 rounded transition shadow-sm cursor-pointer ${
          userStatus === 'Active' 
            ? 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20 border border-amber-500/10' 
            : 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 border border-emerald-500/10'
        }`}
      >
        {/* userStatus === 'Active' ? ... : ... -> આ કન્ડિશનલ લોજિક છે. */}
        {/* જો યુઝર પહેલેથી Active હશે, તો બટન પીળા કલરનું 'Deactivate' દેખાશે. */}
        {/* જો યુઝર Deactivated હશે, તો બટન લીલા કલરનું 'Activate' દેખાશે! આ અસલી પ્રોડક્શન લેવલ લુક છે. */}
        {userStatus === 'Active' ? 'Deactivate' : 'Activate'}
      </button>

      {/* 🔴 બટન ૨: DELETE BUTTON */}
      <button 
        onClick={() => onDeleteUser(userId)}
        className="bg-rose-500/10 text-rose-500 hover:bg-rose-500/20 border border-rose-500/10 text-xs font-bold px-3 py-1.5 rounded transition shadow-sm cursor-pointer"
      >
        {/* onClick: બટન દબાવતા જ આ સિંગલ યુઝરની આઈડી બહાર ડેશબોર્ડના ડિલીટ લોજિકમાં રવાના થઈ જશે */}
        Delete
      </button>

    </div>
  );
};

export default AdminAction;
// export default AdminAction: આ એક્શન વાળા નાના બોક્સને બહાર મોકલ્યો જેથી આપણું ડેશબોર્ડ ટેબલ આને વાપરી શકે.
