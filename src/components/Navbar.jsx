import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', icon: Home, href: '/' },
    { label: 'About', icon: User, href: '/about' },
    { label: 'Projects', icon: Briefcase, href: '/project' },
    { label: 'Contact', icon: Mail, href: '/contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                Irahoza Daniel
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative group flex items-center space-x-2"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
              >
                Get in touch
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white border-t border-gray-100 px-6 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 py-3 text-gray-600 hover:text-gray-900 transition-colors border-b border-gray-50 last:border-b-0"
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gray-900 text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to ensure content appears below the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;