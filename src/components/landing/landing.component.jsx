import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-transparent.png";
import "./landing.styles.scss";

const Landing = () => {
  return (
    <div className='landing'>
      <div className='trans-background'></div>
      <img src={logo} alt='company-logo' className='company-logo' />
      <Link className='btn btn-primary' to='/appointment'>
        Book An Appointment
      </Link>
      <h2 className='banner-message'>Relax, Enjoy, & Juvenate</h2>
    </div>
  );
};
export default Landing;
