import React from "react";
import { Link } from "react-router-dom";

import ProjectImg from "../assets/profile.jpg";
import ReactStars from "react-rating-stars-component";
import FramerReveal from "./FramerReveal";

const Card = ({ data, name }) => {
  return (
    <FramerReveal>
      <Link
        to={`/${name}/${data.id}`}
        className="group hover:-translate-y-1 duration-200"
      >
        <div className="w-[300px] h-[280px] relative overflow-hidden duration-300 rounded-xl group-hover:shadow-2xl group-hover:shadow-iconBg max-sm:shadow-2xl max-sm:shadow-iconBg">
          <img
            src={data.Image ? data.Image : ProjectImg}
            alt={data.name}
            className="h-full w-full object-cover rounded-lg duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex gap-2 items-center">
          <ReactStars
            count={5}
            value={data?.rating/data?.rated}
            color1="#ffd700"
            size={25}
            half={true}
          />
          <p className="text-violet">( {data.rated} )</p>
        </div>
        <h4 className="text-center text-sm mt-2 py-2 bg-subMainText text-mainBg rounded-full mx-2 duration-200">
          {data?.name?.length <= 35
            ? data.name
            : `${data?.name?.slice(0, 35)}...`}
        </h4>
      </Link>
    </FramerReveal>
  );
};

export default Card;
