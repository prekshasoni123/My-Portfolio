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

//     < className='header_wrapper'>
//     <nav className="navbar navbar-expand-lg fixed-top">
//   <div className="container">
//     <a className="navbar-brand fs-4 fst-italic" href="#">Preksha Soni</a>
//     <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       {/* <span className="navbar-toggler-icon"></span> */}
//       <i className="fa-solid fa-bars-staggered navbar-toggler-icon"></i>
//     </button>
//     <div className="navbar-collapse collapse justify-content-end" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#header">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#education">Education</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#skills">Skills</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#my projects">My projects</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#contact">Contact me</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

