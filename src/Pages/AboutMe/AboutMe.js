import React from "react";

const AboutMe = () => {
    return(
        <div id="AboutMe">
            <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
            About Me
        </h1>
        <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="w-[300] lg:w-full">
        <img src={process.env.PUBLIC_URL+"DSC_0455-1.jpg"} alt="" className="rounded"/>
    </div>

    <div className="w-[300] lg:w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-secondary font-bold">
      </h1>
      <p className="py-6 lg:text-lg text-sm text-center">
        I am a full-stack web developer with a strong foundation in both front-end and back-end development. As a MERN stack developer, I have expertise in using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to build web applications. I am skilled in languages such as HTML, CSS, and JavaScript for front-end development and have experience with back-end languages such as JavaScript and Node.js.
In addition to my web development skills, I am also a competitive programmer.
This means that I have a passion for problem-solving and am skilled in using algorithms and data structures to solve complex challenges.
<br></br>
<br></br>
I have experience participating in programming competitions, hackathons, and other events where I have had the opportunity to showcase my abilities.
Overall, my combination of full-stack web development and competitive programming skills make me a valuable asset in the tech industry. I have the ability to not only build functional and visually appealing web applications using the MERN stack, but also to think critically and solve complex problems.
     
      </p>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutMe;