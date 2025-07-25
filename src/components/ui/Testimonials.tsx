import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/reviews";

function Testimonials() {
  return (
    <section className="flex-center md:p-12 p-6">
      <div className="h-full w-full md:px-10 px-5">
        <div className="text-h2-responsive text-center font-bold">
          כשהסיפור עובד - התוצאה מספרת.
          <br /> הנה מה שהלקוחות שלנו אומרים.
        </div>
        <div className="lg:columns-3 md:columns-2 columns-1 mt-16 max-w-[1500px] justify-self-center ">
          {reviews.map((review) => (
            <div className="w-full h-fit py-1 cursor-pointer hover:scale-102 transition-all duration-300 rounded-lg hover:shadow-xl hover:shadow-gradient-horizontal ">
              <ReviewCard
                key={review.id}
                id={review.id}
                rating={review.rating}
                reviewText={review.reviewText}
                authorName={review.authorName}
                authorRole={review.authorRole}
                authorAvatar={review.authorAvatar}
                fixedHeight={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
