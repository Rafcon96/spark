import CompaniesReviews from "./CompaniesReviews";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/reviews";
import { motion } from "motion/react";

interface CompaniesReviewsSectionProps {
  fixedHeight?: boolean;
}

const CompaniesReviewsSection: React.FC<CompaniesReviewsSectionProps> = ({
  fixedHeight = true,
}) => {
  return (
    <motion.div
      initial={{ y: -250, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 2 }}
      className="w-full h-fit"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true }}
    >
      <CompaniesReviews>
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            id={review.id}
            rating={review.rating}
            reviewText={review.reviewText}
            authorName={review.authorName}
            authorRole={review.authorRole}
            authorAvatar={review.authorAvatar}
            fixedHeight={fixedHeight}
          />
        ))}
      </CompaniesReviews>
    </motion.div>
  );
};

export default CompaniesReviewsSection;
