import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    robot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.robot) {
      alert("Please confirm you are not a robot.");
      return;
    }

    console.log("Form submitted:", form);
    alert("Thank you! Your message has been sent.");
    setForm({ name: "", email: "", message: "", robot: false });
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>

          <div className="checkbox-container">
            <input
              type="checkbox"
              name="robot"
              checked={form.robot}
              onChange={handleChange}
            />
            <label>I am not a robot</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}