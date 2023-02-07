import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer my-40 text-center text-white/50 overflow-hidden">
      <p>
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
