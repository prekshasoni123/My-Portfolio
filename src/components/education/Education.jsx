import React from 'react'
import './education.css'
import AVTR3 from '../../required/angels.jpg'
import AVTR1 from '../../required/svnit surat.jpg'
import AVTR2 from '../../required/vvm.jpg'
import Nav from '../nav/Nav'



const data=[
  {
    avatar: AVTR1,
    name: 'Sardar Vallabhbhai National Institute of Technology, Surat',
    review1: 'Bachelors of Technology in',
    review2: '"Electronics and Communication Engineering"',
    review3:'2020-2024',
    review4:'"CGPA: 8.57/10"'  
  },

  {
    avatar: AVTR2,
    name: 'Smt. M M Mehta English Medium School, Palanpur',
    review1: 'Higher Secondary Education',
    review2: 'Science/Maths (GSHEB)',
    review3:'2018-2020',
    review4:'Percentage: 79%'
  },

  {
    avatar: AVTR3,
    name: 'Angels English Medium School, Deesa',
    review1: 'Primary and Secondary Education',
    review2: 'Gujarat State Education Board',
    review3:'2018',
    review4:'Percentage: 93%'
  },
]

export default function Education() {
  return (

    

    <section id='education'>
    <br/>
      <h5>My Educational Qualification</h5>
      <h2>EDUCATION</h2>


      <div className='container educations_container'>
      
        {
          data.map(({avatar,name,review1,review2,review3,review4},index)=>{
            return(
              <article key={index} className='education'>
                <div className='edu_avatar'>
                  <img src={avatar}/>
                </div>

                <h5 className='inst_name'>{name}</h5>
                <br/>
                <div className='inst_details'>
                  <p>{review1}</p>
                  <br/>
                  <p>{review2}</p>
                  <br/>
                  <p>{review3}</p>
                  <br/>
                  <p>{review4}</p>
                </div>
              </article>
            )
          })
        }
        
      </div>
      
    </section>
  )
}


