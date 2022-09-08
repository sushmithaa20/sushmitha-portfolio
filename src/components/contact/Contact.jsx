import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send('service_acjpdzo', 'template_e4rz6ni', form.current, '2gik5RBPe4N-Bl7jLXvr_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <HiOutlineMail className='contact__option-icon' />
                <h4> Email </h4>
                <h5>sushmitha.20.2001@gmail.com</h5>
                <a href='mailto:sushmitha.20.2001@gmail.com' target="_blank">Send Message</a>
            </article>

            <article className="contact__option">
              <HiOutlineMail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>sushmitha.20.2001@gmail.com</h5>
                <a href='mailto:sushmitha.20.2001@gmail.com' target="_blank">Send Message</a>
            </article>

            <article className="contact__option">
              <BsWhatsapp  className='contact__option-icon'/>
                <h4>Whatsapp</h4>
               
                <a href='https://web.whatsapp.com/send?phone=+918088456813' target="_blank">Send Message</a>
            </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Fullname' requried></input>
          <input type="email" name="email" placeholder="Your Mail" required></input>
          <textarea name='message' rows="7" placeholder="Your Message" required ></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact