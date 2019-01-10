import React, { Component } from 'react'
import './resume.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Renan Porto</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./assets/perfil.jpg')}  alt="Perfil"/>
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require('./assets/perfil.jpg')} alt="Perfil" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#certifications">Certifications</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid p-0">

          <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
              <h1 className="mb-0">Renan
                <span className="text-primary">Porto</span>
              </h1>
              <div className="subheading mb-5">
                <a href="mailto:renan.porto1099@gmail.com">renan.porto1099@gmail.com</a>
              </div>
              <p className="lead mb-5">Software developer and passionate about football and books. Always in search of knowledge and new challenges, focused on solutions and personal development.</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/renan-de-medeiros-porto" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/tota1099" rel="noopener noreferrer" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>

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

          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div className="my-auto">
              <h2 className="mb-5">Education</h2>

              <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                  <h3 className="mb-0">Universidade do Sul de Santa Catarina</h3>
                  <div className="subheading mb-3">Bachelor of Information Systems</div>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">February 2014 - Current (Last Semester)</span>
                </div>
              </div>

            </div>
          </section>
      
          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div className="my-auto">
              <h2 className="mb-5">Skills</h2>
    
              <div className="subheading mb-3">Programming Languages &amp; Tools</div>
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
    
              <div className="subheading mb-3">Workflow</div>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Test Driven Development</li>
                <li>
                  <i className="fa-li fa fa-check"></i>
                  Agile Development &amp; Scrum</li>
              </ul>
            </div>
          </section>
          
          <hr className="m-0" />

          <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="certifications">
            <div className="my-auto">
              <h2 className="mb-5">Certifications</h2>
              <ul className="fa-ul mb-0">
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  SENAI/SC - Basic Course - Programmer 2013</li>
                <li>
                  <i className="fa-li fa fa-trophy text-warning"></i>
                  SENAI/SC - Basic Course - Support and Maintenance in Computers and local networks  2012</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App;
