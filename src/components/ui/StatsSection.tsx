import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

interface StatColumn {
  value: number;
  height?: number;
  content: string[];
  width?: number;
}

const StatsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Intersection Observer to detect when component is visible
  useEffect(() => {
    const currentElement = statsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: "200px 0px", // Trigger when 200px of component is visible
        threshold: 0.1,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  // Infinite animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // 4 is the number of stats
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const statsData: StatColumn[] = [
    {
      value: 25,
      height: 220,
      width: 70,
      content: ["שנה של ניסיון משותף"],
    },
    {
      value: 500,
      height: 500,
      width: 90,
      content: ["הרצאות, הדרכות והכשרות "],
    },
    {
      value: 400,
      height: 400,
      width: 85,
      content: ["עיצובי מצגות, אתרים וסושיאל"],
    },
    {
      value: 300,
      height: 300,
      width: 80,
      content: ["תהליכי האסטרטגיה וסטוריטלינג"],
    },
  ];

  return (
    <div
      ref={statsRef}
      className="w-full flex flex-col lg:flex-row lg:items-end items-start justify-start gap-8 lg:gap-12 max-w-7xl mx-auto px-4"
    >
      {/* First Column - Text Content */}
      <div className="flex flex-col text-right lg:w-64 mb-8 lg:mb-0 lg:self-start">
        <h2 className="text-h2-desktop font-bold  mb-4">
          אנחנו <br />
          SPARK.
        </h2>
        <h2 className="text-body-24 font-semibold  mb-4">
          השותפים האסטרטגיים שלכם לסיפורים חדים, מבודלים, שעושים את העבודה.
        </h2>
        <p className="text-body-18 text-gray-500 mb-4">
          חושבים כמו אסטרטגים, כותבים כמו קופירייטרים ומעצבים כמו בימאים.
        </p>
        <p className="text-body-18 text-gray-500">
          נכנסים לעומק של מה שיש לכם ביד, מזקקים את ה- DNA שמייחד אתכם, ובונים
          ממנו סיפור ברור, חד ומשכנע. סיפור שאנשים מבינים, זוכרים, ופועלים
          בעקבותיו.
        </p>
      </div>

      {/* Stats Columns */}
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center lg:items-center max-lg:w-full max-lg:mb-6"
        >
          {/* Graph Column - Vertical on large screens, Horizontal on small screens */}
          <div
            className={`bg-transparent border-2 rounded-xl 
                       lg:w-[120px] lg:xl:w-[160px] lg:flex-col lg:justify-between
                       max-lg:w-full max-lg:flex max-lg:flex-row max-lg:items-baseline max-lg:justify-between
                       flex p-6 mb-4 relative cursor-pointer
                       transition-all duration-300 ease-in-out 
                       hover:shadow-xl hover:shadow-gray-300/50 hover:border-gray-300 hover:scale-105 hover:z-10
                       ${
                         index === activeIndex
                           ? "shadow-xl shadow-gray-300/50 border-gray-300 scale-101 z-10"
                           : "border-[#E9EAEB]"
                       }`}
            style={
              isMobile
                ? {
                    height: "80px",
                    alignSelf: "flex-start",
                    paddingLeft: "0px",
                    paddingRight: "2px",
                    justifySelf: "flex-start",
                    width: `${stat.width}%`,
                  }
                : {
                    height: `${stat.height}px`,
                  }
            }
          >
            {/* Content - appears first on mobile, second on desktop */}
            <div className="text-center lg:text-center max-lg:text-left lg:order-2 max-lg:order-1">
              {stat.content.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="lg:text-body-18 text-gray-600  text-xs text-right pr-2 align-start"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Value - appears last on mobile, first on desktop */}
            <div className="text-center lg:text-center max-lg:text-right lg:order-1 max-lg:order-2 px-2">
              <span className="text-h3-responsive font-bold text-gray-900">
                {isVisible ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    suffix="+"
                    duration={4}
                    separator=","
                  />
                ) : (
                  <span>0</span>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
