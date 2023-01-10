import React from "react";
import Lottie from "lottie-react";

const Service = ({service}) => {
  const {serviceName, animation, about} = service;
    return(
      <div className="">
        <div className="h-[450px] card w-96 bg-base-100 shadow-xl hover:border-2 relative">
  <figure className="px-10 pt-10">
    <Lottie className="w-1/2" animationData={animation} loop={true}/>
  </figure>
  <div className="card-body items-center text-center bottom-0 mb-5">
    <h2 className="card-title">{serviceName}</h2>
    <p>{about}</p>
    <div className="card-actions">
      <button className="btn btn-primary" ><a href="https://github.com/proplunger">See more</a></button>
    </div>
  </div>
</div>
</div>
    );
};

export default Service;