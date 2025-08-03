import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };
  return (
    <header
      className="w-full bg-black shadow-sm  sticky top-0 z-150 "
      dir="rtl"
    >
      <div className="custom-container flex justify-self-center caret-transparent">
        <div className="flex justify-between items-center h-16 w-full ">
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex w-1/3 justify-self-start gap-6 text-body-14 text-white cursor-pointer">
            <a
              onClick={() => jumpToSection("about")}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              אודות
            </a>
            <a
              onClick={() => jumpToSection("capabilities")}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              יכולות
            </a>
            <a
              onClick={() => jumpToSection("works")}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              עבודות
            </a>
            <a
              onClick={() => jumpToSection("process")}
              className="cursor-pointer hover:text-gray-300 transition-colors"
            >
              תהליך
            </a>
          </nav>
          <div className="md:hidden flex items-center gap-4 justify-between w-full">
            <div className="flex-shrink-0 justify-self-start flex items-center gap-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white hover:text-gray-300 p-2"
              >
                <img src={"./hamburgerMenu.svg"} alt="logo" />
              </button>
              <div className="flex-shrink-0 ">
                <img src={"./spark-header.svg"} alt="logo" />
              </div>
            </div>
            <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
              <button
                onClick={() => jumpToSection("contact")}
                className="bg-black text-white text-body-18 font-bold px-2 py-1 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                בואו נדבר
              </button>
            </div>
          </div>
          {/* Logo */}
          <div className="flex-shrink-0 hidden md:flex w-1/3 justify-self-center">
            <img src={"./spark-header.svg"} alt="logo" />
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            {/* <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
              <button
                onClick={() => jumpToSection("contact")}
                className="bg-black text-white text-body-24 font-bold px-2 py-1 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                בואו נדבר
              </button>
            </div> */}
            <button
              className="btn-gradient-sm"
              onClick={() => jumpToSection("contact")}
            >
              בואו נדבר
            </button>
          </div>

          {/* Mobile menu button */}
        </div>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="relative bg-black text-white h-full flex flex-col items-center justify-center px-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-2"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col items-center space-y-8 mb-12">
              <button
                onClick={() => jumpToSection("about")}
                className="text-white hover:text-gray-300 text-body-24 font-medium transition-colors"
              >
                אודות
              </button>
              <button
                onClick={() => jumpToSection("capabilities")}
                className="text-white hover:text-gray-300 text-body-24 font-medium transition-colors"
              >
                יכולות
              </button>
              <button
                onClick={() => jumpToSection("works")}
                className="text-white hover:text-gray-300 text-body-24 font-medium transition-colors"
              >
                עבודות
              </button>
              <button
                onClick={() => jumpToSection("process")}
                className="text-white hover:text-gray-300 text-body-24 font-medium transition-colors"
              >
                תהליך
              </button>
            </nav>

            {/* Spark Logo */}
            <div className="mb-12">
              <img src="/spark.svg" alt="Spark Logo" className="h-16 w-auto" />
            </div>

            {/* CTA Button */}
            {/* <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
              <button
                onClick={() => jumpToSection("contact")}
                className="bg-black text-white text-body-24 font-bold px-8 py-3 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
              >
                בואו נדבר
              </button>
            </div> */}
            <button
              className="btn-gradient-sm"
              onClick={() => jumpToSection("contact")}
            >
              בואו נדבר
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
