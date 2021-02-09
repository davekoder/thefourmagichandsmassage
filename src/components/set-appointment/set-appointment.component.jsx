import React, { useState } from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "./set-appointment.styles.scss";
import "react-calendar/dist/Calendar.css";

const SetAppointment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
  let [isEnabled, setIsEnabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newDateTime = selectedDate.toLocaleString();
    let dateTime = newDateTime.split(",").map((item) => item.trim());
    let aDate = dateTime[0];
    let aTime = dateTime[1];
    console.log(aDate, aTime);

    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobileNumber,
      to_name: "The Four Magic Hands Massage",
      check_date: aDate,
      check_time: aTime,
    };

    emailjs
      .send(
        "service_6ojny4j",
        "appointment_template",
        templateParams,
        "user_Pck0m4WFfcD0wp0WjY7yj"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Appointment Request Sent");
          toast.success("We will contact you through email or phone");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMobileNumber("");
  };

  return (
    <div className='appointment-page'>
      <img
        src='https://gdurl.com/j_CG'
        alt='background'
        className='setAppointment-bgImage'
      />

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className='set-appointment'>
          <div className='setAppointmentBackground'></div>
          <div className='appointmentCalendar'>
            <h1>Check Appointment Availability</h1>

            <form onSubmit={handleSubmit}>
              <div className='user-contact-info'>
                <div className='contact-name'>
                  <label>Full Name:</label>
                  <input
                    type='text'
                    className='form-control'
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoFocus
                  />
                </div>
                <div className='contact-email'>
                  <label>Email:</label>
                  <input
                    type='email'
                    className='form-control'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='contact-number'>
                  <label>Mobile:</label>
                  <input
                    type='tel'
                    className='form-control'
                    required
                    onChange={(e) => setMobileNumber(e.target.value)}
                    value={mobileNumber}
                    pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
                  />
                </div>
              </div>
              <br />
              {name && email && mobileNumber ? (
                <DateTimePicker
                  value={selectedDate}
                  disablePast
                  onChange={handleDateChange}
                  showTodayButton
                  label='Click me for the date'
                />
              ) : null}
              {name && email && mobileNumber
                ? (isEnabled = true)
                : (isEnabled = false)}
              <button className='btn btn-primary' disabled={!isEnabled}>
                Send Request
              </button>
            </form>
          </div>
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default SetAppointment;
