import React from "react";
import Styles from "./About.module.css";


import ProfilePic from "../../assets/ProfilePic.jpg";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section_heading">
        <h1>
          <span>About Me</span>
        </h1>
      </div>

      <div className={Styles.about}>
        <div className={Styles.about_left}>
          <p>
            Hello World, I am Shafi Khan, a <span>Software Developer </span>
            Living in Hyderabad, India. I describe myself as a passionate
            developer who loves Coding and building websites.
          </p>


          <p>
            I'm a Techie with a Zeal to Develop Softwares to solve Real-World Problems!
            I've keen interest in Startups and Developing Products that can make an beneficial impact over Peoples lives.
            A Good Team player who believes <span>Consistency and Hardwork beats Talent</span>!
            Loves to Read Productive Books and Playing AAA Titles to tackle boredom!!!

          </p>


        </div>

        <div className={Styles.about_right}>
          <img src={ProfilePic} alt="Shafi Khan" />
        </div>
      </div>
    </section>
  );
};

export default About;
