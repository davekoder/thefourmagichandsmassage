import React from "react";
import "./services-page.styles.scss";

const ServicesPage = () => {
  const backgroundImage = "https://gdurl.com/nq3P";

  return (
    <div className='services-page'>
      <img src={backgroundImage} alt='bg-background' className='bgbackground' />
    </div>
  );
};
export default ServicesPage;
