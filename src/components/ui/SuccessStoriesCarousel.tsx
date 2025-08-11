import React from "react";
import GenericSlider from "./GenericSlider";
import SuccessItem from "./SuccessItem";

interface SuccessStory {
  id: number;
  imageSrc: string;
  alt: string;
}

const SuccessStoriesCarousel: React.FC = () => {
  const successStories: SuccessStory[] = [
    {
      id: 1,
      imageSrc: "/success1.svg",
      alt: "סיפור הצלחה 1",
    },
    {
      id: 2,
      imageSrc: "/success2.svg",
      alt: "סיפור הצלחה 2",
    },
    {
      id: 3,
      imageSrc: "/success3.svg",
      alt: "סיפור הצלחה 3",
    },
    {
      id: 4,
      imageSrc: "/success4.jpg",
      alt: "סיפור הצלחה 4",
    },
    {
      id: 5,
      imageSrc: "/success5.jpg",
      alt: "סיפור הצלחה 5",
    },
    {
      id: 6,
      imageSrc: "/success6.jpg",
      alt: "סיפור הצלחה 6",
    },
  ];

  const renderSuccessItem = (story: SuccessStory) => (
    <SuccessItem imageSrc={story.imageSrc} alt={story.alt} />
  );

  return (
    <div className="w-full">
      <GenericSlider
        items={successStories}
        renderItem={renderSuccessItem}
        autoPlay={true}
        autoPlayInterval={4000}
        itemsPerView={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
          large: 3,
        }}
      />
    </div>
  );
};

export default SuccessStoriesCarousel;
