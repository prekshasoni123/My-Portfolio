import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import {useRef} from 'react'


export default function Contact() {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wgotv7b', 'template_mdjinnl', form.current, '3_p8v4g8Iqsk_ENVJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Let's Talk</h5>
    <h2>CONTACT ME</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <a href='mailto: divysoni2812@gmail.com' target='_blank'>Send your message</a>
        </article>

        <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <a href='https://api.whatsapp.com/send?phone+919313494954' target='_blank'>Send your message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Enter your name' required/>
        <input type='email' name='email' placeholder='Enter your email' required/>
        <textarea name='message' rows="7" placeholder='Your message'></textarea>
        <div className='btn-text-right'>
        <button type='submit' className='btn btn-primary'>Send</button>
        </div>
      </form>
    </div>
    </section>
  )
}
