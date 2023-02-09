import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useGsapProjectLeftRightReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675931938/cover1_vtesoo.jpg",
  img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675922789/personal-portfolio/dpImg_epp9qb.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const aboutArr = [aboutLeftRef, aboutRightRef];

  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useGsapProjectLeftRightReveal(aboutArr);

  return (
    <div className="container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a Front-End-Developer specializing in React, Tailwind CSS,
            Redux, responsive design, JavaScript, and React Router would be
            highly skilled in building and implementing user-friendly,
            efficient, and visually appealing web applications using these
            technologies. My expertise in these technologies allows me to design
            and implement responsive layouts.
          </p>
          <p className="mt-10">
            Additionally, I would have a strong understanding of javaScript and
            be able to write high-quality code using React. My passion for
            delivering exceptional user experiences, combined with my technical
            skills, make me a valuable asset to any development team.
          </p>
          <a
            href="https://docs.google.com/document/d/1999X1u2dC9h4B2nlhbC0rBL_1y55aK_aSdfTTvsAwHQ/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase py-4 px-8 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-50/20 duration-500 inline-block mt-10"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
