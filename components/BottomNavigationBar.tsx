import React from 'react';

const BottomNavigationBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around z-50"> {/* z-50 biztosítja, hogy felül legyen */}
      {/* Placeholder ikonoknak/linkeknek */}
      <div className="text-center cursor-pointer">
        {/* Később ide jöhet egy ikon komponens */}
        <span className="block text-xs">Feed</span>
      </div>
      <div className="text-center cursor-pointer">
        <span className="block text-xs">Keresés</span>
      </div>
      <div className="text-center cursor-pointer">
        <span className="block text-xs">Feltöltés</span>
      </div>
      <div className="text-center cursor-pointer">
        <span className="block text-xs">Profil</span>
      </div>
    </nav>
  );
};

export default BottomNavigationBar;