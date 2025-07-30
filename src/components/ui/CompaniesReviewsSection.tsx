import CompaniesReviews from "./CompaniesReviews";
import ReviewCard from "./ReviewCard";
import { workerReviews } from "../../data/reviews";

interface CompaniesReviewsSectionProps {
  fixedHeight?: boolean;
}

const CompaniesReviewsSection: React.FC<CompaniesReviewsSectionProps> = () => {
  return (
    <CompaniesReviews>
      {workerReviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </CompaniesReviews>
  );
};

export default CompaniesReviewsSection;
