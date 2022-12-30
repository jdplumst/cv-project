import React, { Component } from 'react';
import './styles/styles.css';
import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        linkedin: '',
        github: '',
      }
    };

    this.updatePersonalInfo = this.updatePersonalInfo.bind(this);
  }
  
  // Calls correct method to update personal information state
  updatePersonalInfo(e) {
    if (e.target.id === 'firstname') {
      this.updateFirstName(e);
    } else if (e.target.id === 'lastname') {
      this.updateLastName(e);
    } else if (e.target.id === 'phone') {
      this.updatePhone(e);
    } else if (e.target.id === 'email') {
      this.updateEmail(e);
    } else if (e.target.id === 'linkedin') {
      this.updateLinkedin(e);
    } else if (e.target.id === 'github') {
      this.updateGithub(e);
    }
  };

  updateFirstName(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: e.target.value,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateLastName(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: e.target.value,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updatePhone(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: e.target.value,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateEmail(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: e.target.value,
          linkedin: this.state.personalInfo.linkedin,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateLinkedin(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: e.target.value,
          github: this.state.personalInfo.github,
        }
      })
    })
  };

  updateGithub(e) {
    this.setState((prevState) => {
      return({
        ...prevState,
        personalInfo: {
          firstname: this.state.personalInfo.firstname,
          lastname: this.state.personalInfo.lastname,
          phone: this.state.personalInfo.phone,
          email: this.state.personalInfo.email,
          linkedin: this.state.personalInfo.linkedin,
          github: e.target.value,
        }
      })
    })
  };

  render() {
    return (
      <div>
        <Header />
        <div className='columns-2'>
          <Form updatePersonalInfo={this.updatePersonalInfo} />
          <Resume personalInfo={this.state.personalInfo} />
        </div>
      </div>
      
    )
  }
}

export default App;
