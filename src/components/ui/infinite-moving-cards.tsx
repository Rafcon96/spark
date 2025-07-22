import { useEffect, useRef } from "react";

const logo1 = "/logo1.svg";
const logo2 = "/logo2.svg";
const logo3 = "/logo3.svg";
const logo4 = "/logo4.svg";
const logo5 = "/logo5.svg";
const logo6 = "/logo6.svg";
const logo7 = "/logo7.svg";
const logo8 = "/logo8.svg";

const InfiniteMovingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  const icons = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const ITEM_WIDTH = 120; // Fixed width per item
  const SPEED = 1; // Pixels per frame
  const TOTAL_ITEMS = 24; // Show many copies for smooth infinite effect

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
      itemsRef.current.forEach((item) => {
        if (!item) return;

        // Get current position
        const currentTransform = item.style.transform;
        const currentX = currentTransform
          ? parseFloat(
              currentTransform.replace("translateX(", "").replace("px)", "")
            )
          : 0;

        // Move left
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
  }, []);

  // Create items array with repeated logos
  const items = Array.from({ length: TOTAL_ITEMS }, (_, index) => {
    const logoIndex = index % icons.length;
    return icons[logoIndex];
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-20 overflow-hidden relative bg-black"
      style={{ position: "relative" }}
    >
      {items.map((logo, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) itemsRef.current[index] = el;
          }}
          className="absolute"
        >
          <img
            src={logo}
            alt={`Logo ${(index % icons.length) + 1}`}
            className="w-20 h-20 object-contain"
            style={{ display: "block" }}
          />
        </div>
      ))}
    </div>
  );
};

export default InfiniteMovingCards;
