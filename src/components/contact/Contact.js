import React from "react";
import "./Contact.css";

import * as siteConstants from "../../shared/Constants";

function Contact() {
  const contact = siteConstants.CONTACT;

  return (
    <div className="contactContainer">
      <span className="contact">{contact}</span>
    </div>
  );
}

export default Contact;
