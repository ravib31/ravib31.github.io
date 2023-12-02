// import React from "react";
// import "./nav.css";
// import { useState } from "react";
// import { Button } from "@chakra-ui/react";
// import Resume from "../../assets/Ravi_Bhashkar_Resume.pdf";

// function Navbar() {
//   const [activeNav, setActiveNav] = useState("#");
//   const URL =
//     "https://drive.google.com/file/d/16UfE8TwDUiUAeWXw9AwWy-iCEsXpPceX/view?usp=sharing";
//   return (
//     <nav id="nav-menu">
//       <a
//         href="#Header"
//         class = "nav-item"
//         active-color="red"
//         onClick={() => setActiveNav("#Header")}
//         className={activeNav === "#Header" ? "active" : "nav-link home"}
//       >
//         Home
//       </a>
//       <a
//         href="#about"
//         class = "nav-item"
//         active-color="yellow"
//         onClick={() => setActiveNav("#about")}
//         className={activeNav === "#about" ? "active" : "nav-link about"}
//       >
//         About
//       </a>
//       <a
//         href="#skills"
//         class = "nav-item"
//         active-color="green"
//         onClick={() => setActiveNav("#skill")}
//         className={activeNav === "#skills" ? "active" : "nav-link skills"}
//       >
//         Skills
//       </a>
//       <a
//         href="#tools"
//         class = "nav-item"
//         active-color="orange"
//         onClick={() => setActiveNav("#tools")}
//         className={activeNav === "#tools" ? "active" : "nav-link tools"}
//       >
//         Tools
//       </a>
//       <a
//         href="#portfolio"
//         onClick={() => setActiveNav("#portfolio")}
//         className={activeNav === "#portfolio" ? "active" : "nav-link projects"}
//       >
//         Projects
//       </a>
//       <a
//         href="#contact"
//         onClick={() => setActiveNav("#contact")}
//         className={activeNav === "#contact" ? "active" : "nav-link contact"}
//       >
//         Contact
//       </a>
//       <Button>
//         <a
//           onClick={() => window.open(URL, "_blank")}
//           href={Resume}
//           download={true}
//           class="nav-link resume"
//           target="_blank"
//         >
//           Resume
//         </a>{" "}
//       </Button>
//     </nav>
//   );
// }

// export default Navbar;






import React, { useState } from "react";

import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Button } from "@mui/material";
import Resume from "../../assets/Ravi_Bhashkar_Resume.pdf";




function Navbar () {
 
  const [nav, setNav] = useState(false);
  const handleClickHam = () => {
    setNav(!nav);
  };
  return (
    <div id="nav-menu"   className="sticky top-0 w-full h-[75px] flex justify-between items-center px-4 bg-[#000] text-white z-50">
      <div className="flex items-center h-full py-4">
        <Link  to="home" smooth={true} offset={-500} duration={500}>
        <a href="#" className="text-4xl cursor-pointer text-[#38bdf8]">
        रV
      </a>
        </Link>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
      <li className="md: py-4  items-center w-28">
          <Link className="nav-link home" to="#Header" smooth={true} offset={-500} duration={500}>
            <p  className="text-xl cursor-pointer">Home</p>{" "}
          </Link>
        </li>
        <li className="md:py-4  items-center w-28">
          <Link className="nav-link about" to="#about" smooth={true} offset={10} duration={500}>
            <p className="text-xl cursor-pointer">About Me</p>{" "}
          </Link>
        </li>
        <li className="md:py-4  items-center w-28">
          <Link className="nav-link skills " to="#skills" smooth={true} offset={-100} duration={500}>
            <p className="text-xl cursor-pointer">Skills</p>{" "}
          </Link>
        </li>
        <li className="md:py-4  items-center w-28">
        <Link  to="#tools" smooth={true} offset={-100} duration={500}>
          <p className="text-xl cursor-pointer"> Tools </p>{" "}
        </Link>
        </li>
        <li className="md:py-4  items-center w-28">
          <Link className="nav-link projects" to="#portfolio" smooth={true} offset={-20} duration={500}>
            <p className="text-xl cursor-pointer"> Projects</p>{" "}
          </Link>
        </li>
        
        <li className="md:py-4  items-center w-48">
          <Link className="nav-link contact " to="#contact" smooth={true} offset={-120} duration={500}>
            <p className="text-xl cursor-pointer">Contact Me</p>{" "}
          </Link>
        </li>
        <li className= "md:py-3  items-center w-28 ">
          <Button
            id="resume-button-1"
            variant="contained"
           
            startIcon={<FaDownload />}
            sx={{
              color: "white",
              // backgroundColor: "orange",
              
              
              fontWeight: "bolder",
              fontFamily: "",
              ":hover": {
                // bgcolor: "white",
                // color: "black",
                
              },
            }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/15krbVjrh2kkmaQzJ4lsvU3QKJ6KnTkcN/view?usp=sharing"
              );
            }}
          >
            <a   id="resume-link-1" className="nav-link resume  "
              href={Resume}
              download="Ravi_Bhashkar_Resume.pdf"
            >
              Resume{" "}
            </a>
          </Button>
        </li>
      </ul>

      {/* hamdburger */}
      <div onClick={handleClickHam} className="md:hidden z-10">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile */}

      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4  items-center w-48">
          {" "}
          <Link
            onClick={handleClickHam}
            to="home"
            smooth={true}
            offset={-500}
            duration={500}
          >
            <p className="text-xl mx-auto">Home</p>{" "}
          </Link>
        </li>
        <li className="py-4  items-center w-48">
          {" "}
          <Link
            onClick={handleClickHam}
            to="about"
            smooth={true}
            offset={10}
            duration={500}
          >
            <p className="text-xl mx-auto">About Me</p>{" "}
          </Link>
        </li>
        <li className="py-4 w-48 items-center">
          <Link
            onClick={handleClickHam}
            to="skills"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p className="text-xl mx-auto">Skills</p>{" "}
          </Link>
        </li>
        <li className="py-4 cursor-pointer w-48 items-center">
          {" "}
          <Link
            onClick={handleClickHam}
            to="tools"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p className="text-xl mx-auto"> Tools</p>{" "}
          </Link>
        </li>
        <li className="py-4  w-48 items-center">
          {" "}
          <Link
            onClick={handleClickHam}
            to="portfolio"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p className="text-xl mx-auto"> Projects</p>{" "}
          </Link>
        </li>
       
        <li className="py-4  items-center w-48">
          {" "}
          <Link
            onClick={handleClickHam}
            to="contact"
            smooth={true}
            offset={-100}
            duration={500}
          >
            <p className="text-xl mx-auto"> Contact Me </p>{" "}
          </Link>
        </li>
        <li className="py-4 px-2 items-center w-48">
          <Button
            variant="contained"
            startIcon={<FaDownload size={20} />}
            sx={{
              color: "white",
              // backgroundColor: "orange",
              borderColor: "yellow-500",
              fontWeight: "bold",
              fontSize: "10px",
              fontFamily: "",
              ":hover": {
                // bgcolor: "pink",
                // color: "white",
              },
              width: "100px",
              padding: "10px 40px 10px 40px",
            }}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/15krbVjrh2kkmaQzJ4lsvU3QKJ6KnTkcN/view?usp=sharing"
              );
            }}
          >
            <a
              href={Resume}
              download="Ravi_Bhashkar_Resume.pdf"
            >
              Resume{" "}
            </a>
          </Button>
        </li>
      </ul>
    


    </div>
  );
};
export default Navbar;