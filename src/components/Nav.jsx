import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Nav = ({ darkMode, toggleTheme, isMenuOpen, setIsMenuOpen, brandBgGreen }) => {
  return (
    <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <Logo darkMode={darkMode} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-green-500 transition-colors font-medium">Services</a>
            <a href="#why-us" className="hover:text-green-500 transition-colors font-medium">Why Us</a>
            <a href="#accreditations" className="hover:text-green-500 transition-colors font-medium">Accreditations</a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${brandBgGreen} text-black px-6 py-2.5 rounded-full font-bold hover:brightness-90 transition-all`}>
              Contact Us
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`md:hidden p-4 space-y-4 border-t ${darkMode ? 'bg-black border-zinc-800' : 'bg-white border-slate-200'}`}>
          <a href="#services" className="block py-2 text-lg">Services</a>
          <a href="#why-us" className="block py-2 text-lg">Why Us</a>
          <a href="#accreditations" className="block py-2 text-lg">Accreditations</a>
          <button className={`${brandBgGreen} text-black w-full py-3 rounded-xl font-bold`}>Contact Us</button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
