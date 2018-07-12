import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import './style.css';

class Zane extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="app">
        <center className="maxima">
          <Window />
        </center>
      </div>
    )
  }
}

class Window extends Zane {

  constructor(props) {
    super(props);
    this.state = { name: '', id: '', nodeid: '', avurl: '', admin: false, company: '', location: '', mail: '', p_reps: '', fllwrs: '', fllwng: '', lastup: '' }

  }

  handleInput = (e, loseFocus) => {

    fetch('https://api.github.com/users/' + e.target.value)

      .then(response => response.json())

      .then(data => this.setState({ name: data.name, id: data.id, nodeid: data.node_id, avurl: data.avatar_url, admin: data.site_admin.toString(), company: data.company, location: data.location, mail: data.email, p_reps: data.public_repos, fllwrs: data.followers, fllwng: data.following, lastup: data.updated_at }))

      .catch(error => console.log(error))
  }

  render() {
    return (
      <React.Fragment>
        <div className="black">
          <input ref="search" type="text" onChange={this.handleInput} className="handleInput" placeholder="Git username" />
        </div>
        <ul className="message-list">
          <li className="message">
            <p>name</p>
            <div>{this.state.name}</div>
          </li>
          <li className="message">
            <p>avatar</p>
            <div className="imgdiv"><img src={this.state.avurl} className="imgresize" /></div>
          </li>
          <li className="message">
            <p>id</p>
            <div>{this.state.id}</div>
          </li>
          <li className="message">
            <p>nodeid</p>
            <div>{this.state.nodeid}</div>
          </li>
          <li className="message">
            <p>admin</p>
            <div>{this.state.admin}</div>
          </li>
          <li className="message">
            <p>company</p>
            <div>{this.state.company}</div>
          </li>
          <li className="message">
            <p>location</p>
            <div>{this.state.location}</div>
          </li>
          <li className="message">
            <p>email</p>
            <div>{this.state.mail}</div>
          </li>
          <li className="message">
            <p>public repos</p>
            <div>{this.state.p_reps}</div>
          </li>
          <li className="message">
            <p>followers</p>
            <div>{this.state.fllwrs}</div>
          </li>
          <li className="message">
            <p>following</p>
            <div>{this.state.fllwng}</div>
          </li>
          <li className="message">
            <p>latest commit</p>
            <div>{this.state.lastup}</div>
          </li>
        </ul>
        <a href="https://www.linkedin.com/in/pranshu-srivastava-838430164/"><div className="proxr"><i className="fab fa-linkedin"></i></div></a>
        <div className="proxl">Gearch</div>
      </React.Fragment>
    )
  }
}

render(<Zane />, document.getElementById('root'));