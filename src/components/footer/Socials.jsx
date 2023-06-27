import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

export default function Socials() {
  return (
    <div className='d-grid gap-2 d-flex justify-content-end margins'>
    <a href='https://www.linkedin.com/in/preksha-soni-b6a48b216/' target='_blank'><BsLinkedin/></a>
    <a href='https://github.com/prekshasoni123' target='_blank'><BsGithub/></a>
    
    </div>
  )
}