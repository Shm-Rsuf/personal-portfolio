import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Tech Alpha - About a modern e-commerce website",
    img1: "https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2: "https://images.pexels.com/photos/2586353/pexels-photo-2586353.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A modern e-commerce website built with React, Redux, TailwindCSS, Redux Thunk, and Redux Toolkit. Features product listing, filtering, checkout and seamless shopping experience. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "react",
      "redux",
      "redux-thunk",
      "tailwindcss",
      "redux-toolkit",
      "GSAP",
    ],
    liveLink: "https://www.google.com/",
    frontEndLink: "https://www.google.com/",
    backEndLink: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Foodverse - A modern food delivery online e-commerce website",
    img1: "https://images.pexels.com/photos/3370021/pexels-photo-3370021.jpeg?auto=compress&cs=tinysrgb&w=600",
    img2: "https://images.pexels.com/photos/2586353/pexels-photo-2586353.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A modern online food delivery e-commerce website built with React, Redux, TailwindCSS, Redux Thunk, and Redux Toolkit. Features product listing, filtering, checkout and seamless shopping experience. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "html",
      "react",
      "redux",
      "redux-thunk",
      "tailwindcss",
      "redux-toolkit",
      "GSAP",
    ],
    liveLink: "https://www.google.com/",
    frontEndLink: "https://www.google.com/",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
