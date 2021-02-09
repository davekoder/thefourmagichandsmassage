import React from "react";
import "./services-page.styles.scss";

const ServicesPage = () => {
  const backgroundImage = "https://gdurl.com/eJTz";

  return (
    <div className='services-page'>
      <img src={backgroundImage} alt='bg-background' className='bgbackground' />
      <h1 className='title'>Services Offered:</h1>
      <div className='services-list'>
        <div className='services-card'>
          <h2>Therapeutic Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Swedish Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Lymphatic Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Prenatal Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Hot Stone Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Cupping Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Deep Tissue Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Rapid Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Baby Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Facial Massage</h2>
        </div>
        <div className='services-card'>
          <h2>Foot Massage</h2>
        </div>
        <div className='info-logo'>
          <div className='info-card'>
            <h3>Monday to Sunday - 9AM to 9PM</h3>
            <h4>Last booking at 8PM</h4>
            <h4>New Clients and Walk-ins are WELCOME</h4>
          </div>
          <div className='info-logo-image'>
            <img src='https://gdurl.com/7jcs' alt='' />
          </div>
          <div className='services-info-transBG'></div>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
