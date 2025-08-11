import React from "react";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories: React.FC = () => {
  return (
    <div className="w-full section-spacing" dir="rtl">
      <div
        className="container-1200 flex flex-col md:flex-row justify-between  md:px-0 "
        style={{ justifyContent: "space-between" }}
      >
        {/* Header - H2 Responsive, 3 Hebrew words */}
        <div className="w-full lg:w-auto">
          <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-gray-900 mb-4 md:mb-8 cursor-default text-right">
            יוצרים הצלחות
            <br /> עם סיפורים
          </h2>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto items-start text-right">
          {/* First Element - 3 lines Hebrew, body-16, color #535862 */}
          <div className="text-body-16 text-[#535862] leading-relaxed cursor-default max-w-[486px]">
            כאן תמצאו את הרגעים שבהם זה קרה: רעיונות שזוקקו למסר חד. קונספטים
            שהפכו למצגת, לסרטון, לקמפיין. סיפורים שהובילו לתוצאה ברורה – מכירה,
            גיוס, שינוי תפיסה.
          </div>

          {/* Second Element - Caption lg with gradient, 2 lines, 7 words */}
          <div className="text-caption-lg bg-gradient-horizontal bg-clip-text text-transparent leading-relaxed w-fit cursor-default">
            אלו הרגעים הכי חזקים שלנו. <br /> הטופ של הטופ.
          </div>
        </div>
      </div>
      <div className="pt-4 md:pt-24 w-screen">
        <SuccessStoriesCarousel />
      </div>
    </div>
  );
};

export default SuccessStories;
