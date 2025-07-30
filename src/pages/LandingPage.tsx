import React from "react";
import ReviewSlider from "../components/ui/ReviewSlider";
import StatsSection from "../components/ui/StatsSection";
import Services from "../components/ui/Services";
import SuccessStories from "../components/ui/SuccessStories";
import HowDoesItWork from "../components/ui/HowDoesItWork";
import { reviews } from "../data/reviews";
import CompaniesReviewsSection from "../components/ui/CompaniesReviewsSection";
import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";

// import Testimonials from "./ui/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full" dir="rtl">
      {/* Dark Hero Section */}
      <Hero />
      <Welcome />
      <section className="w-full bg-white section-spacing">
        <div className="container-custom">
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
        </div>
      </section>

      <section id="about" className="w-full section-spacing">
        <StatsSection />
      </section>

      <section id="capabilities" className="w-full    ">
        <Services />
      </section>

      <section id="works" className="w-full section-spacing">
        <SuccessStories />
      </section>

      <section id="process" className="w-full section-spacing">
        <HowDoesItWork />
      </section>
      <section>
        {/* <Testimonials /> */}
        <CompaniesReviewsSection fixedHeight={false} />
      </section>
    </div>
  );
};

export default LandingPage;
