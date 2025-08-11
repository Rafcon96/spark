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
    <section className=" self-center  px-0 lg:px-4  relative ">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        // style={{
        //   backgroundImage: "url('/compReviewsSection-bg.svg')",
        // }}
      />
      <div className="flex flex-col gap-6 self-center items-center w-full pb-16 ">
        <div className="flex justify-self-center text-center z-10 text-h2-responsive  max-w-sm cursor-default">
          כשהסיפור עובד התוצאה מספרת
        </div>
        <div className="text-caption-lg justify-self-center  bg-gradient-horizontal bg-clip-text text-transparent leading-relaxed w-fit cursor-default">
          הנה מה שהלקוחות שלנו אומרים.{" "}
        </div>
      </div>

      {/* Masonry-style Grid */}
      <div className=" columns-1 md:columns-2 lg:columns-3 break-inside-avoid  ">
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
    </section>
  );
};

export default CompaniesReviews;
