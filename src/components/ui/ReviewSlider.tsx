import React from "react";
import GenericSlider from "./GenericSlider";
import ReviewCard from "./ReviewCard";

interface Review {
  id: number;
  rating: number;
  reviewText: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
}

interface ReviewSliderProps {
  reviews: Review[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({
  reviews,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const renderReviewCard = (review: Review) => (
    <ReviewCard
      rating={review.rating}
      reviewText={review.reviewText}
      authorName={review.authorName}
      authorRole={review.authorRole}
      authorAvatar={review.authorAvatar}
    />
  );

  return (
    <GenericSlider
      items={reviews}
      renderItem={renderReviewCard}
      autoPlay={autoPlay}
      autoPlayInterval={autoPlayInterval}
      itemsPerView={{
        mobile: 1,
        tablet: 2,
        desktop: 3,
        large: 4,
      }}
    />
  );
};

export default ReviewSlider;
