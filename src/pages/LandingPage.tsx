import React from "react";
import StatsSection from "../components/ui/StatsSection";
import Services from "../components/ui/Services";
import SuccessStories from "../components/ui/SuccessStories";
import HowDoesItWork from "../components/ui/HowDoesItWork";
import Hero from "../sections/Hero";
import Welcome from "../sections/Welcome";
import ReviewCarusel from "../sections/ReviewCarusel";
import CompaniesReviewsSection from "../components/ui/CompaniesReviewsSection";

// import Testimonials from "./ui/Testimonials";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full" dir="rtl">
      {/* Dark Hero Section */}
      <Hero />
      <Welcome />
      <ReviewCarusel />

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
        <CompaniesReviewsSection />
      </section>
    </div>
  );
};

export default LandingPage;
