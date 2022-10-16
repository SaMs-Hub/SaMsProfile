import React from "react";
import Styles from "./AllProjects.module.css";

import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { HiCode } from "react-icons/hi";

import PROJECTS_DATA from "../Components/ProjectsData";

const AllProjects = () => {
  let projectsList = PROJECTS_DATA.map((project_data) => (
    <li className={Styles.list} key={project_data.id}>
      <div className={Styles.top}>
        <div className={Styles.icon}>{project_data.icon}</div>

        <div className={Styles.links}>
          <a
            href={project_data.githubLink}
            target="github"
            title="View Source Code"
          >
            <FiGithub />
          </a>
          {
            project_data.liveLink != undefined && <a
              href={project_data.liveLink}
              target="netlify"
              title="Live Preview"
            >
              <FiExternalLink />
            </a>
          }
        </div>
      </div>

      <div className={Styles.bottom}>
        <h1>{project_data.title}</h1>
        <p>{project_data.description}</p>

        <h3>
          <span>
            <HiCode />
          </span>
          {project_data.toolsUsed}
        </h3>
      </div>
    </li>
  ));

  return (
    <section id="projects" className="section">
      <div className="section_heading">
        <h1 className={Styles.heading}>
          <span>All Projects</span>
        </h1>
      </div>

      <div className={Styles.projects}>
        <div className={Styles.content}>
          <ul>{projectsList}</ul>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
