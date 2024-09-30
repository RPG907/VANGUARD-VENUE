"use client";
import React, { useState } from "react";
import Styles from "./contactForm.module.css";

const ContactForm = () => {
  const validation = (value) => {
    let error = {};

    if (!value.name) {
      error.name = "Nom et prenom sont requis !";
    }
    if (!value.email) {
      error.email = "Email est requis !";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
      error.email = "Email est non valid !";
    }
    if (!value.message) {
      error.message = "Message est requis !";
    } else if (value.message.length < 5) {
      error.message = "Message est tres court !";
    }
    if (!value.phone) {
      error.phone = "Le numéro de téléphone est requis !";
    } else if (value.phone.length < 10) {
      error.phone = "Le numéro de téléphone n'est pas valide.";
    }
    return error;
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSubnmit = (e) => {
    e.preventDefault();

    const validationErrors = validation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(formData);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors(validation({ ...formData, [name]: value }));
  };

  return (
    <>
      {isSubmitted && (
        <div className={Styles.confirmation}>Merci pour votre message !</div>
      )}

      {!isSubmitted && (
        <>
          <h1 className={`${Styles.title}`}> Contactez nous</h1>

          <form className={Styles.form} onSubmit={handleSubnmit}>
            <input
              type="text"
              name="name"
              placeholder="Nom et prénom"
              onChange={handleChange}
            />
            {errors.name && <div className={Styles.error}>{errors.name}</div>}
            <input
              type="email"
              name="email"
              placeholder="Courriel"
              onChange={handleChange}
            />
            {errors.email && <div className={Styles.error}>{errors.email}</div>}

            <input
              type="text"
              name="phone"
              placeholder="Phone no."
              onChange={handleChange}
            />
            {errors.phone && <div className={Styles.error}>{errors.phone}</div>}

            <textarea
              name="message"
              rows={4}
              placeholder="Comment pouvons-nous vous aider ?"
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className={Styles.error}>{errors.message}</div>
            )}

            <button type="submit">Envoyer</button>
          </form>
        </>
      )}
    </>
  );
};

export default ContactForm;
