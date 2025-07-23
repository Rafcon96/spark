import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import { FloatingDock } from "./Socials";

const SocialsComp: React.FC = () => {
  const socialItems = [
    {
      title: "Facebook",
      icon: <FaFacebook className="h-full w-full bg-blue-500 rounded-sm  " />,
      href: "https://facebook.com",
    },
    {
      title: "Whatsapp",
      icon: <FaWhatsapp className="h-full w-full bg-green-500 rounded-sm " />,
      href: "https://twitter.com",
    },
    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full bg-red-500 rounded-sm " />,
      href: "https://instagram.com",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin className="h-full w-full bg-blue-500 rounded-sm  " />,
      href: "https://linkedin.com",
    },
  ];

  return (
    <div className="w-fit">
      <FloatingDock
        items={socialItems}
        desktopClassName="bg-white/80 backdrop-blur-sm border border-gray-200"
        mobileClassName="bg-white/80 backdrop-blur-sm border border-gray-200"
      />
    </div>
  );
};

export default SocialsComp;
