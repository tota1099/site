import React from 'react'
import ProjectCard from './components/ProjectCard';

const Projects = () => {

    return (
        <div>
            <hr className="m-0" />
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
                <div className="my-auto">
                    <h2 className="mb-5">Projects</h2>
                    <div className="row">
                        <ProjectCard 
                            title="My IP"
                            description="Some quick example text to build on the card title and make up the bulk of the card's content."
                            imageUrl="https://github.com/tota1099/meuip/raw/master/MeuIP-feature-graphic.png"
                            imageAlt="Some alt"
                            technologiesIcons={[ "react", "html5", "css3-alt", "js-square", "npm" ]}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects