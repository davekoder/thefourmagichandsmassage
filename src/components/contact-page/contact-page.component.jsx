import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

import logo from "../../assets/logo-transparent.png";
import "./contact-page.styles.scss";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [additional, setAdditional] = useState("");
  const templateParams = {
    from_name: name,
    from_email: email,
    from_mobile: mobileNumber,
    to_name: "The Four Magic Hands Massage",
    message_html: message,
    additional_message: additional,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, mobileNumber, message, additional);

    emailjs
      .send(
        "service_6ojny4j",
        "general_response",
        templateParams,
        "user_Pck0m4WFfcD0wp0WjY7yj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Inquiry Sent");
          toast.success("We will contact you through email or phone");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMobileNumber("");
    setMessage("");
    setAdditional("");
  };

  return (
    <div className='contact-page'>
      <img
        src='https://gdurl.com/q898'
        alt='background'
        className='contact-us-bgImage'
      />

      <form onSubmit={handleSubmit} className='contact-form'>
        <div className='contact-details'>
          <div className='contact-name'>
            <label>Full Name:</label>
            <input
              type='text'
              className='form-control'
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder='John/Jane Doe'
            />
          </div>
        </div>
        <div className='contact-us-message'>
          <div className='user-contact-info'>
            <div className='contact-email'>
              <label>Email:</label>
              <input
                type='email'
                className='form-control'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder='Your Email'
              />
            </div>
            &nbsp;
            <div className='contact-number'>
              <label>Mobile:</label>
              <input
                type='tel'
                className='form-control'
                required
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
                placeholder='123-456-7890'
                pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
              />
            </div>
          </div>
          <div className='contact-message'>
            <label>Message:</label>
            <textarea
              className='contact-message form-control'
              name='message'
              id=''
              cols='40'
              rows='4'
              required
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder='Your Message or Inquiry'
            ></textarea>
          </div>
          <div className='contact-additional'>
            <label>Additional Message:</label>
            <textarea
              className='contact-additional form-control'
              name='additionalMessage'
              id=''
              cols='40'
              rows='2'
              required
              onChange={(e) => setAdditional(e.target.value)}
              value={additional}
              placeholder='Any Additional Requests'
            ></textarea>
          </div>
        </div>

        <button className='btn btn-primary contact-submit'>Submit</button>
        <div className='image'>
          <img src={logo} alt='form' className='contact-form-img' />
        </div>
      </form>
    </div>
  );
};
export default ContactPage;
