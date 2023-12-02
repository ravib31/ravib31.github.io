import React from "react";
import "./about.css";
import ME from "../../assets/IMG_9610.JPG";
import { FaAward } from "react-icons/fa";
// import {FiUsers} from "react-icons";
import { VscFolderLibrary } from "react-icons/vsc";
import { Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <section id="about" className="about section">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div id="user-detail-intro">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2000 hr+ Coding</small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>6+ Completed</small>
          </article>
        </div>
        <p>
          A Fullstack Web Developer,skilled in web desigining utilities such as
          HTML, CSS, JavaScript, React, NodeJS, MongoDB . Profficient in
          creating responsive and secure websites. Have worked on individual and
          collaborative projects. Eger to learn upcoming new technologies and
          acquiring more knowledge. Currently looking forward to enhance my
          skill in a challenging work environment.
        </p>

        <a href="#contact" className=" ravi">
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default About;
