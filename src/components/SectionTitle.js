import { useRef } from "react";
import { useGsapSectionTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef(null);
  useGsapSectionTitleReveal(sectionTitleRef);

  return (
    <div className="overflow-hidden">
      <h2 className="projects-section-title" ref={sectionTitleRef}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
