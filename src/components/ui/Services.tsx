import React, { useState } from "react";
import Accordion from "./Accordion";

const Services: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number>(0); // First accordion open by default

  const handleAccordionToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="w-full bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Text Section */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Responsive H2 Heading */}
          <h2 className="text-h2-responsive font-bold text-gray-900 mb-8">
            השירותים שלנו
          </h2>

          {/* Body Text - 2 lines, 4 words each */}
          <div className="text-body-24 text-gray-600 max-w-2xl">
            <p className="mb-2">פתרונות יצירתיים מותאמים אישית</p>
            <p>לכל צורך עסקי</p>
          </div>
        </div>

        {/* Accordions Section */}
        <div className="h-full mx-auto mt-16">
          <Accordion
            icon="/wellcom-icon1.svg"
            heading="אסטרטגיה "
            content={
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 bg-white pr-4 lg:pr-6">
                {/* Text Section - 66% on large screens */}
                <div className="flex-1 lg:w-2/3 pt-2 lg:pt-4">
                  {/* Semi Header */}
                  <div className="mb-6">
                    <p className="text-body-18 font-normal text-gray-800 mb-2">
                      אנו מפתחים אסטרטגיות מיצוב מקיפות המותאמות לצרכי הלקוח
                      ולמטרות העסק.
                    </p>
                    <p className="text-body-18 font-normal text-gray-800">
                      הצוות שלנו מנתח את השוק, מזהה הזדמנויות ובונה תוכנית פעולה
                      ברורה להשגת היעדים.
                    </p>
                  </div>

                  {/* Success Points */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-body-18 text-gray-700">
                        ניתוח מעמיק של השוק והמתחרים לזיהוי הזדמנויות עסקיות
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-body-18 text-gray-700">
                        פיתוח אסטרטגיית מיצוב ייחודית המבדילה אתכם מהמתחרים
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-body-18 text-gray-700">
                        בניית תוכנית פעולה מפורטת עם יעדים ברורים ומדידים
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-body-18 text-gray-700">
                        ליווי והדרכה בתהליך היישום והטמעת האסטרטגיה
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image Section - 33% on large screens */}
                <div className="lg:w-1/3 h-full lg:h-auto">
                  <img
                    src="/strategy-bg.svg"
                    alt="אסטרטגיה ומיצוב"
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
              <div>
                <p>
                  שירותי כתיבה מקצועיים הכוללים תוכן שיווקי, מאמרים, פוסטים
                  לרשתות חברתיות ועוד.
                </p>
                <p>
                  אנו יוצרים תוכן איכותי המתאים לקהל היעד ומעביר את המסר בצורה
                  ברורה ומשכנעת.
                </p>
              </div>
            }
            isOpen={openAccordion === 1}
            onToggle={() => handleAccordionToggle(1)}
          />

          <Accordion
            icon="/wellcome-icon3.svg"
            heading="תוכן"
            content={
              <div>
                <p>
                  פיתוח זהות מותג שלמה הכוללת לוגו, צבעים, טיפוגרפיה וקווים
                  מנחים עיצוביים.
                </p>
                <p>
                  אנו מעצבים חומרי שיווק מרשימים המחזקים את המותג ויוצרים חוויה
                  עקבית ברחבי הפלטפורמות.
                </p>
              </div>
            }
            isOpen={openAccordion === 2}
            onToggle={() => handleAccordionToggle(2)}
          />

          <Accordion
            icon="/wellcom-icon1.svg"
            heading="דיגיטל"
            content={
              <div>
                <p>
                  בנייה ופיתוח אתרי אינטרנט מתקדמים, חנויות מקוונות ויישומים
                  דיגיטליים.
                </p>
                <p>
                  מתמחים בחוויית משתמש מעולה, עיצוב רספונסיבי וביצועים גבוהים
                  בכל המכשירים.
                </p>
              </div>
            }
            isOpen={openAccordion === 3}
            onToggle={() => handleAccordionToggle(3)}
          />

          <Accordion
            icon="/wellcom-icon2.svg"
            heading="עיצוב גרפי"
            content={
              <div>
                <p>
                  ניהול מקצועי של רשתות חברתיות, יצירת תוכן ממוקד ופרסום מותאם
                  לכל פלטפורמה.
                </p>
                <p>
                  אנו בונים קהילות מעורבות ומגדילים את החשיפה והמכירות באמצעות
                  אסטרטגיות דיגיטליות מתקדמות.
                </p>
              </div>
            }
            isOpen={openAccordion === 4}
            onToggle={() => handleAccordionToggle(4)}
          />

          <Accordion
            icon="/wellcome-icon3.svg"
            heading="הדרכות והכשרות"
            content={
              <div>
                <p>
                  ייעוץ אסטרטגי לעסקים בתחומי השיווק, המכירות והפיתוח העסקי.
                </p>
                <p>
                  מעבירים הדרכות וסדנאות למנהלים וצוותי עבודה לשיפור הביצועים
                  והגדלת הרווחיות.
                </p>
              </div>
            }
            isOpen={openAccordion === 5}
            onToggle={() => handleAccordionToggle(5)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
          <button className="bg-black text-white text-body-24 font-bold px-8 py-6 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]">
            בואו נדבר
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
