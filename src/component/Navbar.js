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
      <Link to="/" className={activeLink === "/" ? "active" : ""}>
        Work <span>/</span>
      </Link>
      <Link
        to="/About"
        className={activeLink.startsWith("/About") ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="/Notes"
        className={activeLink.startsWith("/Notes") ? "active" : ""}
      >
        Notes
      </Link>
      <Link
        to="/Photos"
        className={activeLink.startsWith("/Photos") ? "active" : ""}
      >
        Photos
      </Link>

      <Link
        to="/Contact"
        className={activeLink.startsWith("/Contact") ? "active" : ""}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
