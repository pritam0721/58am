import React from 'react';
import { PhoneCall, FileText } from 'lucide-react';

const FloatingCTA = ({ brandBgGreen }) => (
  <>
    <a 
      href="https://wa.me/" 
      target="_blank" 
      className="fixed bottom-8 left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      rel="noreferrer"
    >
      <PhoneCall size={24} />
    </a>

    <button className={`fixed bottom-8 right-8 ${brandBgGreen} text-black px-6 py-3 rounded-full font-bold shadow-2xl hover:translate-y-[-4px] transition-all z-50 flex items-center space-x-2`}>
      <FileText size={18} />
      <span className="hidden sm:inline">Download Brochure</span>
    </button>
  </>
);

export default FloatingCTA;
