import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'

export default function Contact() {
  return (
    <section id='contact'>
    <h2>Contact me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>divysoni2812@gmail.com</h5>
          <a href='mailto: divysoni2812@gmail.com' target='_blank'>Send your message</a>
        </article>

        <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <a href='https://api.whatsapp.com/send?phone+919313494954' target='_blank'>Send your message</a>
        </article>
      </div>
      <form action=''>
        <input type='text' name='name' placeholder='Enter your name' required/>
        <input type='email' name='email' placeholder='Enter your email' required/>
        <textarea name='message' rows="7" placeholder='Your message'></textarea>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
    </div>
    </section>
  )
}
