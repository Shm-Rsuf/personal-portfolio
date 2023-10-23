import { useRef } from "react";
import { useGsapSkillItemReveal, useGsapSkillTextReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = [
  { id: 1, title: "Next.js" },
  { id: 2, title: "React" },
  { id: 3, title: "Redux" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "Typescript" },
  { id: 6, title: "TailwindCSS" },
  { id: 7, title: "C Programming" },
  { id: 8, title: "Firebase Auth" },
  { id: 9, title: "C++" },
  { id: 10, title: "Node.js" },
  { id: 11, title: "Express.js" },
  { id: 12, title: "Mongodb" },
  { id: 13, title: "Prisma" },
  { id: 14, title: "Git & GitHub" },
  { id: 15, title: "Vercel" },
  { id: 16, title: "Figma" },
];
const Skills = () => {
  const skillItemRef = useRef([]);
  const skillItem2Ref = useRef([]);
  const skillTextRef = useRef([]);
  const skillText2Ref = useRef([]);

  useGsapSkillItemReveal(skillItemRef.current);
  useGsapSkillItemReveal(skillItem2Ref.current);

  useGsapSkillTextReveal(skillTextRef.current);
  useGsapSkillTextReveal(skillText2Ref.current);

  return (
    <div className="skills container mx-auto mt-40" id="skills">
      <SectionTitle title={"My Skills"} />
      <div className="skills-wrapper grid grid-cols-2 mt-40 gap-10">
        <ul className="skills-left flex flex-col gap-10">
          {data
            .filter((_, i) => i < Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-itme container overflow-hidden"
                ref={(el) => (skillItemRef.current[i] = el)}
              >
                <div
                  className="flex gap-5 items-baseline"
                  ref={(el) => (skillTextRef.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
        <ul className="skills-right flex flex-col gap-10">
          {data
            .filter((_, i) => i >= Math.floor(data.length / 2))
            .map((skill, i) => (
              <li
                key={skill.id}
                className="skill-itme container overflow-hidden"
                ref={(el) => (skillItem2Ref.current[i] = el)}
              >
                <div
                  className="flex gap-5 items-baseline"
                  ref={(el) => (skillText2Ref.current[i] = el)}
                >
                  <span className="skill-number text-white/50">
                    {String(skill.id).padStart(2, 0).padEnd(3, ".")}
                  </span>
                  <span className="skill-name">{skill.title}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
