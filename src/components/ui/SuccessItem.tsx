import React from "react";

interface SuccessItemProps {
  imageSrc: string;
  alt: string;
}

const SuccessItem: React.FC<SuccessItemProps> = ({ imageSrc, alt }) => {
  return (
    <div className="rounded-[2px] p-[1px] bg-[linear-gradient(90deg,#F7797D_0%,#C471ED_52.08%,#12C2E9_100%)] flex-shrink-0 w-full h-[400px] md:h-[625px]">
      <div className="bg-white rounded-[2px] overflow-hidden w-full h-full flex flex-col">
        {/* Image Container */}
        <div className="flex-1 overflow-hidden">
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Optional Title */}
        {/* {title && (
          <div className="p-4 text-right">
            <h3 className="text-body-18 font-semibold text-gray-900">{title}</h3>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default SuccessItem;
