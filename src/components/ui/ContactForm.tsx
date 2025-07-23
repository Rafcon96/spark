import React from "react";
import { useNavigate } from "react-router-dom";

const ContactForm: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");

    // Navigate to thank you page
    navigate("/thankyou");
  };

  return (
    <div id="contact" className="w-full bg-gray-900 py-12">
      <div className="max-w-[560px] mx-auto px-4" dir="rtl">
        <div className="text-center mb-8">
          <div className="flex justify-center text-body-18 lg:text-h3-desktop px-6 max-w-[500px] text-center text-white cursor-default mx-auto">
            אנחנו כאן כדי לבנות אותו איתכם.
            <br /> השאירו פרטים, ונתחיל מהשורה הראשונה.
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* שם מלא */}
          <div>
            <input
              type="text"
              placeholder="שם מלא"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-body-18 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              dir="rtl"
              required
            />
          </div>

          {/* אימייל */}
          <div>
            <input
              type="email"
              placeholder="אימייל"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-body-18 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              dir="rtl"
              required
            />
          </div>

          {/* טלפון */}
          <div>
            <input
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="טלפון"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-body-18 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              dir="rtl"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(
                  /[^0-9]/g,
                  ""
                );
              }}
            />
          </div>

          {/* תוכן פניה */}
          <div>
            <textarea
              placeholder="תוכן פניה"
              rows={6}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-body-18 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none overflow-y-auto"
              dir="rtl"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="p-[2px] bg-gradient-horizontal rounded-lg shadow-[0_8px_32px_rgba(247,121,125,0.3),0_8px_32px_rgba(196,113,237,0.3),0_8px_32px_rgba(18,194,233,0.3),0_4px_16px_rgba(18,194,233,0.2)] hover:shadow-[0_12px_48px_rgba(247,121,125,0.4),0_12px_48px_rgba(196,113,237,0.4),0_12px_48px_rgba(18,194,233,0.4),0_6px_20px_rgba(18,194,233,0.3)] transition-all duration-300 hover:scale-105 active:scale-95">
            <button
              type="submit"
              className="bg-black text-white text-body-24 font-bold px-8 py-2 rounded-lg w-full h-full cursor-pointer hover:bg-gray-900 active:bg-gray-800 transition-all duration-200 transform hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              שלח
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
