import React from "react";
import Styles from "./contact.module.css";
import ContactForm from "@/components/contactForm/ContactForm";

const Contact = () => {
  return (
    <>
      <div className={`global-container`} style={{ flex: "1" }}>
        <div className={`${Styles.contactUsSection}`}>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
