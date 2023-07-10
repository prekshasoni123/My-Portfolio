import React from 'react'
import './nav.css'
//import {a} from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {

  const [activeNav, setActiveNav]=useState('#header')
  return (

  <nav>
    <a href='#' onClick={()=>setActiveNav('#header')} className={activeNav==='#header'? 'active': ''}>Home</a>
    <a href='#education' onClick={()=>setActiveNav('#education')} className={activeNav==='#education'? 'active': ''}>Education</a>
    <a href='#skills' onClick={()=>setActiveNav('#skills')} className={activeNav==='#skills'? 'active': ''}>Skills</a>
    <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects'? 'active': ''}>Projects</a>
    <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''}>Contact</a>

  </nav>

  )
}

