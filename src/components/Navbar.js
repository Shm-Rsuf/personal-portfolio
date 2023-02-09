import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapNavLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const linkArr = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useGsapNavLinkReveal(linkArr, 2);
  return (
    <nav
      className={`navbar flex justify-between container mx-auto ${
        footerNav ? "mt-40" : "mt-14"
      } uppercase`}
    >
      <div>
        <HashLink smooth to="#home" className="link-item" ref={link1Ref}>
          {footerNav ? "Go To Top" : "Usuf Ali"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-2">
        <li>
          <HashLink smooth to="#home" className="link-item" ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item" ref={link3Ref}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item" ref={link4Ref}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item" ref={link5Ref}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item" ref={link6Ref}>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1999X1u2dC9h4B2nlhbC0rBL_1y55aK_aSdfTTvsAwHQ/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
            ref={link7Ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
