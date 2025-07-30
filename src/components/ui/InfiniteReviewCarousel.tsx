import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";

interface Review {
  id: number;
  rating: number;
  reviewText: string;
  authorName: string;
  authorRole: string;
  authorAvatar?: string;
}

interface InfiniteReviewCarouselProps {
  reviews: Review[];
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
}

const InfiniteReviewCarousel: React.FC<InfiniteReviewCarouselProps> = ({
  reviews,
  speed = "slow",
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState(false);

  const ITEM_WIDTH = 470; // Width of each review card (450px + 20px margin)
  const SPEED = speed === "fast" ? 2 : speed === "normal" ? 1 : 0.3; // Very slow speed
  const TOTAL_ITEMS = 20; // More copies for smooth infinite effect

  // Create items array with repeated reviews
  const items = Array.from({ length: TOTAL_ITEMS }, (_, index) => {
    const reviewIndex = index % reviews.length;
    return {
      ...reviews[reviewIndex],
      uniqueId: `${reviews[reviewIndex].id}-${index}`,
    };
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;

    // Initialize positions - start from right edge and extend further right
    itemsRef.current.forEach((item, index) => {
      if (item) {
        // Start from the right edge of container and extend beyond
        const startX = containerWidth + index * ITEM_WIDTH;
        item.style.transform = `translateX(${startX}px)`;
        item.style.position = "absolute";
        item.style.left = "0";
        item.style.top = "0";
        item.style.width = `${ITEM_WIDTH}px`;
        item.style.height = "100%";
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";
      }
    });

    const animate = () => {
      // Completely stop animation if hovered and pauseOnHover is true
      if (pauseOnHover && isHovered) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      itemsRef.current.forEach((item) => {
        if (!item) return;

        // Get current position
        const currentTransform = item.style.transform;
        const currentX = currentTransform
          ? parseFloat(
              currentTransform.replace("translateX(", "").replace("px)", "")
            )
          : 0;

        // Move left (same as infinite-moving-cards)
        const newX = currentX - SPEED;

        // If item is completely off the left side, move it to the right
        if (newX < -ITEM_WIDTH) {
          // Find the rightmost item's position
          let rightmostX = -ITEM_WIDTH;
          itemsRef.current.forEach((otherItem) => {
            if (otherItem && otherItem !== item) {
              const otherTransform = otherItem.style.transform;
              const otherX = otherTransform
                ? parseFloat(
                    otherTransform.replace("translateX(", "").replace("px)", "")
                  )
                : 0;
              if (otherX > rightmostX) {
                rightmostX = otherX;
              }
            }
          });

          // Position this item to the right of the rightmost item
          item.style.transform = `translateX(${rightmostX + ITEM_WIDTH}px)`;
        } else {
          // Normal movement
          item.style.transform = `translateX(${newX}px)`;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [SPEED, isHovered, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className="relative z-20 w-full overflow-hidden h-[450px] lg:h-[500px]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((review, index) => (
        <div
          key={review.uniqueId}
          ref={(el) => {
            if (el) itemsRef.current[index] = el;
          }}
          className="absolute"
        >
          <ReviewCard
            id={review.id}
            rating={review.rating}
            reviewText={review.reviewText}
            authorName={review.authorName}
            authorRole={review.authorRole}
            authorAvatar={review.authorAvatar}
            typeWC="worker"
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteReviewCarousel;
