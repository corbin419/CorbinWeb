import React, { useState, useEffect } from "react";
import "../CSS/NavBar.css";
// import Logo from "../Images/Logo.png";
import { useScrollPosition } from "../Hooks/useScrollPosition";
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
  const [Menu, setMenu] = useState("Menu-toggler");
  const [NavMenu, setNavMenu] = useState("Nav-Menu");
  const [NavBar, setNavBar] = useState("NavBar");
  const [isMenuopen, setIsMenuopen] = useState(false);

  const MenuClick = () => {
    if (!isMenuopen) {
      setMenu("Menu-toggler active");
      setNavMenu("Nav-Menu active");
    } else {
      setMenu("Menu-toggler");
      setNavMenu("Nav-Menu");
    }
    setIsMenuopen(!isMenuopen);
  };
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 900) {
      setNavBar("NavBar sticky");
      setNavMenu("Nav-Menu sticky");
      setMenu("Menu-toggler sticky");
    } else {
      setNavBar("NavBar");
      setMenu("Menu-toggler");
      setNavMenu("Nav-Menu ");
    }
  }, [scrollPosition]);

  return (
    <nav className={NavBar}>
      <div className="inner-width">
        <HashLink smooth to ="/#Home" className="Logo">
          Corbin's Web
        </HashLink>
        <button className={Menu} onClick={MenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={NavMenu}>
          <HashLink smooth to="/#Home" id="Menu-Btn">
            Home
          </HashLink>
          <HashLink smooth to="/#AboutMe" id="Menu-Btn">
            About Me
          </HashLink>
          <HashLink smooth to="/#Works" id="Menu-Btn">
            Works
          </HashLink>
          <HashLink smooth to="/#Contact" id="Menu-Btn">
            Contact
          </HashLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
