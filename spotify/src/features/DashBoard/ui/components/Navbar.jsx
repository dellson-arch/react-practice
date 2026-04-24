import React, { useState } from 'react';
import { Search, Bell, User, Menu, Disc3 } from 'lucide-react';

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-md border-b border-white/10 px-4 flex items-center justify-between z-50">
      
      {/* Brand Section */}
      <div className="flex items-center gap-2 min-w-[150px]">
        <Disc3 className="text-green-500 animate-spin-slow" size={32} />
        <span className="text-white font-bold text-xl tracking-tight hidden md:block">
          VibeStream
        </span>
      </div>

      {/* Center Search Section */}
      <div className="flex-1 max-w-xl px-4">
        <div className={`relative flex items-center transition-all duration-300 ${isFocused ? 'scale-105' : 'scale-100'}`}>
          <Search 
            className={`absolute left-3 transition-colors ${isFocused ? 'text-white' : 'text-gray-400'}`} 
            size={18} 
          />
          <input
            type="text"
            placeholder="Search for songs, artists, or albums"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-[#242424] text-sm text-white placeholder-gray-400 py-2.5 pl-10 pr-4 rounded-full border border-transparent focus:outline-none focus:bg-[#2a2a2a] focus:border-gray-500 transition-all"
          />
        </div>
      </div>

      {/* Right Actions Section */}
      <div className="flex items-center gap-4 min-w-[150px] justify-end">
        <button className="hidden sm:block text-sm font-bold text-black bg-white px-5 py-2 rounded-full hover:scale-105 transition-transform">
          Explore Premium
        </button>
        
        <button className="text-gray-400 hover:text-white transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-black"></span>
        </button>

        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
          <User size={18} className="text-white" />
        </div>

        <button className="md:hidden text-white">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;