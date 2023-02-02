import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between container mx-auto mt-20 uppercase">
      <div>
        <HashLink smooth to="#home" className="link-item">
          Rebeka Parker
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-2">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <a
            href="http://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
