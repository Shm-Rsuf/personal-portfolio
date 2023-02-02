import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=600",
  img2: "https://images.pexels.com/photos/2586353/pexels-photo-2586353.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const Hero = () => {
  const heroImgRef = useRef(null);

  useHoverEffect(heroImgRef, data.img1, data.img2);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="hero-headline-one">Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="hero-headline-two">Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
