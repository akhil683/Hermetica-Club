import React from "react";
import HeroImg from "../../assets/profile.jpg";
import FramerReveal from "../FramerReveal";
import heroImg1 from "../../assets/hermetica_photo.jpg";
import heroImg2 from "../../assets/trophy.jpg";

const Hero = () => {
  return (
    <FramerReveal>
      <div className="min-h-[90vh] flex gap-2 sm:gap-6 max-sm:flex-col justify-center items-center">
        <div className="m-2 sm:m-6 mx-8 text-center text-xl font-opensans">
          <h1 className="text-3xl md:text-6xl mb-3">
            Team <span className=" text-violet">Hermetica</span>
          </h1>
          <p className="text-subMainText font-popppins text-center">
            'We React To What Matters.'
          </p>
          <p className="max-w-[460px] text-subMainText text-xs mt-6 font-popppins">
            Team Hermetica, established in 2014, represents the Department of
            Chemical Engineering, in the annual tech-fest NIMBUS at National
            Institite of Technology, Hamirpur.
          </p>
        </div>

        {/* <div className='sm:w-[650px] max:mt-16 w-full h-[450px] sm:h-[500px] rounded-2xl overflow-hidden'>

          <img src={HeroImg} className='w-full h-full object-cover' alt="" />
        </div> */}

        <div className="sm:w-[550px] max-sm:mt-16 w-[90%] h-[300px] sm:h-[400px] grid grid-cols-2 grid-rows-2 gap-4 rounded-2xl">
          <div className=" row-span-2 bg-bg rounded-l-2xl overflow-hidden hover:shadow-2xl hover:shadow-iconbgHover hover:scale-105 duration-200">
            <img
              src={heroImg2}
              className="w-full h-full object-cover opacity-80"
              alt=""
            />
          </div>

          <div className="rounded-bl-2xl rounded-tr-2xl overflow-hidden hover:shadow-2xl hover:shadow-iconbgHover hover:scale-105 duration-200">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Gallery%2Fnimbux%2FIMG_7675.jpg?alt=media&token=ec511c06-bf5f-4ddd-8971-f5d0841afcd9"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="rounded-br-2xl rounded-tl-2xl overflow-hidden hover:shadow-2xl hover:shadow-iconbgHover hover:scale-105 duration-200">
            <img src={heroImg1} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </FramerReveal>
  );
};

export default Hero;
