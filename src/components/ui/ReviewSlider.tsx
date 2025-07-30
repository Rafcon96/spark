import React from "react";
import GenericSlider from "./GenericSlider";
import ReviewCard, { type WorkerReview } from "./ReviewCard";

interface ReviewSliderProps {
  reviews: WorkerReview[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ReviewSlider: React.FC<ReviewSliderProps> = ({
  reviews,
  autoPlay = false,
  autoPlayInterval = 3000,
}) => {
  const renderReviewCard = (review: WorkerReview) => <ReviewCard {...review} />;

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
