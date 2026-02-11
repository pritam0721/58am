import React from 'react';

const Accreditations = ({ brandGreen }) => (
  <section id="accreditations" className="py-24 px-4">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-12">Global <span className={brandGreen}>Compliance</span> & Certifications</h2>
      <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         {['BSI ISO 9001', 'BSI ISO 27001', 'SOC 2', 'GDPR', 'PCI DSS', 'HIPAA', 'ICO'].map((cert) => (
           <div key={cert} className="flex flex-col items-center">
             <div className="w-20 h-20 rounded-full border-4 border-zinc-500 flex items-center justify-center text-[10px] font-black leading-none text-center px-2">
               {cert}
             </div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

export default Accreditations;
