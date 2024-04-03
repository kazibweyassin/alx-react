import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

export default class App extends Component {
  handleEmailLabelClick = () => {
    this.emailInput.focus();
  };

  handlePasswordLabelClick = () => {
    this.passwordInput.focus();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> School dashboard</h1>
        </header>
        <div className="App-body">
          <p> Login to access the full dashboard</p>
          <label htmlFor="email" onClick={this.handleEmailLabelClick}>Email</label>
          <input type="email" name="email" id="email" ref={(input) => this.emailInput = input} />
          <label htmlFor="password" onClick={this.handlePasswordLabelClick}>Password</label>
          <input type='password' name='password' id='password' ref={(input) => this.passwordInput = input} />
          <button>OK</button>
        </div>
        <div className="App-footer">
          <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    );
  }
}
