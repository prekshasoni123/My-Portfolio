import React from 'react'
import CV from '../../required/CV.pdf'
import {FaDownload} from 'react-icons/fa'
import './header.css'

export default function() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>My CV  <FaDownload/></a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>

    </div>
  )
}


