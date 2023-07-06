import React from 'react'

import './skills.css'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Skills() {
  return (
    <section id='skills'>
    <br></br>
      <h2>SKILLS</h2>

      <div className='container skills_container'>
        <div className='skills_frontend'>
        <div className='skills_content'>
          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/> 
          <div>
            <h4>HTML & CSS</h4>
            <small className='text-light'>Good enough</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Good enough</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>React</h4>
            <small className='text-light'>Good</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>NodeJS</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>ExpressJS</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>
        </div>
        </div>

        <div className='skills_backend'>
        <div className='skills_content'>
          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>C/C++</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>Operating System</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>Data Structures & Algorithms</h4>
            <small className='text-light'>Intermediate</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>DataBase Management System</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>

          <article className='skills_details'>
          <AiOutlineArrowRight className='skills_details-icons'/>
          <div>
            <h4>Computer Networks</h4>
            <small className='text-light'>Basic</small>
          </div>
          </article>

          

        </div>
        </div>
      </div>
    </section>
        
  )
}

{/* <section id='skills' className='full-height px-lg-5'>
    <div className='container' style={{fontFamily: 'cursive'}}>
      <div className='d-flex justify-content-center fw-bold fst-italic'>
      <div className='fs-2' style={{fontFamily: 'sans-serif', marginTop: 600, padding: 50}}><mark>SKILLS</mark></div>
      </div>

      <div className='row'>
        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
              <div className='fs-4 fw-bold'>HTML & CSS</div>
              <br></br>
              <p>I have good hands on working with HTML and CSS. I often use HTML & CSS to develop a good frontend part in my projects. </p>

            </div>
          </div>
        </div>

        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
            <div className='iconbox rounded-4'></div>
              <div className='fs-4 fw-bold'>Bootstrap</div>
              <br></br>
              <p>I have worked with bootstrap to develop my projects and have good hold on using it.</p>

            </div>
          </div>
        </div>

        <div className='row'>
        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
              <div className='fs-4 fw-bold'>React</div>
              <br></br>
              <p>I have made a project totally based on react and also made sufficient use of react in my other project too.</p>

            </div>
          </div>
        </div>

        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
              <div className='fs-4 fw-bold'>Mern Stack</div>
              <br></br>
              <p>I have worked on the backend part of my project as well using Nodejs, Expressjs and MongoDB and also further developing my skills in it.</p>

            </div>
          </div>
        </div>
        </div>

        <div className='row'>
        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
              <div className='fs-4 fw-bold'>C/C++</div>
              <br></br>
              <p>I have good coding skills in Cpp and I have been practicing coding on many of the coding platforms.</p>

            </div>
          </div>
        </div>

        <div className='col-md-6 p-4 justify-content-center'>
          <div className='card bg-info'>
            <div className='custom-content p-4'>
              <div className='fs-4 fw-bold'>Data Structures and Algorithms</div>
              <br></br>
              <p>I have sufficient knowledge of Data Structures and Algorithms and have been practicing it for a while now. </p>

            </div>
          </div>
        </div>
        </div>
        </div>
        </div>

      </section> */}
