import React, { useState } from "react";

interface AccordionProps {
  icon?: string;
  heading: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  icon = "/wellcom-icon1.svg",
  heading,
  content,
  isOpen: controlledIsOpen,
  onToggle,
  defaultOpen = false,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(defaultOpen);

  // Use controlled state if provided, otherwise use internal state
  const isOpen =
    controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const toggleAccordion = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <div
      className={`w-full rounded-lg overflow-hidden mb-4 transition-all duration-300 ${
        isOpen
          ? "bg-gradient-horizontal p-[2px] relative z-10 transform translate-y-[-2px]"
          : "border border-gray-200 relative z-0"
      }`}
      style={
        isOpen
          ? {
              filter:
                "drop-shadow(0 12px 24px #12C2E91F) drop-shadow(0 12px 24px #F7797D1F)",
            }
          : {}
      }
    >
      <div className={isOpen ? "bg-white rounded-lg" : ""}>
        {/* Accordion Header */}
        <div
          className={`w-full h-[78px] bg-white flex items-center justify-between px-2 lg:px-16 cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
            isOpen ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={toggleAccordion}
        >
          {/* Left side: Icon + Heading */}
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0">
              <img src={icon} alt="Accordion icon" className="w-8 h-8" />
            </div>

            {/* Heading */}
            <div className="text-body-24 font-semibold text-gray-900">
              {heading}
            </div>
          </div>

          {/* Right side: Open/Close Icon */}
          <div className="flex-shrink-0">
            <div className="border border-gray-300 rounded-xl p-1">
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className=" bg-gray-50 border-t border-gray-200 rounded-b-lg">
            <div className="text-body-18 text-gray-700 leading-relaxed">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
