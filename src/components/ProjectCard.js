import React from 'react'

const ProjectCard = props => {
    return (
        <div className="col mb-3">
            <div className="card" style={{ width: '16rem' }}>
                <img className="card-img-top" src={props.imageUrl} alt={props.imageAlt} />
                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}
                        {" "}

                        <li className="list-inline-item">
                            <a href={props.githubUrl} rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                        </li>
                    </h5>
                    <p className="card-text">{props.description}</p>

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