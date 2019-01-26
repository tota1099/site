import React, { Component } from 'react'
import ProjectCard from './components/ProjectCard';

class Projects extends Component {

    constructor(props){
        super(props)

        this.state = {
            repositories: {}
        }
    }

    componentDidMount(){
        fetch("https://api.github.com/users/tota1099/repos")
        .then( response => response.json() )
        .then( responseJson => this.setState({ repositories: responseJson } ) )
        .catch(function() {});
    }

    render(){
        return (
            <div>
                <hr className="m-0" />
                <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="projects">
                    <div className="my-auto">
                        <h2 className="mb-5">Projects</h2>
                        <div className="row">
                            {!this.state.repositories.length && 
                                <p>No projects</p>
                            }
                            {this.state.repositories.length && 
                                this.state.repositories.map( repo => {
                                    return (
                                        <ProjectCard 
                                            key={repo.id}
                                            title={repo.name}
                                            githubUrl={repo.html_url}
                                            description={repo.description}
                                            imageUrl=""
                                            imageAlt=""
                                            technologiesIcons={""}
                                        />
                                    )
                                })
                        }
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects