import React from 'react';
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/IMG_9610.JPG";
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header id='Header'>
      <div id='home' className='container header__container'>
        <h3>HY! I AM </h3>
        <h1 id='user-detail-name'>RAVI BHASHKAR</h1>
       
        <h4 className='text-light'>MERN Stack Developer</h4>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img className='home-img' src={ME} alt="me"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header