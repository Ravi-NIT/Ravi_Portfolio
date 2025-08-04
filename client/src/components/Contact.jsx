import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser"; // ✅ EmailJS import
import "../index.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_w1ktqjq";
    const templateId = "template_ex6zn9n";
    const publicKey = "MO2TeQzkR1S_JR0M3";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Ravi Shankar Pandey",
      message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    try {
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (result.status === 200 || result.text === "OK") {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Could not send message. Try again later.",
      });
    }
  };

  return (
    <div className="services-container contact-container">
      <div className="contact-left">
        <h2 className="services-heading">Get In Touch</h2>
        <h3 className="services-subtitle">Contact Me</h3>
        <p><strong>Email:</strong> ravishankar123.2014@gmail.com</p>
        <p><strong>Phone:</strong> +91 8825334806</p>
        <p>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/918825334806"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#25D366", fontWeight: "bold" }}
          >
            <FaWhatsapp style={{ verticalAlign: "middle" }} /> Chat Now
          </a>
        </p>

        <div className="social-icons">
          <a href="https://github.com/Ravi-NIT" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="linkedin.com/in/ravi-shankar-pandey-a28969240" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ravibabu2014?igsh=MTNkdjE5aXZqeGR0cA==" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
