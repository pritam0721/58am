import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Shield, Clock, Users, Globe, PhoneCall, 
  BarChart, Zap, CheckCircle, Mail, MapPin, ExternalLink,
  Lock, Key, Server, Database, Menu, X, ArrowRight,
  Headphones, Globe2, Briefcase, FileText
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Brand Colors
  const brandGreen = "text-[#00FF00]";
  const brandBgGreen = "bg-[#00FF00]";
  const darkCard = "dark:bg-zinc-900/50 dark:border-zinc-800";

  // Reusable Logo Component to ensure consistency
  const Logo = ({ className = "" }) => (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <div className="flex items-baseline font-black tracking-tighter text-4xl">
        <span className={darkMode ? 'text-white' : 'text-[#333333]'}>58</span>
        <span className={brandGreen}>A</span>
        <span className={darkMode ? 'text-white' : 'text-[#333333]'}>M</span>
      </div>
      <div className={`text-[9px] uppercase tracking-[0.3em] font-medium mt-1 ${darkMode ? 'text-zinc-400' : 'text-[#333333]'}`}>
        — Marketing St —
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-slate-50 text-zinc-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-black/80 border-zinc-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Real Logo Implementation */}
            <div className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
              <Logo />
            </div>

            {/* Desktop Menu */}
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

            {/* Mobile Toggle */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden p-4 space-y-4 border-t ${darkMode ? 'bg-black border-zinc-800' : 'bg-white border-slate-200'}`}>
            <a href="#services" className="block py-2 text-lg">Services</a>
            <a href="#why-us" className="block py-2 text-lg">Why Us</a>
            <a href="#accreditations" className="block py-2 text-lg">Accreditations</a>
            <button className={`${brandBgGreen} text-black w-full py-3 rounded-xl font-bold`}>Contact Us</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-full mb-8 border dark:border-zinc-800">
            <span className={`w-2 h-2 rounded-full ${brandBgGreen} animate-pulse`}></span>
            <span className="text-sm font-medium">Available for Offshore Direct Access</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
            Build Your <span className={brandGreen}>Offshore Captive Team</span><br/>With Direct Access
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
            Scale your business with dedicated professionals in India. 70% cost reduction, 100% operational transparency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className={`${brandBgGreen} text-black px-10 py-4 rounded-full font-bold text-lg flex items-center group`}>
              Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 rounded-full font-bold text-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              View Case Studies
            </button>
          </div>
          
          {/* Floating Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t dark:border-zinc-800 pt-12">
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

      {/* Why Choose Us - Image & Features Section */}
      <section id="why-us" className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className={`absolute -inset-4 ${brandBgGreen} opacity-10 rounded-3xl blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-zinc-800 aspect-[4/3] flex items-center justify-center">
                 {/* Modern Image Placeholder */}
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
                    <div className={`${brandBgGreen} p-1 rounded-full text-black group-hover:scale-110 transition-transform`}>
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

      {/* Services Section - Grid Layout */}
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

      {/* Security Features - Grid with Icons */}
      <section className={`py-24 ${darkMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">Security & <br/><span className={brandGreen}>Data Privacy</span> Measures</h2>
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

      {/* Accreditations */}
      <section id="accreditations" className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Global <span className={brandGreen}>Compliance</span> & Certifications</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Mock Certification Badges */}
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

      {/* Footer */}
      <footer className={`pt-20 pb-10 border-t ${darkMode ? 'bg-black border-zinc-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Logo />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              58AM Marketing St. is a premier international BPO providing direct access to top-tier talent in India.
            </p>
            <div className="flex space-x-4">
              <div className={`p-2 rounded-lg border dark:border-zinc-800 hover:${brandGreen} cursor-pointer transition-colors`}><Globe size={18} /></div>
              <div className={`p-2 rounded-lg border dark:border-zinc-800 hover:${brandGreen} cursor-pointer transition-colors`}><Mail size={18} /></div>
              <div className={`p-2 rounded-lg border dark:border-zinc-800 hover:${brandGreen} cursor-pointer transition-colors`}><PhoneCall size={18} /></div>
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
        
        <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-zinc-800 flex flex-col md:row justify-between items-center text-xs text-zinc-500 space-y-4 md:space-y-0">
          <p>© 2026 58AM Marketing Street. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href="https://wa.me/" 
        target="_blank" 
        className="fixed bottom-8 left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
      >
        <PhoneCall size={24} />
      </a>

      <button className={`fixed bottom-8 right-8 ${brandBgGreen} text-black px-6 py-3 rounded-full font-bold shadow-2xl hover:translate-y-[-4px] transition-all z-50 flex items-center space-x-2`}>
        <FileText size={18} />
        <span className="hidden sm:inline">Download Brochure</span>
      </button>

    </div>
  );
};

export default App;