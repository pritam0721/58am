import React from 'react';
import { Headphones, PhoneCall, Briefcase, Zap } from 'lucide-react';

const Services = ({ brandBgGreen, darkCard }) => (
  <section id="services" className="py-24 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Premium Services</h2>
        <p className="text-zinc-500">Expertise tailored to your business vertical</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Headphones, title: "Inbound Services", desc: "Customer support, technical helpdesk, and inquiry management." },
          { icon: PhoneCall, title: "Outbound Services", desc: "Lead generation, telemarketing, and customer surveys." },
          { icon: Briefcase, title: "Back-Office Services", desc: "Data entry, payroll, and administrative processing." },
          { icon: Zap, title: "Virtual Assistance", desc: "Dedicated resources for executive support and task management." }
        ].map((service, i) => (
          <div key={i} className={`p-8 rounded-3xl border transition-all hover:shadow-xl hover:-translate-y-2 group ${darkCard}`}>
            <div className={`${brandBgGreen} w-14 h-14 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:rotate-6 transition-transform`}>
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
