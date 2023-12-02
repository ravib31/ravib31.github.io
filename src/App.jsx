import React from 'react'
import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Skill from './components/skills/Skill';
import Portfolio from './components/projects/Portfolio';
import Contact from './components/contact/Contact';
import { Box } from '@chakra-ui/react';
import Github from './components/github/Github';
import Tools from './components/tools/Tools';

const App = () => {
  return (
    <Box bg={"black"} color="white">
      <Navbar/>
      <Header/>
      <About/>
      <Skill/>
      <Tools/>
      <Github/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </Box>
  )
}

export default App
// bg={"#1f1f38"} color="white"