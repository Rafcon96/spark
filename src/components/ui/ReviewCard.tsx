import React from "react";

// Type 1: Company Review
export type CompanyReview = {
  id: number;
  rating: number;
  reviewText: string;
  companyName: string;
  typeWC: "company";
};

// Type 2: Worker Review
export type WorkerReview = {
  id: number;
  rating: number;
  reviewText: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
  typeWC: "worker";
};

type ReviewCardProps = CompanyReview | WorkerReview;

const renderStars = (count: number) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < count ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44 1.287 3.946c.3.92-.755 1.688-1.54 1.117l-3.36-2.44-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.945-3.36-2.44c-.783-.57-.38-1.81.588-1.81h4.149L9.05 2.927z" />
        </svg>
      ))}
    </div>
  );
};

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  const cardWidth =
    props.typeWC === "worker"
      ? " h-fit mx-0 mb-[12px] md:mb-[14px] break-inside-avoid w-full"
      : "w-[360px] flex-shrink-0 marquee-item overflow-hidden m-[2px]";

  return (
    <div
      className={`bg-white   border-[#E9EAEB] shadow-sm rounded-xl p-8  gap-6 ${cardWidth}  flex flex-col`}
    >
      <div>{renderStars(props.rating)}</div>
      <p className="text-gray-700 text-sm">{props.reviewText}</p>

      {props.typeWC === "company" ? (
        <div className="text-right text-sm text-gray-500 font-medium">
          {props.companyName}
        </div>
      ) : (
        <div className="flex items-center  space-x-3">
          {props.authorAvatar ? (
            <img
              src={props.authorAvatar}
              alt={props.authorName}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
              {props.authorName[0]}
            </div>
          )}
          <div>
            <div className="text-sm font-semibold text-gray-800">
              {props.authorName}
            </div>
            <div className="text-xs text-gray-500">{props.authorRole}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
