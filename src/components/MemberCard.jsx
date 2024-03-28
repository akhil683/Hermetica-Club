import React from "react";
import Img from "../assets/profile.jpg";

import FramerReveal from "./FramerReveal";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MemberCard = ({ member }) => {
  const { name, LinkedIn, Instagram, Position, Image } = member;

  return (
    <FramerReveal>
      <div className="flex flex-col  border border-iconbgHover rounded-lg hover:shadow-2xl duration-200 hover:shadow-iconbgHover">
        <div className="relative group overflow-hidden">
          <div className="absolute flex gap-2 left-2 top-12 z-20 group-hover:top-2 opacity-0 group-hover:opacity-100 duration-500">
            <a
              href={Instagram}
              className="p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgHover hover:shadow-md hover:scale-110 cursor-pointer duration-300"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href={LinkedIn}
              className="p-2 text-xl hover:bg-iconBg rounded-full bg-iconbgHover hover:text-violet hover:shadow-iconbgover hover:shadow-md hover:scale-110 cursor-pointer duration-300"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="absolute text-xs left-4 -bottom-10 text-iconBg font-semibold group-hover:bottom-2 duration-500 z-20">
            <span className="px-4 py-2 rounded-full bg-mainText duration-200 opacity-70 group-hover:opacity-100">
              {name}
            </span>
            <p className="px-4 py-2 mt-6 group-hover:mt-4 rounded-full bg-mainText duration-500 opacity-100 group-hover:opacity-100">
              {Position}
            </p>
          </div>

          <div className="sm:w-64 w-72 h-[320px] sm:h-[300px] rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover group-hover:scale-110 opacity-90 hover:opacity-100 duration-500"
              src={Image ? Image : Img}
              alt={name}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </FramerReveal>
  );
};

export default MemberCard;
