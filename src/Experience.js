import React from 'react'

const Experience = () => {
    return (
        <div>
            <hr className="m-0" />
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">Full-Stack Developer</h3>
                    <div className="subheading mb-3">Self-employed</div>
                    <ul>
                        <li>Development of an international meeting management system. </li>
                        <li>Communication just in english</li>
                        <li>Plan Tasks/Meetings/Features. </li>
                        <li>PHP (programming language). </li>
                        <li>MySql (relational database management system). </li>
                        <li>Docker/docker-compose. </li>
                        <li>Materialize (Front End Framework) and Smarty PHP Template Engine (Web Template).</li>
                        <li>Trello (project management).</li> 
                        <li>AWS Cloud ( S3, Elastic Beanstalk, Route 53, SNS e SES ).</li>
                    </ul>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">January 2018 - Current</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row mb-5">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">PHP Developer</h3>
                    <div className="subheading mb-3">Stormtech LTDA</div>
                    <ul>
                        <li>Developer in a payment-deducted loans system. </li>
                        <li>Developer/Project Leader in a congress management system (International).</li>
                        <li>Development of systems using language as PHP, Python and Javascript. </li>
                        <li>Development with Frameworks: Smarty Template Engine (PHP Web Template System), Bootstrap (Front-End Framework) and Laravel (PHP Web Framework). </li>
                        <li>Development of unit tests, using the methodology Test-driven development (TDD). </li>
                        <li>Analysis and management of database (MySql, PostgresSQL and DynamoDB). </li>
                        <li>Using tools like Bitbucket, Slack and Jira, among others. </li>
                        <li>Work developed under Scrum and kanban methodologies.</li>
                    </ul>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">December 2015 - January 2018</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row">
                    <div className="resume-content mr-auto">
                    <h3 className="mb-0">Technical support</h3>
                    <div className="subheading mb-3">Stormtech LTDA</div>
                    <ul>
                        <li>Work developed under the methodologies Scrum and Kanbam.</li>
                        <li>Support to users of systems developed by the company.</li>
                        <li>System training, remote assistance. </li>
                        <li>Monitoring of systems and services provided by the company (implementation, approval of version, delivery of new items, etc.). </li>
                        <li>Quality test and acceptance test . </li>
                        <li>Critical analysis of errors and bugs with suggestions for solutions and improvements.</li>
                    </ul>
                    </div>
                    <div className="resume-date text-md-right">
                    <span className="text-primary">November 2014 - November 2015</span>
                    </div>
                </div>

                </div>

            </section>
        </div>
    )
}

export default Experience