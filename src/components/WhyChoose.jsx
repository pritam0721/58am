import React from 'react';
import { Users, CheckCircle } from 'lucide-react';

const WhyChoose = ({ brandGreen, darkMode }) => (
  <section id="why-us" className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
          <div className={`absolute -inset-4 ${brandGreen.replace('text', 'bg')} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity`}></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-800 aspect-[4/3] flex items-center justify-center">
             <div className="text-center p-8">
                <Users size={64} className={brandGreen + " mx-auto mb-4"} />
                <p className="text-zinc-400">Team Interaction Photo</p>
             </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-6">Why Choose <span className={brandGreen}>58AM</span>?</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mb-8 text-lg">
            We bridge the gap between global expectations and local expertise. Our delivery centers in Kolkata and Noida provide the perfect blend of talent and infrastructure.
          </p>
          <div className="space-y-4">
            {[
              "ISO 9001, 27001 & 27701 Certified",
              "AICPA SOC - Type II Audited Services",
              "PCI DSS Compliant Infrastructure",
              "Demographic Advantage of Skilled Manpower",
              "Highly Secured IT Infrastructure"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white dark:hover:bg-zinc-900 transition-all cursor-default group">
                <div className={`${brandGreen.replace('text', 'bg')} p-1 rounded-full text-black group-hover:scale-110 transition-transform`}>
                  <CheckCircle size={18} />
                </div>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
