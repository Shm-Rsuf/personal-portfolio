import hoverEffect from "hover-effect";
import { useEffect } from "react";
import cloud from "../assets/images/cloud.png";

export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    new hoverEffect({
      parent: el.current,
      image1: img1,
      image2: img2,
      displacementImage: cloud,
      intencity: 0.5,
    });
  }, [el, img1, img2]);
};
