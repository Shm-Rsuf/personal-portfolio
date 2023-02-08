import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useGsapFooterReveal(footerRef);
  return (
    <footer className="footer my-40 text-center text-white/50 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear()},{" "}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-white duration-500"
        >
          Shah Md. Usuf
        </HashLink>
        . Crafted by yours truly
      </p>
    </footer>
  );
};

export default Footer;
