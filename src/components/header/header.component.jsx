import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/header-logo-transparent.png";
import "./header.styles.scss";

const Header = () => (
  <div className='header'>
    <div className='background'></div>
    <div className='options'>
      <Link className='option' to='/about'>
        <h3>About</h3>
      </Link>
      <Link className='option' to='/services'>
        <h3>Our Services</h3>
      </Link>
      <Link className='option' to='/'>
        <img src={logo} alt='company-logo' className='company-logo' />
      </Link>
      <Link className='option' to='/appointment'>
        <h3>Appointment</h3>
      </Link>
      <Link className='option' to='/contact'>
        <h3>Contact</h3>
      </Link>
    </div>
  </div>
);

export default Header;
