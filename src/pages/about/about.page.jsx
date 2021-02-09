import React from "react";
import AboutHistory from "../../components/about-history/about-history.component";
import Footer from "../../components/footer/footer.component";
import "./about.styles.scss";

const About = () => {
  return (
    <div className='about-history'>
      <video autoPlay loop muted className='about-bgVid'>
        <source src='https://gdurl.com/3mWS' type='video/mp4' />
      </video>
      <AboutHistory />
      <Footer />
    </div>
  );
};

export default About;
