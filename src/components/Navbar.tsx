import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center p-2 rounded-lg">
              <div className="h-10 w-full flex items-center justify-center">
                <img 
                  src="/logo.svg"
                  className="h-10 w-auto block dark:hidden"
                  alt="Rivendell Tech"
                />
                <img 
                  src="/logo-white.svg"
                  className="h-16 w-auto hidden dark:block"
                  alt="Rivendell Tech"
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              About
            </Link>
            <Link to="/services" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Services
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 