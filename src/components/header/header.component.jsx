import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.jpg";
import "./header.styles.scss";

const Header = () => (
  <div className='header'>
    <div className='options'>
      <Link className='option' to='/about'>
        <h3>About</h3>
      </Link>
      <Link className='option' to='/team'>
        <h3>The Team</h3>
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
