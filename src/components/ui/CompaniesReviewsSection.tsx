import React from "react";
import CompaniesReviews from "./CompaniesReviews";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/reviews";

interface CompaniesReviewsSectionProps {
  fixedHeight?: boolean;
}

const CompaniesReviewsSection: React.FC<CompaniesReviewsSectionProps> = ({
  fixedHeight = true,
}) => {
  return (
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
  );
};

export default CompaniesReviewsSection;
