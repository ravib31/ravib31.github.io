import React from "react";
import "./contact.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
    emailjs
      .sendForm(
        "service_79xlxvn",
        "template_e2fkb1q",
        e.currentTarget,
        "QTlP4DOb2KiJ7YTYp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
    alert("Thank You for sending massage");
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option" id="contact-email">
            <HiOutlineMailOpen className="contact_option-icon" />
            <h4>Email</h4>
            {/* <h5>Ravi bhashkar</h5> */}
            <a
              rel="noreferrer"
              href="mailto:ravibhashkar0102@gmail.com"
              target="_blank"
            >
              Send a massage
            </a>
          </article>

          <article className="contact_option" id="contact-linkedin">
            <AiFillLinkedin />
            <h4>Linkedin</h4>
            {/* <h5>Ravi bhashkar</h5> */}
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/ravi-bhashkar/"
              target="_blank"
            >
              Send a massage
            </a>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
            className="h-20"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="h-20"
          />
          <textarea
            type="text"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
