import React from 'react'
import './project.css'

export default function Projects() {
  return (
    <section id='projects'>
      <br/>
      <h5>My recent projects</h5>
      <h2>Projects</h2>


      <div className='container project_container'>
      
        
              <article className='project'>

                <h5 className='project_name'>To-do-list</h5>
                <br/>
                <div className='project_details'>
                
                <p>A basic beginner friendly React based mini-project.</p>
                <br/>
                <p> Allows to make list of important things to do using functions & properties of React.
                </p>
                  
                  <br/>
                  <div className='project_button'>
                <a href="" className='btn btn-primary'>View</a>
                <a href="https://github.com/prekshasoni123/To-do-list" target='_blank' className='btn btn-primary'>GitHub</a>

                 </div>
                  
                </div>
              </article>

              <article className='project'>

                <h5 className='project_name'>Food-Delivery App</h5>
                <br/>
                <div className='project_details'>

                
                  <p>
                  A MERN FULLSTACK project using Routes & design components in React and bootstrap components.
                  </p>
                  <br/>
                  <p>Users can add items to cart, order food and see their past order history.</p>
                
                  
                  <br/>
                  <div className='project_button'>
                <a href="" className='btn btn-primary'>View</a>
                <a href="https://github.com/prekshasoni123/Food-delivery-app-project" target='_blank'className='btn btn-primary'>GitHub</a>

                 </div>
                  
                </div>
              </article>
            
          
        
        
      </div>
      
    
    </section>
  )
}
