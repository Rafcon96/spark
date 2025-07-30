import React from "react";
import { workerReviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";
// import { motion } from "framer-motion";

interface CompaniesReviewsProps {
  children: React.ReactNode[];
}

const CompaniesReviews: React.FC<CompaniesReviewsProps> = () => {
  // Take only first 9 items for the grid

  return (
    <div className="w-full py-12 px-6 lg:px-16 lg:py-24 relative gap-x-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/compReviewsSection-bg.svg')",
        }}
      />
      <div className="flex justify-self-center text-center z-10 text-h2-mobile p-12 max-w-xl cursor-default">
        ביקורות מחברות שהסיפור שלהם הביא את הניצוץ
      </div>
      <div className="max-w-7xl mx-auto relative    z-10">
        {/* Masonry-style Grid */}
        <div className=" gap-2 max-h-[800px] overflow-hidden">
          {/* <motion.div
            initial={{ y: 250, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className="w-full h-fit"
    
          > */}
          {workerReviews.map((item, index) => (
            <ReviewCard key={index} {...item} />
          ))}
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default CompaniesReviews;
