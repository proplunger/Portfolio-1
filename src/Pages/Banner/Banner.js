import React from "react";
import Lottie from "lottie-react";
import webDevAnimation from './../../assets/Banner/91382-web-development.json';
import Typewriter from 'typewriter-effect';

const Banner= () => {

    return(
        <div>
        <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="w-[300] lg:w-full">
    <Lottie animationData={webDevAnimation} loop={true}/>
    </div>

    <div className="w-[300] lg:w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-secondary font-bold">
        <Typewriter
  options={{
    strings: ['I am Aryan Rawat', 'A Full-Stack developer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="py-6 lg:text-lg text-sm text-center">
        I am a full-stack web developer with skills in HTML, CSS, and JavaScript. 
        My background in competitive programming has honed my problem-solving and algorithmic thinking abilities.
        I specialize in the MERN stack and am dedicated to building user-friendly web applications.
        In my free time, I enjoy staying current with the latest web development technologies and continuing my education in the field.
      </p>
    </div>
  </div>
</div>
        </div>
    );
}

export default Banner;