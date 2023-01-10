import React from "react";
import './ContactMe.css';

const ContactMe = () => {
    return(
        <div>
        <div className="bg-base-200 p-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-3">
    <div className="text-center w-[300] lg:w-full">
      <h1 className="text-7xl font-bold">Contact Me</h1>
    </div>
    <div className="w-[300] lg:w-full flex flex-col justify-center items-center">
        <form>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message"></textarea>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
  </div>
  </div>
</div>
    );
};

export default ContactMe;