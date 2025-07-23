import React from "react";
import InfiniteMovingCards from "./ui/infinite-moving-cards";
import ReviewSlider from "./ui/ReviewSlider";
import StatsSection from "./ui/StatsSection";
import Services from "./ui/Services";
import SuccessStories from "./ui/SuccessStories";
import HowDoesItWork from "./ui/HowDoesItWork";
import { reviews } from "../data/reviews";
import CompaniesReviewsSection from "./ui/CompaniesReviewsSection";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full " dir="rtl">
      {/* Dark Hero Section */}
      <section className=" w-full bg-black text-white flex flex-col lg:flex-row lg:items-start lg:justify-end lg:relative">
        {/* Text Content - Top on mobile, absolute positioned on large screens */}
        <div className="lg:px-10 px-2 text-right lg:absolute lg:z-10 lg:right-0 lg:top-3/8 lg:left-0 lg:shrink-0 justify-items-center lg:justify-items-start pt-10 ">
          <div className="text-h1-responsive bg-gradient-horizontal bg-clip-text text-transparent w-fit m-0 cursor-default">
            <h1 className="cursor-default">מטרות גדולות?</h1>
            <h1 className="cursor-default">תתחילו מסיפור.</h1>
          </div>
          <div className="py-2">
            <p className="lg:text-body-24 m-0 lg:max-w-[420px] max-w-[280px] text-body-18 cursor-default">
              יש לכם הזדמנות אמיתית:
              <span
                className="px-1 cursor-default"
                style={{ fontWeight: "700" }}
              >
                למכור, לשווק, להוביל שינוי, לרתום הנהלה, לגייס השקעה.
              </span>
              וברגע הזה – הסיפור שלכם עושה את ההבדל.
            </p>
          </div>
        </div>

        {/* Image Container - Bottom on mobile, positioned on large screens */}
        <div className="w-full flex justify-center lg:w-8/10 lg:shrink-0">
          <img
            src="/hero.svg"
            alt="Hero illustration"
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="w-full bg-black">
        <div className="mr-12">
          <img src="/comp.svg" className="hidden lg:block" alt="comp" />
          <img src="/comp-mobile.svg" className="block lg:hidden" alt="comp" />
        </div>
        <InfiniteMovingCards />
      </section>
      <section className="w-full flex flex-col items-center py-12 gap-4 min-h-[900px] bg-[url('/wellcom-bg.svg')] bg-cover bg-center">
        <div className="w-[150px] flex justify-center text-body-14 border border-black rounded-sm cursor-default">
          ברוכים הבאים ל- SPARK
        </div>

        <div className="text-h2-desktop block cursor-default">
          זה הרגע שלכם.
        </div>
        <div className="text-body-24 block max-w-[640px] px-4 cursor-default">
          זה הרגע לו ציפיתם. השקעתם שבועות, ליטשתם את הרעיון, שקלתם כל מילה. כי
          כשאתם פוגשים את הקהל שלכם, אתם יודעים - שזה הרגע שבו אתם צריכים סיפור
          שעובד.{" "}
          <span className="font-bold cursor-default">
            יש לכם הזדמנות אמיתית: למכור, לשווק, להוביל שינוי, לרתום הנהלה,
            לגייס השקעה. וברגע הזה – הסיפור שלכם עושה את ההבדל.
          </span>
        </div>
        <div className="py-8 text-caption-lg cursor-default">אתם צריכים:</div>

        {/* 3 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-5xl px-4 text-body-24">
          {/* Column 1 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-4">
              <img
                src="/wellcom-icon1.svg"
                alt="Icon 1"
                className="w-16 h-16 ml-3"
              />
            </div>
            <h3 className="font-bold mb-2 cursor-default">אסטרטגיה חכמה</h3>
            <p className="text-body-24 cursor-default">לדעת בדיוק מה לומר.</p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-4">
              <img
                src="/wellcom-icon2.svg"
                alt="Icon 2"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold mb-2 cursor-default">מילים מדויקות</h3>
            <p className="text-body-24 cursor-default">קופי שמתחבר לקהל.</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="mb-4">
              <img
                src="/wellcome-icon3.svg"
                alt="Icon 3"
                className="w-16 h-16"
              />
            </div>
            <h3 className="font-bold mb-2 cursor-default">עיצוב מבודל</h3>
            <p className="text-body-24 cursor-default">
              ויזואליים שנדבקים לזיכרון.
            </p>
          </div>
        </div>

        {/* Big Button - New Line */}
        <div className="flex justify-center mt-12">
          <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
            <button className="bg-black text-white text-body-24 font-bold px-8 py-6 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]">
              סיפורים שעובדים
            </button>
          </div>
        </div>
      </section>
      <section className="w-full bg-white py-16">
        <div className="text-center mb-12">
          <p className="text-body-24 text-gray-600">
            ביקורות מלקוחות שהצליחו לספר את הסיפור שלהם
          </p>
        </div>

        <ReviewSlider
          reviews={reviews}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </section>
      <section className="w-full  py-16">
        <StatsSection />
      </section>
      <section className="w-full  py-16 lg:px-16 px-1">
        <Services />
      </section>
      <section>
        <SuccessStories />
      </section>
      <section>
        <HowDoesItWork />
      </section>
      <section>
        <CompaniesReviewsSection />
      </section>
    </div>
  );
};

export default LandingPage;
