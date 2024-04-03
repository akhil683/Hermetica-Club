import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  MdOutlineSupervisorAccount,
  MdEmojiEvents,
  MdPhotoSizeSelectActual,
  MdOutlineAccountCircle,
} from "react-icons/md";
import {
  FaInstagram,
  FaLinkedinIn,
  FaProjectDiagram,
  FaYoutube,
} from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";

const MobileMenu = ({ control }) => {
  return (
    <motion.div
      animate={control}
      className="w-64 absolute -right-72 mr-0 text-xl"
    >
      <ul className="sticky bg-iconBg text-subMainText rounded-xl overflow-hidden">
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/" className="flex gap-2 items-center">
            <AiFillHome />
            Home
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/projects" className="flex gap-2 items-center">
            <FaProjectDiagram />
            Projects
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/workshops" className="flex gap-2 items-center">
            <FaProjectDiagram />
            Workshops
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/events" className="flex gap-2 items-center">
            <MdEmojiEvents />
            Events
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/guest_lectures" className="flex gap-2 items-center">
            <MdOutlineAccountCircle />
            Guest Lectures
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/members" className="flex gap-2 items-center">
            <MdOutlineSupervisorAccount />
            Members
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/gallery" className="flex gap-2 items-center">
            <MdPhotoSizeSelectActual /> Gallery
          </Link>
        </li>
        <li className="px-4 py-3 duration-150 hover:text-mainText hover:bg-iconbgHover">
          <Link to="/about" className="flex gap-2 items-center">
            <IoMdInformationCircle />
            About
          </Link>
        </li>
        <hr className=" opacity-30 my-2" />

        <li className="px-4 pt-2 pb-4 flex justify-around text-xl">
          <a
            href="https://www.linkedin.com/company/teamhermetica/mycompany/"
            className="social-icon"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/teamhermetica/?igshid=YmMyMTA2M2Y%3D"
            className="social-icon"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/@teamhermetica4195"
            className="social-icon"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default MobileMenu;
