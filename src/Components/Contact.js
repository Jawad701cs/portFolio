import React from 'react';
import '../Styles/Contact.css';
import {FaEnvelope,FaPhoneAlt} from 'react-icons/fa'
function Contact() {
  return (
    <div className="contact-container">
      <h1><u>Contacts</u></h1>
      <div className="contact-info">
        <div>
          <FaEnvelope size={20} style={{color:"white"}}/>  : 2021cs701@student.uet.edu.pk
        </div>
        <div>
         <FaPhoneAlt size={20} style={{color:"white"}}/> : +923486758450
        </div>
      </div>
    </div>
  );
}

export default Contact;
