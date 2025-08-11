import React, { useState } from "react";
import Accordion from "./Accordion";
import Button from "./Button";

const Services: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number>(0); // First accordion open by default

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-1200 bg-[#FAFAFA] ">
      <div className="container-custom w-full md:w-[792px] section-spacing">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Responsive H2 Heading */}
          <h2 className="text-h2-responsive font-bold text-gray-900 mb-8 cursor-default">
            השירותים שלנו
          </h2>

          {/* Body Text - 2 lines, 4 words each */}
          <div className="text-body-24 text-gray-600 max-w-2xl cursor-default">
            <p className="mb-2">פתרונות יצירתיים מותאמים אישית</p>
            <p>לכל צורך עסקי</p>
          </div>
        </div>

        {/* Accordions Section */}
        <div className="h-full mx-auto mt-16">
          <Accordion
            icon="/wellcom-icon1.svg"
            heading="אסטרטגיה"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    כל סיפור טוב מתחיל בדיוק. מה מניע אתכם, מה מבדל אתכם, ומה
                    באמת חשוב. מכאן יוצאים לדרך עם מסר ברור, כיוון חד, ותוכנית
                    שעובדת.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        זיקוק הערך המבדל וה-DNA הייחודי
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        אפיון קהלים, פרסונות ויעדים תקשורתיים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיפוי שפה בשוק וגיבוש טון קול
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיצוב חד ובניית מסרים מותאמים
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-1.png"
                    alt="אסטרטגיה"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 0}
            onToggle={() => handleAccordionToggle(0)}
          />

          <Accordion
            icon="/wellcom-icon2.svg"
            heading="סטוריטלינג"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    סיפור טוב הוא המנוע. כשהרעיון חד, הערך ברור, והכיוון מדויק -
                    סיפור טוב מחבר הכול לנרטיב שאי אפשר להתעלם ממנו.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        זיקוק הערך המבדל וה-DNA הייחודי
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        אפיון קהלים, פרסונות ויעדים תקשורתיים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיפוי שפה בשוק וגיבוש טון קול
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיצוב חד ובניית מסרים מותאמים
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-2.png"
                    alt="סטוריטלינג"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 1}
            onToggle={() => handleAccordionToggle(1)}
          />

          <Accordion
            icon="/wellcome-icon3.svg"
            heading="כתיבת תוכן"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    מילים שבונות תנועה. כשהן נכתבות נכון, הן מובילות להחלטות.
                    אנחנו כותבים כדי להניע קהל לפעולה.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        תוכן שיווקי לאתרים ודפי נחיתה
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        כתיבת הרצאות / סדנאות / נאומים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        תסריטים לסרטוני שיווק
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מסרים פנים-ארגוניים
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-3.png"
                    alt="כתיבת תוכן"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 2}
            onToggle={() => handleAccordionToggle(2)}
          />

          <Accordion
            icon="/wellcom-icon1.svg"
            heading="עיצוב ומיתוג"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    אנחנו בונים נכסים. אתרים שמספרים סיפור ברור, עיצוב שמחזק את
                    המותג, ותוכן יצירתי ומדויק, שמרגיש בדיוק כמוכם.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        אפיון חוויית משתמש עם חשיבה שיווקית
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        פיתוח ועיצוב אתרים ודפי נחיתה
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        עיצוב גרפי לרשתות החברתיות
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        ניהול תוכן וקופירייטינג לקמפיינים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        קידום אורגני וממומן בלינקדאין
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-4.png"
                    alt="עיצוב ומיתוג"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 3}
            onToggle={() => handleAccordionToggle(3)}
          />

          <Accordion
            icon="/wellcom-icon2.svg"
            heading="דיגיטל ושיווק"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    אנחנו בונים נכסים. אתרים שמספרים סיפור ברור, עיצוב שמחזק את
                    המותג, ותוכן יצירתי ומדויק, שמרגיש בדיוק כמוכם.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        אפיון חוויית משתמש עם חשיבה שיווקית
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        פיתוח ועיצוב אתרים ודפי נחיתה
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        עיצוב גרפי לרשתות החברתיות
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        ניהול תוכן וקופירייטינג לקמפיינים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        קידום אורגני וממומן בלינקדאין
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-5.png"
                    alt="דיגיטל ושיווק"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 4}
            onToggle={() => handleAccordionToggle(4)}
          />

          <Accordion
            icon="/wellcome-icon3.svg"
            heading="הדרכות והכשרות"
            content={
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-4 lg:p-6">
                {/* Text Section */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4 text-right">
                  <p className="text-body-18 text-gray-800 mb-6 cursor-default">
                    ההדרכות שלנו נבנות כמו שמסר צריך להיבנות: מותאמות, ממוקדות
                    וזכירות. עם כלים שמתרגלים כדי שיישארו, בדיוק כשצריך אותם.
                  </p>
                  <div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        זיקוק הערך המבדל וה-DNA הייחודי
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        אפיון קהלים, פרסונות ויעדים תקשורתיים
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיפוי שפה בשוק וגיבוש טון קול
                      </p>
                    </div>
                    <div className="flex items-start gap-2 justify-start">
                      <span className="w-5 h-5 text-gray-900">✓</span>
                      <p className="text-body-16 text-gray-600">
                        מיצוב חד ובניית מסרים מותאמים
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/services/service-6.png"
                    alt="הדרכות והכשרות"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            }
            isOpen={openAccordion === 5}
            onToggle={() => handleAccordionToggle(5)}
          />
        </div>

        {/* <div className="flex justify-center mt-12">
          <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
            <button
              onClick={() => jumpToSection("contact")}
              className="bg-black text-white text-body-24 font-bold px-8 py-6 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              בואו נדבר
            </button>
          </div>
        </div> */}
        <div className="flex justify-center ">
          <div>
            <Button onClick={() => jumpToSection("contact")} text="בואו נדבר" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
