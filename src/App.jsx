import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Projects from './components/my projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App(){
    return(
        <div>
        <Header/>
        <Nav/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>

        </div>
    );
}

export default App;
