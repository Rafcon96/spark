import React from "react";
import Timeline from "./Timeline";
import { timelineData } from "../../data/timeline";

const HowDoesItWork: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* First Column/Row - Header and Method */}
          <div className="w-full lg:w-1/2">
            {/* Header H3 - 3 lines, 2 words each */}
            <h3 className="text-h2-mobile lg:text-h2-desktop font-bold cursor-default">
              <div>איך אנחנו</div>
              <div>גורמים לסיפור</div>
              <div>שלכם לעבוד</div>
            </h3>

            {/* Caption with gradient */}
            <div className="text-caption-small bg-gradient-horizontal bg-clip-text text-transparent w-fit mb-8 cursor-default">
              SPARK Method™
            </div>
          </div>

          {/* Second Column/Row - Placeholder Content */}
          <div className="w-full lg:w-1/2">
            <Timeline items={timelineData} />
            {/* <div className="space-y-6">
              <p className="text-body-18 text-gray-700 leading-relaxed">
                השיטה הייחודית שלנו מבוססת על שנים של ניסיון בתחום הסיפור העסקי
                והמיצוב האסטרטגי. אנחנו מאמינים שכל עסק מצליח מתחיל בסיפור
                משכנע.
              </p>

              <p className="text-body-18 text-gray-700 leading-relaxed">
                התהליך שלנו כולל ניתוח מעמיק של החברה, הגדרת המסרים המרכזיים,
                ובניית אסטרטגיית תקשורת המותאמת לקהל היעד.
              </p>

              <p className="text-body-18 text-gray-700 leading-relaxed">
                בסוף התהליך תקבלו כלים מעשיים ומדידים שיעזרו לכם להציג את החברה
                בצורה המשכנעת והמקצועית ביותר לכל סוג של קהל.
              </p>

              <div className="mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-body-20 font-semibold text-gray-900 mb-3">
                    מה תקבלו בסוף התהליך:
                  </h4>
                  <ul className="space-y-2 text-body-16 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>סיפור עסקי מגובש ומשכנע</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>אסטרטגיית מיצוב ברורה</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>כלים מעשיים ליישום</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>הדרכה וליווי מתמשכים</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
