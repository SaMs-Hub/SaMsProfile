import React from "react";
import Styles from "./Footer.module.css";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <section id="contact" className={Styles.footer}>
      <div className={Styles.social}>
        <a
          href="https://github.com/SaMs-Hub"
          target="github"
          title="Github"
        >
          <FiGithub />
        </a>

        <a
          href="https://leetcode.com/SaMs-Hub/"
          target="github"
          title="Github"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.linkedin.com/in/shafi-khan-/"
          target="linkedin"
          title="Linkedin"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://twitter.com/SaMs_Hub"
          target="twitter"
          title="Twitter"
        >
          <FiTwitter />
        </a>

      </div>

      <p>Copyright © SaMs-Hub 2022 All Rights Reserved</p>
    </section>
  );
};

export default Footer;
