import React from 'react'

const Skills = props => {

    const { siteText = {} } = props

    return (
        <div>
            <hr className="m-0" />
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">{'title' in siteText && siteText.title}</h2>

                    <div className="subheading mb-3">{'programming_languages_and_tools' in siteText && siteText.programming_languages_and_tools}</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item">
                            <i className="fab fa-react"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-python"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-php"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-html5"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-css3-alt"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-js-square"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-node-js"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-npm"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="fab fa-android"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">{'workflow' in siteText && siteText.workflow}</div>
                    <ul className="fa-ul mb-0">
                        {'workflow_list' in siteText &&
                            siteText.workflow_list.map(item =>
                                <li>
                                    <i className="fa-li fa fa-check"></i>
                                    {item}
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Skills