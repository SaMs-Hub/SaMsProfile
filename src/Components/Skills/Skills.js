import React from "react";
import Styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section_heading">
        <h1>
          <span>My Skills</span>
        </h1>
      </div>

      <div className={Styles.skills}>
        <div className={Styles.skills_top}>
          <form className={Styles.skills_top_left}>
            <div>
              <label htmlFor="JavaScript">JavaScript</label>
              <div className={Styles.range_background}>
                <div style={{ width: "88%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="C++">C++</label>
              <div className={Styles.range_background}>
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="Python">Python</label>
              <div className={Styles.range_background}>
                <div style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="ReactJS">ReactJS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "85%" }}></div>
              </div>
            </div>
          </form>

          <form className={Styles.skills_top_right}>
            <div>
              <label htmlFor="React Native">React Native</label>
              <div className={Styles.range_background}>
                <div style={{ width: "65%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="NodeJS">NodeJS</label>
              <div className={Styles.range_background}>
                <div style={{ width: "70%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="MongoDB">MongoDB</label>
              <div className={Styles.range_background}>
                <div style={{ width: "55%" }}></div>
              </div>
            </div>
            <div>
              <label htmlFor="Firebase">Firebase</label>
              <div className={Styles.range_background}>
                <div style={{ width: "79%" }}></div>
              </div>
            </div>
          </form>
        </div>

        <div className={Styles.skills_bottom}>
          <h2>Some of the Tools and Practices I use in my development are:</h2>
          <div className={Styles.skills_bottom_division}>
            <div>
              <li>Git</li>
              <li>VScode</li>
              <li>Chrome DevTools</li>

              <li>Responsive web-design</li>
            </div>

            <div>
              <li>Material UI</li>

              <li>Github</li>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
