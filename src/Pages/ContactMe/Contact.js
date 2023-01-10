import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ho45nlf', 'template_3geuc13', form.current, 'jupW2pXL7GrmQ5qWg')
      .then((result) => {
          console.log(result.text);
          form.current.reset(); // Clear the form
          alert('Your message has been sent successfully!'); // Show the alert
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">
            Contact Me
        </h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};