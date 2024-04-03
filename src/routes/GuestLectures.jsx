import React, { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";

import Skeleton from "../components/Skeleton";
import FramerReveal from "../components/FramerReveal";

import img1 from "../assets/Guest-Lectures/img1.jpeg";
import img2 from "../assets/Guest-Lectures/img2.jpeg";
import img3 from "../assets/Guest-Lectures/img3.jpeg";
import img4 from "../assets/Guest-Lectures/img4.jpeg";
import img5 from "../assets/Guest-Lectures/img5.jpeg";
import img6 from "../assets/Guest-Lectures/img6.jpeg";
import img7 from "../assets/Guest-Lectures/img7.jpeg";
import img8 from "../assets/Guest-Lectures/img8.jpeg";
import img9 from "../assets/Guest-Lectures/img9.jpeg";
import img10 from "../assets/Guest-Lectures/img10.jpeg";
import img11 from "../assets/Guest-Lectures/img11.jpeg";
import img12 from "../assets/Guest-Lectures/img12.jpeg";
import GuestCard from "../components/GuestCard";

const GuestLectures = ({ dataRef }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const Gallery = [
    {
      id: 1,
      Image: img1,
    },

    {
      id: 2,
      Image: img2,
    },
    {
      id: 3,
      Image: img3,
    },
    {
      id: 4,
      Image: img4,
    },
    {
      id: 5,
      Image: img5,
    },
    {
      id: 6,
      Image: img6,
    },
    {
      id: 7,
      Image: img7,
    },
    {
      id: 8,
      Image: img8,
    },
    {
      id: 12,
      Image: img12,
    },
    {
      id: 9,
      Image: img9,
    },
    {
      id: 10,
      Image: img10,
    },
    {
      id: 11,
      Image: img11,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(dataRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className="sm:mb-12 mb-24 mt-2 z-50">
      {isLoading ? (
        <div className="flex flex-wrap mt-6 justify-center gap-6">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-16 mt-12">
          {data?.map((data) => {
            return (
              <GuestCard data={data} name={"guest_lectures"} key={data?.name} />
            );
          })}
        </div>
      )}
      <div className="min-h-screen flex mt-16 max-md:my-12 flex-col gap-6 justify-center relative">
        <h3 className="text-3xl sm:text-5xl text-center">
          Glimpse<span className="text-violet"> of Guest Lectures</span>
        </h3>
        <div className="flex flex-wrap justify-center mt-16 gap-4 mx-4">
          {Gallery.map((image) => (
            <FramerReveal key={image.id}>
              <div className="relative w-[400px] sm:w-[330px] min-h-[200px] sm:h-[260px] border border-iconbgHover overflow-hidden hover:shadow-2xl hover:shadow-iconbgHover duration-300">
                <img
                  src={image.Image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 duration-300 "
                />
              </div>
            </FramerReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestLectures;
