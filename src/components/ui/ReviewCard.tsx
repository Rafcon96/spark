import React from "react";

interface ReviewCardProps {
  rating: number; // 1-5 stars
  reviewText: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string; // URL to avatar image, if not provided will show first letter
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  rating,
  reviewText,
  authorName,
  authorRole,
  authorAvatar,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="bg-[#E9EAEB] rounded-lg p-6 lg:p-8 shadow-sm w-full max-w-[400px] min-h-[320px] flex-shrink-0 flex flex-col justify-between">
      {/* Stars Rating - Left aligned */}
      <div className="flex justify-start mb-6 lg:mb-8">
        <div className="flex gap-1">{renderStars()}</div>
      </div>

      {/* Review Text - Left aligned */}
      <div className="mb-6 lg:mb-8 text-left flex-1">
        <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-800 font-normal">
          {reviewText}
        </p>
      </div>

      {/* Author Info - Left aligned */}
      <div className="flex items-center justify-start gap-3 lg:gap-4">
        {/* Avatar Circle */}
        <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-[#D5D7DA] flex items-center justify-center flex-shrink-0">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-gray-700 font-semibold text-lg lg:text-xl">
              {getInitials(authorName)}
            </span>
          )}
        </div>

        <div className="text-left">
          <h4 className="font-bold text-lg lg:text-xl text-gray-900">
            {authorName}
          </h4>
          <p className="text-gray-600 text-base lg:text-lg">{authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
