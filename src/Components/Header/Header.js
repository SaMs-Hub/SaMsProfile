import React from "react";
import Styles from "./Header.module.css";

import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = (props) => {
  return (
    <header className={Styles.header}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
