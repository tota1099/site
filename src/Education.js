import React from 'react'

const Education = props => {

    const { siteText = {} } = props

    return (
        <div>
            <hr className="m-0" />
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">{'title' in siteText && siteText.title}</h2>

                    {'education_list' in siteText && siteText.education_list.map(item => 
                        <div className="resume-item d-flex flex-column flex-md-row mb-5">
                            <div className="resume-content mr-auto">
                            <h3 className="mb-0">{item.institution}</h3>
                            <div className="subheading mb-3">{item.description}</div>
                            </div>
                            <div className="resume-date text-md-right">
                            <span className="text-primary">{item.date}</span>
                            </div>
                        </div>   
                    )}
                </div>
            </section>
        </div>
    )
}

export default Education