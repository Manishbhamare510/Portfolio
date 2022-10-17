import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {SiMessenger} from 'react-icons/si'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wlma1d3', 'template_ouf5g3p', form.current, '8g8L9FEIfqFKWwe8H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mdbhamare2002@gmail.com</h5>
            <a href="mailto:krushnapulate3082@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <SiMessenger className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Manish Bhamare</h5>
            <a href="https://www.linkedin.com/in/manish-bhamare-64b337203/" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Manish Bhamare</h5>
            <a href="https://api.whatsapp.com/send?phone=917620367302" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='If you like this site please let us know'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact