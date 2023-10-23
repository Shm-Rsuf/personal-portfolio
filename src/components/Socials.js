import { useRef } from "react";
import { useGsapSocialReveal } from "../hooks/gsap";

const data = [
  { id: 1, title: "Facebook", url: "https://web.facebook.com/shmUsuf15" },
  { id: 2, title: "GitHub", url: "https://github.com/Shm-Rsuf" },
  { id: 3, title: "LinkedIn", url: "https://www.linkedin.com/in/shm-usuf/" },
  { id: 4, title: "Twitter", url: "https://twitter.com/shm_usuf" },
  { id: 5, title: "Leetcode", url: "https://leetcode.com/usuf_ali/" },
];
const Socials = () => {
  const socialRef = useRef(null);

  useGsapSocialReveal(socialRef, 2);

  return (
    <div
      className="socials flex gap-3 uppercase text-sm fixed left-5 top-[80%] -rotate-90 origin-left text-white/75 bg-black/50 p-3 backdrop-blur-lg z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
