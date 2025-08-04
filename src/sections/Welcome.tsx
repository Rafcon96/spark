import Button from "../components/ui/Button";

function Welcome() {
  const jumpToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="w-screen section-spacing bg-[url('/wellcom-bg.svg')] flex flex-col items-center  curser-defualt bg-cover relative ">
      <div className="absolute md:bottom-[260px] bottom-[-50px] left-[20px] size-10  bg-[#00D054] rounded-[10px] p-2 cursor-pointer flex items-center justify-center">
        <img src="/whatsApp.svg" alt="whatsApp logo" />
      </div>
      <div className="container-custom flex flex-col items-center gap-6 md:gap-12 lg:w-[761px] w-full">
        <div className="w-fit flex justify-center  border border-black rounded-sm cursor-default py-1 px-2 text-small-caption">
          ברוכים הבאים ל- SPARK
        </div>

        <div className="text-h2-responsive text-center cursor-default">
          זה הרגע שלכם.
        </div>
        <div className="text-body-24 md:text-center text-right max-w-[510px] cursor-default self-start md:self-center">
          גיבשתם רעיון, בניתם תהליך, סימנתם מטרה. השקעתם זמן, משאבים, חשיבה.
          ועכשיו – כשהמסר פוגש את הקהל, הסיפור חייב לעבוד.
        </div>
        <div className="pt-8 text-caption-lg cursor-default text-right md:text-center self-start md:self-center ">
          אתם צריכים:
        </div>

        {/* 3 Column Layout */}
        <div className="grid-custom grid-cols-custom-1 md:grid-cols-custom-3 text-body-16 self-start md:self-center py-8">
          {/* Column 1 */}
          <div className="flex md:flex-col flex-row  items-center md:text-center gap-4 w-[256px] md:w-full">
            <img
              src="/wellcom-icon1.svg"
              alt="Icon 1"
              className="w-12  md:mx-auto"
            />
            <div className="">
              <h3 className=" cursor-default font-semibold">אסטרטגיה חכמה</h3>
              <p className=" cursor-default">לזקק את המסר.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex md:flex-col flex-row items-center  md:text-center gap-4 md:w-[256px] w-full">
            <img
              src="/wellcom-icon2.svg"
              alt="Icon 2"
              className="w-12 md:mx-auto"
            />
            <div>
              <h3 className="font-semibold cursor-default ">מילים מדויקות</h3>
              <p className="cursor-default">קופי שמתחבר לקהל.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex md:flex-col flex-row  items-center md:text-center gap-4 md:w-[256px] w-full">
            <img
              src="/wellcome-icon3.svg"
              alt="Icon 3"
              className="w-12   md:mx-auto"
            />
            <div>
              <h3 className="font-semibold cursor-default">
                ויזואל שנכנס לזיכרון.
              </h3>
              <p className=" cursor-default">ויזואליים שנדבקים לזיכרון.</p>
            </div>
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
