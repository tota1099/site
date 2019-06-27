import React from 'react';
import brazilFlag from './assets/img/brazil-flag-round-icon-32.png';
import usaFlag from './assets/img/united-states-of-america-flag-round-icon-32.png';

const NavBar = props => {

    const { siteText = {} } = props

    return (
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
                  <a className="js-scroll-trigger" href="javascript:void(0)" onClick={() => props.changeLanguage('pt-br')}>
                    <img src={brazilFlag} alt="Brazil Flag"/>
                  </a>
                  {" "}
                  <a className="js-scroll-trigger" href="javascript:void(0)" onClick={() => props.changeLanguage('en-us')}>
                    <img src={usaFlag} alt="USA Flag" />
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">{'about' in siteText && siteText.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#experience">{'experience' in siteText && siteText.experience}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#education">{'education' in siteText && siteText.education}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#skills">{'skills' in siteText && siteText.skills}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#certifications">{'certifications' in siteText && siteText.certifications}</a>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default NavBar