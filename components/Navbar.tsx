
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (targetId: string) => {
    // If we're on a different page, navigate home first
    onNavigate('home');
    
    // Close mobile menu if open
    if (isOpen) setIsOpen(false);

    // Short timeout to ensure the home view components are mounted before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToHero = () => {
    onNavigate('home');
    setTimeout(() => {
      document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    if(isOpen) setIsOpen(false);
  }

  const navLinks = [
    { label: 'Benefits', id: 'features' },
    { label: 'Impact', id: 'benefits' },
    { label: 'Solutions', id: 'services' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-[1000] shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 md:px-6">
        <div 
          className="text-2xl font-bold text-gray-900 tracking-tight cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          y<span className="text-[#0066cc]">Lamda</span>
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-8 items-center list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button 
                onClick={() => handleNavClick(link.id)} 
                className="text-gray-600 hover:text-[#0066cc] transition-colors font-semibold text-sm focus:outline-none"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={scrollToHero}
              className="bg-[#0066cc] text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-[0_4px_14px_0_rgba(0,102,204,0.39)] hover:shadow-[0_6px_20px_rgba(0,102,204,0.23)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
            >
              Get Free Audit
            </button>
          </li>
        </ul>

        <button onClick={toggleMenu} className="md:hidden text-gray-900 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 flex flex-col p-6 gap-2 z-[999] md:hidden shadow-xl">
            {navLinks.map((link) => (
              <button 
                key={link.label} 
                onClick={() => handleNavClick(link.id)} 
                className="text-gray-900 py-3 border-b border-gray-50 font-medium text-left focus:outline-none"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={scrollToHero}
              className="bg-[#0066cc] text-white py-4 mt-4 rounded-xl font-bold text-center shadow-lg shadow-blue-100 active:scale-95"
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
