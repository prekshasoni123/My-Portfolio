import React from 'react'
import './education.css'
import AVTR3 from '../../required/angels.jpg'
import AVTR1 from '../../required/svnit surat.jpg'
import AVTR2 from '../../required/vvm.jpg'
import Nav from '../nav/Nav'

// import Swiper core and required modules
import { Pagination } from 'swiper';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
      <h5>My Educational Qualification</h5>
      <h2>EDUCATION</h2>


      <Swiper className='container educations_container'>
      
        {
          data.map(({avatar,name,review1,review2,review3,review4},index)=>{
            return(
              <SwiperSlide key={index} className='education'>
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
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
      
    </section>
  )
}


// export default function Education() {
//   return (
//     <section id='education'>
//     <br></br>
//       <h2>EDUCATION</h2>

//       <div className='container edu_container'>
//         <article className='edu'>
//         <br></br>
//           <h3>Sardar Vallabhbhai National Institute of Technology, Surat</h3>
//           <br></br>
//           <br></br>
//           <p>Bachelors of Technology</p>
//           <p>in</p>
//           <p>"Electronics and Communication Engineering"</p>
//           <br></br>
//           <p>2020-2024</p>
//           <br></br>
//           <p>"CGPA: 8.57"</p>
//           <br></br>
//         </article>

//         <article className='edu'>
//         <br></br>
//           <h3>Smt. M M Mehta English Medium School, Palanpur</h3>
//           <br></br>
//           <br></br>
//           <p>Higher Secondary Education</p>
//           <br></br>
//           <p>GSHEB</p>
//           <br></br>
//           <p>2018-2020</p>
//           <br></br>
//           <p>Percentage: 79%</p>
//           <br></br>
//           <br></br>
//         </article>

//         <article className='edu'>
//         <br></br>
//           <h3>Angels English Medium School, Deesa</h3>
//           <br></br>
//           <br></br>
//           <p>Primary and Secondary Education</p>
//           <br></br>
//           <p>GSEB</p>
//           <br></br>
//           <p>2018</p>
//           <br></br>
//           <p>Percentage: 93%</p>
//           <br></br>
//           <br></br>
//         </article>
//       </div>
//     </section>
    
//   )
// }


