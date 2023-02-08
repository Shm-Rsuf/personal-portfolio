import { useRef } from "react";
import { useGsapHeroImgReveal, useGsapHeadLineReveal } from "../hooks/gsap";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=600",
  img2: "https://images.pexels.com/photos/2586353/pexels-photo-2586353.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  const heroHeadLineOneRef = useRef(null);
  const heroHeadLineTwoRef = useRef(null);

  const headLineArr = [heroHeadLineOneRef, heroHeadLineTwoRef];

  useHoverEffect(heroImgRef, data.img1, data.img2);

  useGsapHeroImgReveal(heroImgRef, 0.5);
  useGsapHeadLineReveal(headLineArr, 1);

  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="hero-headline-one" ref={heroHeadLineOneRef}>
          Front-End
        </h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="hero-headline-two" ref={heroHeadLineTwoRef}>
          Developer
        </h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
