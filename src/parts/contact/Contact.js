import React from 'react';
import './Contact.css';

const Contact = () => {

  const email = require('./email.png');

  return (
    <section className="contact App__section">
      <h1 className="contact__header">
        You can send me an email at...
      </h1>
      <div className="contact__email-container">
        <img className="contact__email" src={email} />
      </div>
      <h1 className="contact__outro">
        ...for business or for a chat.
      </h1>
    </section>
  );
}

export default Contact;