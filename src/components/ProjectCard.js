import React from 'react'

const ProjectCard = props => {
    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-2 col-12 mb-3">
            <div className="card h-100" style={{ width: '16rem' }}>
                {props.imageUrl && 
                    <img className="card-img-top" src={props.imageUrl} alt={props.imageAlt} />
                }
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                        {" "}

                        <li className="list-inline-item">
                            <a href={props.githubUrl} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        </li>
                        {props.gitHubHomepage && 
                            <li className="list-inline-item">
                                <a href={props.gitHubHomepage} rel="noopener noreferrer" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                            </li>
                        }
                    </h5>
                    <p className="card-text">{props.description || 'No Description'}</p>

                    {props.technologiesIcons.length > 0 &&
                        <ul className="list-inline dev-icons2">
                            {props.technologiesIcons.map(icon => {
                                return (
                                    <li key={icon} className="list-inline-item">
                                        <i className={"fab fa-" + icon}></i>
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectCard