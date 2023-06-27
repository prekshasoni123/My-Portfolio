import React from 'react'
import CTA from './CTA'
import ME from '../../required/Photo.jpeg'
import './header.css'

function Header() {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hello!</h5>
      <h1>I Am Preksha Soni</h1>
      <h5 className='text-light'>Web Developer</h5>
      <h5 className='text-light'>from Ahmedabad, Gujarat</h5>
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
