import React from "react";
import Timeline from "./Timeline";
import { timelineData } from "../../data/timeline";

const HowDoesItWork: React.FC = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* First Column/Row - Header and Method */}
          <div className="w-full lg:w-1/2">
            {/* Header H3 - 3 lines, 2 words each */}
            <h2 className="text-h2-responsive font-bold cursor-default whitespace-pre-line">
              {` איך אנחנו
              גורמים לסיפור
               שלכם לעבוד`}
            </h2>

            {/* Caption with gradient */}
            <div className="text-caption-small bg-gradient-horizontal bg-clip-text text-transparent w-fit mb-8 cursor-default">
              SPARK Method™
            </div>
          </div>

          {/* Second Column/Row - Placeholder Content */}
          <div className="w-full lg:w-[480px]">
            <Timeline items={timelineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
