import React, {useRef} from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mev7bzn', 'template_tiodv1m', form.current, 'EEtC1iykjM083KR6U');
    e.target.reset();
  };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact_container'>
          <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon'/>
              <h4>E-mail</h4>
              <h5>hajjemhabib62@gmail.com</h5>
              <a href='mailto:hajjemhabib62@gmail.com' target='_blank'>send a message</a>
            </article>
            <article className='contact_option'>
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>Habib Hajjem</h5>
              <a href='https://m.me/habib.hajjem' target='_blank'>send a message</a>
            </article>
            <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+216 50 500 429</h5>
              <a href='https://api.whatsapp.com/send?phone=+21650500429' target='_blank'>send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your full name' required></input>
              <input type='email' name='email' placeholder='Your e-mail' required></input>
              <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact