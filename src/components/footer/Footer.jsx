import React from 'react'

import './footer.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>

      
      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/preksha-soni-b6a48b216/' target='_blank'><AiFillLinkedin/></a>
        <a href='https://github.com/prekshasoni123' target='_blank'><AiFillGithub/></a>
        <a href='https://www.instagram.com/preksha_2812/' target='_blank'><AiFillInstagram/></a>
      </div>

      <div className='footer_copyright'>
         <div>&copy; Preksha Soni</div>
      </div>

      
    </footer>
  )
}
