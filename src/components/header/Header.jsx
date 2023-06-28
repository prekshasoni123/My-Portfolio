import React from 'react'
import CTA from './CTA'
import ME from '../../required/Photo.jpeg'
import './header.css'

function Header() {
  return (
    <header>
    <div className='container header__container'>
      <h3>Hello!</h3>
      <h1>I'm Preksha Soni</h1>
      <h2 className='text-light'>Web Developer</h2>
      <h3 className='text-light'>from Ahmedabad, Gujarat</h3>
      <CTA/>

      <div className='me'>
        <img src={ME} alt="me"/>
      </div>

      {/* <a href='#contact' className='scroll__down'>Scroll Down</a> */}
    </div>
    </header>
    
  )
}

export default Header;
