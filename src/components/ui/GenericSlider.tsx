import { useState, useEffect } from "react";

interface GenericSliderProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemsPerView?: {
    mobile: number;
    tablet: number;
    desktop: number;
    large: number;
  };
}

const getSlideStyles = (itemsPerView: number) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  gap: itemsPerView >= 3 ? "12px" : "24px",
  alignItems: "stretch",
  justifyContent: "center",
  padding: "0 40px",
});

const rightArrowStyles = {
  fontSize: "16px",
  color: "#333",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "4px",
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  userSelect: "none" as const,
};

const leftArrowStyles = {
  fontSize: "16px",
  color: "#333",
  cursor: "pointer",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "4px",
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease",
  userSelect: "none" as const,
};

const navigationContainerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  gap: "16px",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: "8px",
};

const dotStyles = {
  cursor: "pointer",
  height: "10px",
  width: "10px",
  margin: "0 2px",
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
  transition: "background-color 0.3s ease",
  userSelect: "none" as const,
};

const activeDotStyles = {
  ...dotStyles,
  backgroundColor: "#333",
};

const sliderStyles = {
  position: "relative" as const,
  width: "100%",
  padding: "0 20px",
  overflow: "hidden",
  cursor: "default",
};

function GenericSlider<T>({
  items,
  renderItem,
  autoPlay = false,
  autoPlayInterval = 3000,
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    large: 4,
  },
}: GenericSliderProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemsPerView, setCurrentItemsPerView] = useState(
    itemsPerView.mobile
  );
  const [isPaused, setIsPaused] = useState(false);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1400) {
        setCurrentItemsPerView(itemsPerView.large);
      } else if (width >= 1024) {
        setCurrentItemsPerView(itemsPerView.desktop);
      } else if (width >= 640) {
        setCurrentItemsPerView(itemsPerView.tablet);
      } else {
        setCurrentItemsPerView(itemsPerView.mobile);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [itemsPerView]);

  // Reset current index if items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [currentItemsPerView]);

  const totalSlides = Math.ceil(items.length / currentItemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const getCurrentItems = () => {
    const startIndex = currentIndex * currentItemsPerView;
    const endIndex = startIndex + currentItemsPerView;
    return items.slice(startIndex, endIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, autoPlayInterval, currentIndex, isPaused]);

  const handleMouseEnter = () => {
    if (autoPlay) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsPaused(false);
    }
  };

  const getItemStyles = () => ({
    flex: `0 0 calc(${100 / currentItemsPerView}% - ${
      ((currentItemsPerView >= 3 ? 12 : 24) * (currentItemsPerView - 1)) /
      currentItemsPerView
    }px)`,
    minWidth: "280px",
    display: "flex",
    justifyContent: "center",
  });

  return (
    <div className="w-full" style={{ userSelect: "none" }}>
      <div
        style={sliderStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={getSlideStyles(currentItemsPerView)}>
          {getCurrentItems().map((item, index) => (
            <div key={index} style={getItemStyles()}>
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Container with Arrows and Dots */}
      {totalSlides > 1 && (
        <div style={navigationContainerStyles}>
          {/* Left Arrow */}
          <div
            style={leftArrowStyles}
            onClick={goToPrevious}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.9)";
            }}
          >
            ❮
          </div>

          {/* Dots Navigation */}
          <div style={dotsContainerStyles}>
            {Array.from({ length: totalSlides }).map((_, index) => (
              <span
                key={index}
                style={index === currentIndex ? activeDotStyles : dotStyles}
                onClick={() => goToSlide(index)}
                onMouseEnter={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.backgroundColor = "#666";
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== currentIndex) {
                    e.currentTarget.style.backgroundColor = "#bbb";
                  }
                }}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <div
            style={rightArrowStyles}
            onClick={goToNext}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.9)";
            }}
          >
            ❯
          </div>
        </div>
      )}
    </div>
  );
}

export default GenericSlider;
