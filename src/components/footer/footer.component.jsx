import React from "react";
import fbGif from "../../assets/fb.gif";
import instaGif from "../../assets/instagram.gif";
import "./footer.styles.scss";

const Footer = () => (
  <footer className='footer'>
    <div className='copyright'>
      <h3>&copy; 2020 The Four Magic Hands Massage</h3>
      <h4>Terms of Use | Privacy Policy</h4>
    </div>
    <div className='socialMedia'>
      <a href='https://www.facebook.com/The-Four-Magic-Hands-Massage-Inc-109406340722184'>
        <img src={fbGif} alt='' className='fb-gif' />
      </a>
      <a href='https://www.instagram.com/thefourmagichandsmassage/'>
        <img src={instaGif} alt='' className='insta-gif' />
      </a>
    </div>
  </footer>
);

export default Footer;
