import React from "react";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

const SuccessStories: React.FC = () => {
  return (
    <div className="w-full pt-12 lg:pt-24">
      <div className="flex flex-col lg:flex-row justify-between px-16 gap-8 lg:gap-0">
        {/* Header - H2 Responsive, 3 Hebrew words */}
        <div className="w-full lg:w-auto">
          <h2 className="text-h2-mobile lg:text-h2-desktop font-bold text-gray-900 mb-6 lg:mb-8 ">
            סיפורי הצלחה
          </h2>
        </div>

        {/* Second Column */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          {/* First Element - 3 lines Hebrew, body-16, color #535862 */}
          <div className="text-body-16 text-[#535862] leading-relaxed">
            <p>
              אנחנו גאים בהצלחות הלקוחות שלנו ובסיפורים המעוררים השראה שהם
              יוצרים יחד איתנו.
            </p>
            <p>
              כל פרויקט הוא הזדמנות חדשה ליצור שינוי משמעותי ולהביא תוצאות
              מדהימות.
            </p>
            <p>
              הצטרפו אלינו למסע של צמיחה, חדשנות והשגת יעדים שחשבתם שהם בלתי
              אפשריים.
            </p>
          </div>

          {/* Second Element - Caption lg with gradient, 2 lines, 7 words */}
          <div className="text-caption-lg bg-gradient-horizontal bg-clip-text text-transparent leading-relaxed w-fit">
            <p>צפו בסיפורים שמשנים חיים</p>
            <p>ומגשימים חלומות עסקיים גדולים</p>
          </div>
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <SuccessStoriesCarousel />
      </div>
    </div>
  );
};

export default SuccessStories;
