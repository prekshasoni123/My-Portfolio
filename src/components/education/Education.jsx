import React from 'react'
import './education.css'
import AVTR1 from '../../required/angels.jpg'
import AVTR2 from '../../required/svnit surat.jpg'
import AVTR3 from '../../required/vvm.jpg'
import Nav from '../nav/Nav'

export default function Education() {
  return (
    <section id='education'>
      <h5>My Educational Qualification</h5>
      <h2>EDUCATION</h2>

      <div className='container educations_container'>
        <article className='education'>
          <div className='edu_avatar'>
            <img src='{AVTR1}' alt='Avatar One'/>
            {/* <h3 className='inst_name'>Sardar Vallabhbhai National Institute of Technology, Surat</h3>
         <br></br>
         <br></br>
            <div className='inst_details'>
        <p>Bachelors of Technology</p>
        <p>in</p>
          <p>"Electronics and Communication Engineering"</p>
          <br></br>
          <p>2020-2024</p>
         <br></br>
         <p>"CGPA: 8.57"</p>
          <br></br>
        </div> */}
          </div>
        </article>
      </div>
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


