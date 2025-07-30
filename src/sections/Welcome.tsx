import Button from "../components/ui/Button";

function Welcome() {
  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-screen section-spacing bg-[url('/wellcom-bg.svg')] flex flex-col items-center  sm:layout-grid h-[calc(100%+600px)]  bg-cover bg-center bg-repeat bg-fixed px-6  sm:px-0">
      <div className="container-custom flex flex-col items-center gap-8 md:gap-12 [grid-area:1/11/1/4]">
        <div className="w-fit flex justify-center  border border-black rounded-sm cursor-default py-1 px-2 text-[12px] leading-[16px] tracking-[4%] text-center font-medium font-[Poppins]">
          ברוכים הבאים ל- SPARK
        </div>

        <div className="text-h2-responsive text-center cursor-default">
          זה הרגע שלכם.
        </div>
        <div className="text-body-24 text-center max-w-[510px] cursor-default">
          גיבשתם רעיון, בניתם תהליך, סימנתם מטרה. השקעתם זמן, משאבים, חשיבה.
          ועכשיו – כשהמסר פוגש את הקהל, הסיפור חייב לעבוד.
        </div>
        <div className="py-8 text-caption-lg cursor-default">אתם צריכים:</div>

        {/* 3 Column Layout */}
        <div className="grid-custom grid-cols-custom-1 md:grid-cols-custom-3 w-full max-w-5xl text-body-24">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/wellcom-icon1.svg"
                alt="Icon 1"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="font-bold mb-4 cursor-default">אסטרטגיה חכמה</h3>
            <p className="text-body-24 cursor-default">לזקק את המסר.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/wellcom-icon2.svg"
                alt="Icon 2"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="font-bold mb-4 cursor-default">מילים מדויקות</h3>
            <p className="text-body-24 cursor-default">קופי שמתחבר לקהל.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img
                src="/wellcome-icon3.svg"
                alt="Icon 3"
                className="w-16 h-16 mx-auto"
              />
            </div>
            <h3 className="font-bold mb-4 cursor-default">
              ויזואל שנכנס לזיכרון.
            </h3>
            <p className="text-body-24 cursor-default">
              ויזואליים שנדבקים לזיכרון.
            </p>
          </div>
        </div>

        {/* Big Button - New Line */}
        <div className="lex justify-center">
          <Button onClick={() => jumpToSection("contact")} text="בואו נדבר" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-2.5 h-full">whatsapp</div>
    </section>
  );
}

export default Welcome;
