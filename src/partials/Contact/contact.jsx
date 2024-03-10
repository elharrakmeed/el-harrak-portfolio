import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40bpv2d",
        "template_9yhvxvv",
        form.current,
        "Z5bQhyATJr0yDtYx1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="parentContact">
        <center>
        <h6>
            *Don't forget to include your name in the message input*
        </h6>
        </center>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label> <br />
          <input type="text" name="user_name" /> <br />
          <label>Email</label> <br />
          <input type="email" name="user_email" /> <br />
          <label>Message</label> <br />
          <textarea name="message" rows='5' /> <br />
          <button type="submit" > Send </button>
        </form>
      </div>
    </>
  );
}
