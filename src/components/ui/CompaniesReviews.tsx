import React from "react";

interface CompaniesReviewsProps {
  children: React.ReactNode[];
  fixedHeight?: boolean; // Default true for fixed height, false for content-based height
}

const CompaniesReviews: React.FC<CompaniesReviewsProps> = ({
  children,
  fixedHeight = true,
}) => {
  // Take only first 9 items for the grid
  const gridItems = Array.isArray(children) ? children.slice(0, 9) : [children];

  return (
    <div className="w-full py-12 px-6 lg:px-16 lg:py-24 relative gap-x-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/compReviewsSection-bg.svg')",
        }}
      />
      <div className="flex justify-self-center text-center z-10 text-h2-mobile p-12 max-w-xl cursor-default">
        ביקורות מחברות שהסיפור שלהם הביא את הניצוץ
      </div>
      <div className="max-w-7xl mx-auto relative    z-10">
        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
          {gridItems.map((child, index) => (
            <div
              key={index}
              className={`
                ${fixedHeight ? "h-fit" : "h-fit"}
                w-full mb-2 break-inside-avoid transition-all duration-300 hover:scale-102 hover:z-20
              `}
            >
              <div className="w-full h-full">{child}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesReviews;
