import React from "react";
import Styles from "./Hero.module.css";

import ShafisResume from "../../assets/Shafi'sResume.pdf";

import heroPic from "../../assets/heroPic.gif";

const Hero = () => {
  return (
    <section id="home" className="section">
      <div className={Styles.hero}>
        <div className={Styles.hero_left}>
          <h3>Hello World,</h3>
          <h4>My name is,</h4>
          <h1>Shafi Khan.</h1>
          <h2>I Write Code for Internet. </h2>
          <p>
            A Frontend Engineer with a strong Foundation in Technology and
            Frameworks of today's Standards like  <span> JavaScript</span>, <span> Typescript</span>, <span>React</span>, <span> NextJS</span>, <span>React Native</span>
            etc. <br /> <br /> I heartily enjoy
            Building websites and web applications with attention to detail
          </p>

          <div className={Styles.buttons}>
            <a href={ShafisResume} download className="button">
              Resume
            </a>


          </div>
        </div>

        <div className={Styles.hero_right}>
          <img src={heroPic} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
