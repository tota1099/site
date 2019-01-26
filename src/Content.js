import React from 'react'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'
import About from './About'

const Content = () => {
    return (
        <div className="container-fluid p-0">
            <About />
            <Projects />
            <Experience />
            <Education />
            <Skills />
            <Certifications />
        </div>
    )
}


export default Content