import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto ">
        {/* Heading */}
        <h1 className=" mb-12 cursor-default justify-self-center">
          <img src={"./spark.svg"} alt="logo" />
        </h1>
        <h1 className="text-h1-desktop font-bold text-white mb-6 cursor-default">
          הפנייה התקבלה
        </h1>

        {/* Body Text */}
        <p className="text-body-24 text-white mb-8 cursor-default">
          ניצור עמכם קשר בהקדם
        </p>

        {/* Back to Home Button */}
        <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
          <button
            onClick={handleGoHome}
            className="bg-black text-white text-body-24 font-bold px-8 py-3 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
          >
            חזרה לעמוד הבית
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
