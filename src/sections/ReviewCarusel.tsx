import ReviewCard from "../components/ui/ReviewCard";
import { companyReviews } from "../data/reviews";

function ReviewCarusel() {
  return (
    <section className="overflow-x-hidden w-screen bg-white pt-16">
      <div className="marquee-box flex gap-4 w-[200%] animate-marquee ">
        {companyReviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </section>
  );
}

export default ReviewCarusel;
