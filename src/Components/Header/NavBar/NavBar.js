import React, { useState } from "react";
import Styles from "./NavBar.module.css";

import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";


const NavBar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => setActiveLink("#home")}
            className={activeLink === "#home" ? Styles.active : ""}
          >
            <i>
              <AiOutlineHome />
            </i>
            <span>Home</span>
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setActiveLink("#about")}
            className={activeLink === "#about" ? Styles.active : ""}
          >
            <i>
              <BsPerson />
            </i>
            <span>About</span>
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={() => setActiveLink("#skills")}
            className={activeLink === "#skills" ? Styles.active : ""}
          >
            <i>
              <AiOutlineBulb />
            </i>
            <span>Skills</span>
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setActiveLink("#projects")}
            className={activeLink === "#projects" ? Styles.active : ""}
          >
            <i>
              <AiOutlineProject />
            </i>
            <span>Projects</span>
          </a>
        </li>


      </ul>
    </nav>
  );
};

export default NavBar;
