import React from 'react';
import { Globe, Mail, PhoneCall, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer = ({ darkMode, brandGreen }) => (
  <footer className={`pt-20 pb-10 border-t ${darkMode ? 'bg-black border-zinc-800' : 'bg-white border-slate-200'}`}>
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center mb-6">
          <Logo darkMode={darkMode} />
        </div>
        <p className="text-zinc-500 text-sm leading-relaxed mb-6">
          58AM Marketing St. is a premier international BPO providing direct access to top-tier talent in India.
        </p>
        <div className="flex space-x-4">
          <div className={`p-2 rounded-lg border border-slate-300 dark:border-zinc-800 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-zinc-900`}><Globe size={18} /></div>
          <div className={`p-2 rounded-lg border border-slate-300 dark:border-zinc-800 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-zinc-900`}><Mail size={18} /></div>
          <div className={`p-2 rounded-lg border border-slate-300 dark:border-zinc-800 cursor-pointer transition-colors hover:bg-slate-100 dark:hover:bg-zinc-900`}><PhoneCall size={18} /></div>
        </div>
      </div>

      <div>
        <h4 className="font-bold mb-6">Useful Links</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-green-500">About Us</a></li>
          <li><a href="#" className="hover:text-green-500">Our Industries</a></li>
          <li><a href="#" className="hover:text-green-500">Careers</a></li>
          <li><a href="#" className="hover:text-green-500">Blog & Events</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Our Services</h4>
        <ul className="space-y-3 text-sm text-zinc-500">
          <li><a href="#" className="hover:text-green-500">Inbound Support</a></li>
          <li><a href="#" className="hover:text-green-500">Outbound Marketing</a></li>
          <li><a href="#" className="hover:text-green-500">Back Office</a></li>
          <li><a href="#" className="hover:text-green-500">Virtual Assistance</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Our Locations</h4>
        <div className="space-y-4 text-sm text-zinc-500">
          <div className="flex items-start space-x-3">
            <MapPin size={16} className={brandGreen} />
            <span>Kolkata, India (HQ)</span>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin size={16} className={brandGreen} />
            <span>Noida, India</span>
          </div>
          <div className="flex items-start space-x-3">
            <MapPin size={16} className={brandGreen} />
            <span>USA, UK, Australia (Sales)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:row justify-between items-center text-xs text-zinc-500 space-y-4 md:space-y-0">
      <p>© 2026 58AM Marketing Street. All rights reserved.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms of Use</a>
        <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Sitemap</a>
      </div>
    </div>
  </footer>
);

export default Footer;
