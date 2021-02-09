import React from "react";
import Landing from "../../components/landing/landing.component";
import Footer from "../../components/footer/footer.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className='home'>
      <video autoPlay loop muted className='videoBackground'>
        <source src='https://gdurl.com/u2cI' type='video/mp4' />
      </video>
      <Landing />
      <Footer />
    </div>
  );
};

export default Home;
