import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import SecurityFeatures from './components/SecurityFeatures';
import Accreditations from './components/Accreditations';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const brandGreen = "text-[#00FF00]";
  const brandBgGreen = "bg-[#00FF00]";
  const darkCard = "dark:bg-zinc-900/50 dark:border-zinc-800";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-slate-50 text-zinc-900'}`}>
      <Nav darkMode={darkMode} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} brandBgGreen={brandBgGreen} />
      <Hero brandGreen={brandGreen} brandBgGreen={brandBgGreen} darkMode=
      {darkMode} />
      <WhyChoose brandGreen={brandGreen} darkMode={darkMode} />
      <Services brandBgGreen={brandBgGreen} darkCard={darkCard} />
      <SecurityFeatures darkMode={darkMode} />
      <Accreditations brandGreen={brandGreen} />
      <Footer darkMode={darkMode} brandGreen={brandGreen} />
      <FloatingCTA brandBgGreen={brandBgGreen} />
    </div>
  );
};

export default App;