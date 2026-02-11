import React from 'react';
import { FileText, Shield, Lock, Database, Server, Key, BarChart, Clock } from 'lucide-react';

const SecurityFeatures = ({ darkMode }) => (
  <section className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">Security & <br/><span className="text-[#00FF00]">Data Privacy</span> Measures</h2>
        </div>
        <div className="max-w-md text-zinc-500">
          We adhere to the most stringent data security protocols to ensure your sensitive business information remains protected.
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: FileText, title: "No Pen-Paper Policy", color: "text-orange-500" },
          { icon: Shield, title: "Biometric Access", color: "text-blue-500" },
          { icon: Lock, title: "IP Locked Servers", color: "text-emerald-500" },
          { icon: Database, title: "Encrypted Storage", color: "text-yellow-500" },
          { icon: Server, title: "Firewall Security", color: "text-indigo-500" },
          { icon: Key, title: "Access Controls", color: "text-purple-500" },
          { icon: BarChart, title: "Data Auditing", color: "text-cyan-500" },
          { icon: Clock, title: "Regular Backup", color: "text-rose-500" },
        ].map((item, i) => (
          <div key={i} className={`p-6 rounded-2xl border bg-white dark:bg-black flex flex-col items-center text-center transition-all hover:border-green-500/50 ${darkMode ? 'border-zinc-800' : 'border-slate-200'}`}>
            <div className={`${item.color} mb-4`}>
              <item.icon size={32} />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SecurityFeatures;
