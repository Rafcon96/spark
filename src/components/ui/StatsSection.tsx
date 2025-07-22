import React, { useState, useEffect } from "react";

interface StatColumn {
  value: string;
  height: number;
  content: string[];
}

const StatsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
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
      value: "25+",
      height: 160,
      content: ["פרויקטים מוצלחים"],
    },
    {
      value: "500+",
      height: 500,
      content: ["לקוחות מרוצים"],
    },
    {
      value: "400+",
      height: 400,
      content: ["סיפורי הצלחה"],
    },
    {
      value: "300+",
      height: 300,
      content: ["המלצות חמות"],
    },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-end items-start justify-start gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
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
                           ? "shadow-xl shadow-gray-300/50 border-gray-300 scale-105 z-10"
                           : "border-[#E9EAEB]"
                       }`}
            style={
              isMobile
                ? {
                    height: "80px",
                    alignSelf: "baseline",
                    width: `${Math.min(90, (stat.height / 500) * 100)}%`,
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
                  className="text-sm text-gray-600 leading-tight max-lg:text-xs"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Value - appears last on mobile, first on desktop */}
            <div className="text-center lg:text-center max-lg:text-right lg:order-1 max-lg:order-2">
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
