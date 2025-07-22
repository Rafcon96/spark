import React from "react";
import GenericSlider from "./GenericSlider";
import SuccessItem from "./SuccessItem";

interface SuccessStory {
  id: number;
  imageSrc: string;
  alt: string;
  title?: string;
}

const SuccessStoriesCarousel: React.FC = () => {
  const successStories: SuccessStory[] = [
    {
      id: 1,
      imageSrc: "/success1.svg",
      alt: "סיפור הצלחה 1",
      title: "פרויקט חדשנות טכנולוגית",
    },
    {
      id: 2,
      imageSrc: "/success2.svg",
      alt: "סיפור הצלחה 2",
      title: "גיוס השקעות מוצלח",
    },
    {
      id: 3,
      imageSrc: "/success3.svg",
      alt: "סיפור הצלחה 3",
      title: "שינוי אסטרטגי מוצלח",
    },
    {
      id: 4,
      imageSrc: "/success4.jpg",
      alt: "סיפור הצלחה 4",
      title: "פיתוח מוצר מהפכני",
    },
    {
      id: 5,
      imageSrc: "/success5.jpg",
      alt: "סיפור הצלחה 5",
      title: "הרחבה בינלאומית",
    },
    {
      id: 6,
      imageSrc: "/success6.jpg",
      alt: "סיפור הצלחה 6",
      title: "שותפות אסטרטגית",
    },
  ];

  const renderSuccessItem = (story: SuccessStory) => (
    <SuccessItem
      imageSrc={story.imageSrc}
      alt={story.alt}
      title={story.title}
    />
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
