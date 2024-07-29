import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  // const navs = document.querySelectorAll("nav a");
  // navs.forEach((nav) => nav.addEventListener("click", () => {}));
  // return (
  //   <nav>
  //     <Link to="/" className="active">
  //       Work <span>/</span>
  //     </Link>
  //     <Link to="/About">About</Link>
  //     <a href="#">Projects</a>
  //     <a href="#">Notes</a>
  //     <a href="#">Contact</a>
  //   </nav>

  //);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav>
      <Link to="/" className={`first ${activeLink === "/" ? "active" : ""}`}>
        Work <span>/</span>
      </Link>

      <Link
        to="/about"
        className={activeLink.startsWith("/about") ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="/notes"
        className={activeLink.startsWith("/notes") ? "active" : ""}
      >
        Notes
      </Link>
      <Link
        to="/photos"
        className={activeLink.startsWith("/photos") ? "active" : ""}
      >
        Photos
      </Link>

      <Link
        to="/contact"
        className={activeLink.startsWith("/contact") ? "active" : ""}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
