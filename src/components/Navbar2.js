import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useGsapNavLinkReveal } from "../hooks/gsap";

const Navbar2 = ({ footerNav }) => {
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
      className={`navbar flex items-center justify-between container border-b-[1px]
        border-gray-900 mx-auto h-24 ${footerNav ? "mt-40" : ""} uppercase`}
    >
      <div>
        <HashLink smooth to='#home' className='link-item' ref={link1Ref}>
          {footerNav ? "Go To Top" : "Usuf Ali"}
        </HashLink>
      </div>
      <ul className={`links flex gap-4 ${footerNav && "flex-col"}`}>
        <li>
          <HashLink smooth to='#home' className='link-item' ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#projects' className='link-item' ref={link3Ref}>
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#skills' className='link-item' ref={link4Ref}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#about' className='link-item' ref={link5Ref}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='#contact' className='link-item' ref={link6Ref}>
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1-kShfd5skxs8tuQgsZePOmCYRuwUceUa/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
            className='link-item'
            ref={link7Ref}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar2;
