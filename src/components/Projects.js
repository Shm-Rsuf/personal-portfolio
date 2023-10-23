import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Euphoria E-commerce -A modern e-commerce website",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698040591/Screenshot_2023-10-23_at_11-47-26_Euphoria_-_Shop_Trendy_and_Affordable_Clothing_Online_tw3i8d.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698041026/Screenshot_2023-10-23_at_12-00-46_Euphoria_-_Shop_Trendy_and_Affordable_Clothing_Online_iorstn.png",
    description:
      "Welcome to Euphoria E-commerce, your one-stop destination for all your online shopping needs. Our platform is built on a powerful technology stack, including Next.js, React, Prisma, Tailwind, Redux Toolkit, and Stripe, to deliver a seamless shopping experience.",
    tools: [
      "NEXT",
      "REACT",
      "PRISMA",
      "NEXT-AUTH",
      "TAILWIND CSS",
      "MONGODB",
      "STRIPE",
    ],
    liveLink: "https://euphoria-ecommerce.vercel.app",
    frontEndLink: "https://github.com/Shm-Rsuf/euphoria-ecommerce",
  },
  {
    /* Welcome to Course-demy, the ultimate online destination for unlocking your full potential through the power of education. Our platform is built on a powerful technology stack, including Next.js, React, Prisma, Tailwind, Nest-Auth, and Stripe  */
    id: 2,
    title: "Welcome to Course-demy, the ultimate online destination",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698041687/Screenshot_2023-10-23_at_12-13-10_https___course-demy-usuf.vercel.app_qswwwx.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698041756/Screenshot_2023-10-23_at_12-15-17_https___course-demy-usuf.vercel.app_ws8rmm.png",
    description:
      "Welcome to Course-demy, the ultimate online destination for unlocking your full potential through the power of education. Our platform is built on a powerful technology stack, including Next.js, React, Prisma, Tailwind, Nest-Auth, and Stripe",
    tools: [
      "NEXT",
      "REACT",
      "PRISMA",
      "NEXT-AUTH",
      "AXIOS",
      "TAILWIND CSS",
      "MONGODB",
    ],
    liveLink: "https://course-demy-usuf.vercel.app",
    frontEndLink: "https://github.com/Shm-Rsuf/course-demy",
  },
  {
    id: 3,
    title: "Welcome to Tech-Alpha, A MERN stack e-commerce platform",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698042218/Screenshot_2023-10-23_at_12-23-17_Tech_Alpha_ceh1ur.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1698042265/Screenshot_2023-10-23_at_12-24-04_Tech_Alpha_fbe9gs.png",
    description:
      "Welcome to Tech-Alpha, A MERN stack e-commerce platform that redefines the online shopping experience. Seamlessly merging the power of MongoDB, Express.js, React, and Node.js, Tech-Alpha offers a dynamic and feature-rich environment for customers.",
    tools: [
      "REACT",
      "REDUX",
      "AXIOS",
      "TAILWIND CSS",
      "GSAP",
      "NODE.JS",
      "EXPRESS",
    ],
    liveLink: "https://tech-alpha-a3.netlify.app",
    frontEndLink: "https://github.com/Shm-Rsuf/tech-alpha-client.git",
    backEndLink: "https://github.com/Shm-Rsuf/tech-alpha-server.git",
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
