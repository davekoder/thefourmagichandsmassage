import React, { useEffect } from "react";
import "./about-history.styles.scss";

const AboutHistory = () => {
  useEffect(() => {
    let el = document.querySelector(".container");
    el.classList.add("fade-in");
  }, []);
  return (
    <div className='about-history-section'>
      <div className='container'>
        <h1>HISTORY</h1>
        <section className='first-p'>
          <img src='https://gdurl.com/VwWG' alt='about-histroy-image1' />
          <h2>
            Massage and wellness has always been a need for stressed out people
            nowadays. It brings relaxation and balance to a persons life that
            leads to being more productive and creative.
          </h2>
        </section>
        <section className='second-p'>
          <h2>
            The founders of The Four Magic Hands Massage had foreseen this way
            of reducing stress and inducing more wellness into one's life. That
            is why they sought out to train themselves and improve their massage
            therapy skills.
          </h2>
          <img src='https://gdurl.com/yUFz' alt='about-histroy-image2' />
        </section>
        <section className='third-p'>
          <img src='https://gdurl.com/edg2' alt='about-histroy-image3' />
          <h2>
            They have finished their professional massage therapy skills back in
            2016 at Makami College and has been helping out people stay relaxed
            and stress free.
          </h2>
        </section>
      </div>
    </div>
  );
};
export default AboutHistory;
