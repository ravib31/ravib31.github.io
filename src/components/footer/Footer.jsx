import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
import { CgMail } from "react-icons/cg";

function Footer() {
  return (
    <footer id="contact-phone">
      <a href="#" className="footer_logo">
        रV
      </a>
      <ul className="permalinks">
        <li>
          <a>Lucknow</a>
        </li>
        <li>
          <a>India</a>
        </li>
        <li>
          <a>
            <FcPhoneAndroid />
            +91-9198978261
          </a>
        </li>
        <li>
          <a>
            <CgMail />
            ravibhashkar0102@gmail.com
          </a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/ravi-bhashkar/">
          <BsLinkedin />
        </a>
        <a id="contact-github"href="https://github.com/atheist31">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy;रV.All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
