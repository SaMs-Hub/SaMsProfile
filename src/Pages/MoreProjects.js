import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Styles from "./MoreProjects.module.css";

import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";

const MoreProjects = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuOpen = (
    <TiThMenuOutline
      className={Styles.hamBurger}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    />
  );

  const menuClose = (
    <RiCloseLine
      className={Styles.hamBurger}
      onClick={() => setMenuIsOpen(!menuIsOpen)}
    />
  );

  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.goBack}>
          <NavLink to="/">Go Back Home</NavLink>
        </div>
        {menuIsOpen ? menuClose : menuOpen}

        {menuIsOpen && (
          <nav className={`${Styles.nav} ${Styles.mobileNav}`}>
            <ul>
              <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <NavLink
                  to="/moreProjects/allProjects"
                  className={(navData) =>
                    navData.isActive ? Styles.active : ""
                  }
                >
                  All Projects
                </NavLink>
              </li>
              <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <NavLink
                  to="/moreProjects/reactProjects"
                  className={(navData) =>
                    navData.isActive ? Styles.active : ""
                  }
                >
                  React Projects
                </NavLink>
              </li>
              <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <NavLink
                  to="/moreProjects/javaScriptProjects"
                  className={(navData) =>
                    navData.isActive ? Styles.active : ""
                  }
                >
                  JavaScript Projects
                </NavLink>
              </li>
              <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
                <NavLink
                  to="/moreProjects/otherProjects"
                  className={(navData) =>
                    navData.isActive ? Styles.active : ""
                  }
                >
                  NodeJS Projects
                </NavLink>
              </li>
            </ul>
          </nav>
        )}

        <nav className={`${Styles.nav} ${Styles.desktopNav}`}>
          <ul>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <NavLink
                to="/moreProjects/allProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                All Projects
              </NavLink>
            </li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <NavLink
                to="/moreProjects/reactProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                React Projects
              </NavLink>
            </li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <NavLink
                to="/moreProjects/javaScriptProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                JavaScript Projects
              </NavLink>
            </li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}>
              <NavLink
                to="/moreProjects/otherProjects"
                className={(navData) => (navData.isActive ? Styles.active : "")}
              >
                NodeJS Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default MoreProjects;
