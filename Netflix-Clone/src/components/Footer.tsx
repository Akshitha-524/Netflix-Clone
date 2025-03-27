
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    'Audio Description',
    'Help Center',
    'Gift Cards',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Legal Notices',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
  ];

  return (
    <footer className="w-full py-12 px-4 sm:px-8 md:px-16 bg-netflix-dark">
      <div className="max-w-6xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-6">
          <a href="#" className="text-netflix-gray hover:text-netflix-light transition-colors duration-300">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-netflix-gray hover:text-netflix-light transition-colors duration-300">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-netflix-gray hover:text-netflix-light transition-colors duration-300">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-netflix-gray hover:text-netflix-light transition-colors duration-300">
            <Youtube size={24} />
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {footerLinks.map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-sm text-netflix-gray hover:text-netflix-light transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="mt-8 border border-netflix-gray text-netflix-gray hover:text-netflix-light text-xs px-2 py-1 transition-colors duration-300">
          Service Code
        </button>

        {/* Copyright */}
        <p className="mt-6 text-xs text-netflix-gray">
          © 1997-{new Date().getFullYear()} Netflix, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
