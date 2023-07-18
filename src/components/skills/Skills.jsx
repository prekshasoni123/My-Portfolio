import React from 'react'
import './skills.css'
import Data from './Data'

const items=[
  {
    id:1,
    title:"HTML & CSS",
    answer:"I have good hands on working with HTML and CSS. I often use HTML & CSS to develop a good frontend part in my projects."
  },

  {
    id:2,
    title:"C/C++",
    answer:"I have good coding skills in C++ and I am practicing Data Structures and Algorithms on many of the coding platforms and further working to master in its concepts."
  },
  {
    id:3,
    title:"Bootstrap",
    answer:"I have worked with bootstrap in one of my projects and I'm intermediate level bootstrap user."
  },

  // {
  //   id:4,
  //   title:"Data Structures & Algorithms",
  //   answer:"I have sufficient knowledge of Data Structures and Algorithms and have been practicing it for a while now and further working to master in it."
  // },

  {
    id:4,
    title:"Object Oriented Programming",
    answer:"I have studied basic concept of OOPs and also its building blocks that aims to implement real-world entities like inheritance, hiding, polymorphism, etc. in programming."
  },

  {
    id: 5,
    title:"React",
    answer:"I have used React in my projects to a good extent and so I have good practice in React"
  },

  {
    id:6,
    title:"Computer Networks",
    answer:"I have studied different layers of Networks and some common communication protocols."
  },

  {
    id:7,
    title:"MERN STACK",
    answer:"I have worked on the backend part of my project using Nodejs, Expressjs and MongoDB and also further developing my skills in it."
  },

  

  {
    id:8,
    title:"Operating Systems",
    answer:"I have basic knowledge regarding different types of operating systems and their efficiency."
  },

  {
    id:9,
    title:"Database Management System",
    answer:"I have some basic level knowledge and overview of DBMS."
  },
]

export default function Skills() {
  return (
    <section id='skills'>
    
    <br></br>
    <h5>What Skills I have</h5>
      <h2>SKILLS</h2>
      <div className='container skills_container'>
        <div className='skills_wrapper'>
          {
            items.map(({id,title,answer})=>{
              return <Data key={id} title={title} answer={answer}/>
            })
          }
        </div>
      </div>
    </section>
  )
}





