import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

// Interface no longer needed after refactor to tailwind-only responsive logic

const StatsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const statsRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when component is visible

  // Auto-rotate active card every 2s, pause on hover
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // From Figma desktop (250:5785) and mobile (350:1859)
  // Desktop order: 300, 400, 500, 25 with heights 300, 400, 500, 160
  // Mobile widths: 300→276px, 400→326px, 500→fill, 25→202px
  const statsData = [
    {
      value: 25,
      height: 160,
      mobileWidthClass: "w-[60%]",
      content: ["שנה של ניסיון", "משותף"],
    },
    {
      value: 500,
      height: 500,
      mobileWidthClass: "w-[90%]",
      content: ["הרצאות, הדרכות", "והכשרות"],
    },
    {
      value: 400,
      height: 400,
      mobileWidthClass: "w-[88%]",
      content: ["עיצובי מצגות,", "אתרים וסושיאל"],
    },
    {
      value: 300,
      height: 300,
      mobileWidthClass: "w-[75%]",
      content: ["תהליכי האסטרטגיה", "וסטוריטלינג"],
    },
  ] as const;

  const desktopHeightClassByIndex = [
    "xl:h-[160px]",
    "xl:h-[500px]",
    "xl:h-[400px]",
    "xl:h-[300px]",
  ];

  return (
    <div
      ref={statsRef}
      dir="rtl"
      className="flex flex-col xl:flex-row xl:items-end items-start justify-start gap-2 xl:gap-6 container-1200"
    >
      {/* First Column - Text Content */}
      <div className="flex shrink-0 flex-col h-full self-end text-right  mb-8 xl:mb-0  xl:w-[383px] w-full gap-3 text-black">
        <h2 className="text-h2-desktop font-bold">
          אנחנו <br />
          .SPARK
        </h2>
        <h2 className="text-body-24 font-semibold  ">
          השותפים האסטרטגיים שלכם לסיפורים חדים, מבודלים, שעושים את העבודה.
        </h2>
        <p className="text-body-18 text-gray-600 ">
          חושבים כמו אסטרטגים,
          <br /> כותבים כמו קופירייטרים <br />
          ומעצבים כמו בימאים.
        </p>
        <p className="text-body-18 text-gray-600">
          אנחנו צוללים לעומק הרעיון שלכם, מזקקים את ה-DNA שמייחד אתכם, ובונים
          ממנו סיפור ברור, חד ומשכנע. סיפור שאנשים מבינים מיד, זוכרים לאורך זמן,
          ופועלים בעקבותיו.
        </p>
      </div>

      {/* Stats Columns */}
      {statsData.map((stat, index) => {
        const isActive = index === activeIndex;
        const wrapperClass = [
          "relative rounded-xl transition-all duration-700 ease-in",
          isActive
            ? "scale-101 z-10 p-[1px] bg-[linear-gradient(90deg,#F7797D_0%,#C471ED_52.08%,#12C2E9_100%)] shadow-[32px_48px_32px_rgba(18,194,233,0.12),-32px_12px_32px_rgba(247,121,125,0.12),0_24px_32px_rgba(196,113,237,0.12),0_32px_32px_rgba(196,113,237,0.12)] border-0"
            : "border border-[#E9EAEB]",
        ].join(" ");

        return (
          <div key={index} className="flex flex-col w-full">
            <div
              className={`${wrapperClass} ${stat.mobileWidthClass} xl:w-[188px] h-20 ${desktopHeightClassByIndex[index]}`}
              onMouseEnter={() => {
                setActiveIndex(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Inner card content */}
              <div className="rounded-xl  bg-white flex flex-row xl:flex-col items-end xl:items-start justify-between h-full w-full px-4 py-4 xl:px-6 xl:py-6">
                {/* Content - appears last on desktop */}
                <div className="text-right xl:text-right xl:order-2 order-1">
                  {stat.content.map((line: string, lineIndex: number) => (
                    <p
                      key={lineIndex}
                      className="text-xs xl:text-body-18 text-gray-600"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                {/* Value - first on desktop */}
                <div className="text-right xl:text-right xl:order-1 order-2">
                  <span className="text-h3-mobile xl:text-h3-desktop font-normal text-gray-900">
                    <CountUp
                      start={0}
                      delay={0.2}
                      end={stat.value}
                      suffix="+"
                      duration={3}
                      separator=","
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsSection;
