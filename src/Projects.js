import React, { Component } from 'react'
import ProjectCard from './components/ProjectCard';
import axios from 'axios'

class Projects extends Component {

    constructor(props){
        super(props)

        this.state = {
            repositories: {},
            repositoriesConfigurations: {}
        }

        this.getRepoTechnologies = this.getRepoTechnologies.bind(this)
        this.getRepoImageUrl = this.getRepoImageUrl.bind(this)
    }

    async componentDidMount(){

        await axios.get('https://api.github.com/users/tota1099/repos')
            .then( response => this.setState({ repositories: response.data } ) )
            .catch(function (error) {
                console.log(error);
            });

        this.state.repositories.map( repo => {
            const url = "https://raw.githubusercontent.com/" + repo.full_name + "/master/Site/site.json"
            axios.get(url)
                .then( response => {
                    axios.get('https://api.github.com/repos/' + repo.full_name + '/contents/Site/banner.png')
                        .then( response2 => {
                            var repoConfiguration = {}
                            response.data.imageUrl = response2.data.download_url
                            repoConfiguration[repo.id] = response.data

                            this.setState({ 
                                repositoriesConfigurations: { 
                                    ...this.state.repositoriesConfigurations,
                                    ...repoConfiguration
                                }
                            })
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                })
                .catch(function (error) {
                    console.log(error);
                });
        })
    }


    getRepoTechnologies(repo) {
        if ( this.state.repositoriesConfigurations[repo.id] ){
            return this.state.repositoriesConfigurations[repo.id].technologies
        }
        return {}
    }

    getRepoImageUrl(repo) {
        if ( this.state.repositoriesConfigurations[repo.id] ){
            return this.state.repositoriesConfigurations[repo.id].imageUrl
        }
        return ""
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
                                            imageUrl={this.getRepoImageUrl(repo)}
                                            imageAlt="Repo Image"
                                            technologiesIcons={this.getRepoTechnologies(repo)}
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