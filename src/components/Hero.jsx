import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ brandGreen, brandBgGreen, darkMode }) => {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/*this not working in light mode  */}

        <div
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 border
    ${darkMode
              ? 'bg-zinc-900 border-zinc-800'
              : 'bg-zinc-100 border-slate-400'
            }`}
        >

         <span className={`w-2 h-2 rounded-full ${brandBgGreen} animate-pulse`}></span>
          <span className="text-sm font-medium">Available for Offshore Direct Access</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
          Build Your <span className={brandGreen}>Offshore Captive Team</span><br />With Direct Access
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
          Scale your business with dedicated professionals in India. 70% cost reduction, 100% operational transparency.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className={`${brandBgGreen} text-black px-10 py-4 rounded-full font-bold text-lg flex items-center group`}>
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className={`px-10 py-4 rounded-full font-bold text-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 ${darkMode? ``:``}`}>
            View Case Studies
          </button>
        </div>
{/*  dark:hover:bg-zinc-900 transition-colors*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-slate-200 dark:border-zinc-800 pt-12">
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tighter">70%</div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">Cost Savings</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tighter">500+</div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">Skilled Experts</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tighter">24/7</div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1 tracking-tighter">ISO</div>
            <div className="text-zinc-500 text-sm uppercase tracking-wider">Certified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
