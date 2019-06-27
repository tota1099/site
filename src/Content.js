import React from 'react'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Certifications from './Certifications'
import About from './About'

const Content = props => {

    const { siteText = {}, language } = props
    return (
        <div className="container-fluid p-0">
            <About siteText={siteText.about} />
            <Experience language={language}/>
            <Education siteText={siteText.education} />
            <Skills siteText={siteText.skills} />
            <Certifications siteText={siteText.certifications}/>
        </div>
    )
}


export default Content