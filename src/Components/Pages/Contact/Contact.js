import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div id="ccontainer">
      <h2>Contact Us</h2>

      <div className="map">
        <iframe
          title="gmap"
          className="rounded shadow-lg"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.174971551687!2d76.65758911437463!3d30.51609110309381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665605730366!5m2!1sen!2sin"
          width="1000"
          height="400"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
