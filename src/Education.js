import React from 'react'

const Education = () => {
    return (
        <div>
            <hr className="m-0" />
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">University of South Santa Catarina</h3>
                    <div className="subheading mb-3">Bachelor of Information Systems</div>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">February 2014 - Current (Last Semester)</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">SENAI (National Service of Industrial Training)</h3>
                    <div className="subheading mb-3">Programmer 2013</div>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">February 2013 - November 2013</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">SENAI (National Service of Industrial Training)</h3>
                    <div className="subheading mb-3">Support and Maintenance in Computers and local networks</div>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">February 2012 - November 2012</span>
                    </div>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Education