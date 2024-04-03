import React, { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { membersRef } from "../utils/firebase.utils";

import MemberCard from "../components/MemberCard";
import Skeleton from "../components/Skeleton";

const Members = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState([]);

  const [show, setShow] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-20 scale-75");
      } else {
        setShow("show");
      }
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const _data = await getDocs(membersRef);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });
      setIsLoading(false);
    };
    getData();
  }, []);

  const defaultMembers = data?.filter(
    (member) => member.Position === "Final Year Member"
  );

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  const sortedDefaultMembers = defaultMembers.sort(compare);

  const handleClick = (position) => {
    const filteredMembers = data?.filter(
      (member) => member.Position === position
    );
    const sortedFilteredMembers = filteredMembers.sort(compare);
    setFilteredMembers(sortedFilteredMembers);
  };
  const Porash = {
    name: "Porash singh",
    Image:
      "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2Ffinal%20year%2Fporash11.jpg?alt=media&token=a0ca2043-7487-4fbc-b2d2-dae972826fa3",
    Position: "Final Year Member",
    Instagram: "https://www.instagram.com/porash.singh/",
    LinkedIn: "https://www.linkedin.com/in/porashsingh0/",
  };

  return (
    <div className="mt-4 mb-12">
      <div
        className={`flex flex-wrap mx-4 -mt-[50px] sm:-mt-16 items-center sm:gap-4 gap-2 text-xs sm:text-sm font-montserrat fixed z-30 duration-300 ${show}`}
      >
        <button
          onClick={() => handleClick("Final Year Member")}
          className="p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4"
        >
          Final Year
        </button>
        <button
          onClick={() => handleClick("Coordinator")}
          className="p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4"
        >
          3rd Year
        </button>
        <button
          onClick={() => handleClick("Executive Member")}
          className="p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4"
        >
          2nd Year
        </button>
        <button
          onClick={() => handleClick("Volunteer")}
          className="p-2 cursor-pointer bg-iconbgHover duration-200 hover:bg-violet focus:bg-violet rounded-full px-4"
        >
          1st Year
        </button>
      </div>

      {isLoading ? (
        <div className="flex flex-wrap justify-center mt-16 gap-4 mx-8">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="flex flex-wrap justify-center mt-16 gap-12 mx-10">
          {!filteredMembers.length || filteredMembers.length === 13 ? (
            <MemberCard member={Porash} />
          ) : null}

          {(filteredMembers.length
            ? filteredMembers
            : sortedDefaultMembers
          )?.map((member) => {
            return <MemberCard member={member} key={member.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Members;
