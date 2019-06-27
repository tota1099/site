import React, { Component } from 'react'
import './assets/resume.min.css'
import NavBar from './NavBar'
import Content from './Content'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      language: 'en-us',
      siteText: []
    }
    this.setSiteText();
  }

  changeLanguage = async language => {
    await this.setState({ language })
    this.setSiteText()
  }

  setSiteText = async () => {
    const siteText = await import(`./translate/${this.state.language}/text`)
    this.setState({ siteText: siteText.default })
  }

  render() { 
    return (
      <div>
        <NavBar changeLanguage={this.changeLanguage} siteText={this.state.siteText.navbar} />
        <Content siteText={this.state.siteText}/>
      </div>
    )
  }
}

export default App
