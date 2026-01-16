
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToHero = () => {
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    if(isOpen) setIsOpen(false);
  }

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-[1000] shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        <div 
          className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          y<span className="text-[#0066cc]">Lamda</span>
        </div>

        <ul className="hidden md:flex gap-8 items-center list-none">
          <li><a href="#benefits" className="text-gray-600 hover:text-[#0066cc] transition-colors font-semibold text-sm">Benefits</a></li>
          <li><a href="#process" className="text-gray-600 hover:text-[#0066cc] transition-colors font-semibold text-sm">Our Process</a></li>
          <li><a href="#faq" className="text-gray-600 hover:text-[#0066cc] transition-colors font-semibold text-sm">FAQ</a></li>
          <li>
            <button 
              onClick={scrollToHero}
              className="bg-[#0066cc] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:bg-[#0052a3] active:scale-95"
            >
              Get My Free Audit
            </button>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-gray-900 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 flex flex-col p-6 gap-4 z-[999] md:hidden shadow-xl">
            <a href="#benefits" onClick={toggleMenu} className="text-gray-900 py-3 border-b border-gray-50 font-medium">Benefits</a>
            <a href="#process" onClick={toggleMenu} className="text-gray-900 py-3 border-b border-gray-50 font-medium">Our Process</a>
            <a href="#faq" onClick={toggleMenu} className="text-gray-900 py-3 border-b border-gray-50 font-medium">FAQ</a>
            <button 
              onClick={scrollToHero}
              className="bg-[#0066cc] text-white py-3 rounded-xl font-bold text-center shadow-lg active:scale-95"
            >
              Get Free Audit
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
