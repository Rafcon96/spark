import { FlipWords } from "../components/ui/FlipWords";
import LogoSection from "../components/ui/LogoSection";

function Hero() {
  return (
    <section className="w-full h-fit lg:h-screen bg-black text-white fluid-container ">
      <div className="w-full static lg:relative lg:h-6/8 flex flex-col">
        <img
          src="/hero-desktop-1.svg"
          alt="Hero illustration"
          className=" static lg:absolute top-0  h-full w-full hidden lg:block"
        />
        <img
          src="/hero-mobile-1.svg"
          alt="Hero illustration"
          className=" static lg:absolute top-0  h-full w-full order-2 block lg:hidden"
        />

        {/* Text Content - Top on mobile, absolute positioned on large screens */}
        <div className="w-full container-1200  lg:items-start lg:justify-end lg:relative order-1 justify-self-center ">
          <div className=" col-6 pt-24 lg:pt-64 z-10">
            <div className="text-h1-responsive bg-gradient-horizontal bg-clip-text text-transparent cursor-default pr-[2px]">
              <h1 className="cursor-default">מטרות גדולות?</h1>
              <h1 className="cursor-default">תתחילו מסיפור.</h1>
            </div>
            <div className="py-4 ">
              <p className="lg:text-body-24 m-0  text-body-18 cursor-default ">
                יש לכם הזדמנות:
                <span
                  className="px-1 cursor-default "
                  style={{ fontWeight: "700" }}
                >
                  <FlipWords
                    words={[
                      "למכור",
                      "לשווק",
                      "להוביל שינוי",
                      "לרתום הנהלה",
                      "לגייס השקעה",
                    ]}
                    duration={2000}
                    className="text-caption-lg font-bold text-white cursor-default"
                  />
                  {/* למכור, לשווק, להוביל שינוי, לרתום הנהלה, לגייס השקעה. */}
                </span>
                <br />
                וברגע הזה – הסיפור שלכם עושה את ההבדל.
              </p>
            </div>
          </div>
        </div>
      </div>
      <LogoSection />
    </section>
  );
}

export default Hero;
