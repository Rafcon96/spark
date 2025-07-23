import React, { useEffect, useRef, useState } from "react";
import type { TimelineItem } from "../../data/timeline";

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      const newVisibleItems: number[] = [];

      items.forEach((item) => {
        const itemPosition = timelineTop + (item.id - 1) * 200; // Approximate spacing
        if (scrollPosition >= itemPosition) {
          newVisibleItems.push(item.id);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="w-full py-12 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline Container */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div
            className="absolute right-8 top-8 w-1 bg-gray-300"
            style={{ height: `calc(100% - 2rem)` }}
          >
            <div
              className="w-full bg-gradient-to-b from-[#12C2E9] to-[#F7797D] transition-all duration-1000 ease-out"
              style={{
                height: `${(visibleItems.length / items.length) * 100}%`,
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-12">
            {items.map((item) => (
              <div
                key={item.id}
                className={`relative flex items-start gap-8 lg:gap-12 transition-all duration-700 ${
                  visibleItems.includes(item.id)
                    ? "opacity-100 translate-y-0"
                    : "opacity-30 translate-y-4"
                }`}
              >
                {/* Timeline Point */}
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-16 h-16 rounded-full border-2 border-white bg-white flex items-center justify-center font-bold text-xl text-gray-800 transition-all duration-500 ${
                      visibleItems.includes(item.id) ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      filter: visibleItems.includes(item.id)
                        ? "drop-shadow(0 6px 12px #12C2E950) drop-shadow(0 6px 12px #F7797D50) drop-shadow(0 2px 8px rgba(0,0,0,0.15))"
                        : "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                    }}
                  >
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  {/* Heading */}
                  <h3 className="text-body-24 font-bold text-gray-900 mb-4 cursor-default">
                    {item.heading}
                  </h3>

                  {/* Body Text */}
                  <div className="text-body-18 text-[#535862] leading-relaxed cursor-default">
                    {item.content.split("\n").map((line, lineIndex) => {
                      // Check if line contains emphasis markers
                      if (line.includes("**") && line.includes("**")) {
                        const parts = line.split("**");
                        return (
                          <p key={lineIndex} className="mb-2 last:mb-0">
                            {parts.map((part, partIndex) =>
                              partIndex % 2 === 1 ? (
                                <span
                                  key={partIndex}
                                  className="text-transparent bg-gradient-horizontal bg-clip-text font-bold text-xl cursor-default"
                                >
                                  {part}
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        );
                      }
                      return (
                        <p key={lineIndex} className="mb-2 last:mb-0">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
