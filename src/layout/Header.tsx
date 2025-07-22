import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Spark</h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
