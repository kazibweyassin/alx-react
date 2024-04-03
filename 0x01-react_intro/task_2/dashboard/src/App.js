import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> School dashboard</h1>
        </header>
        <body className="App-body">
          <p> Login to access the full dashboard</p>
          <label htmlFor="email" onClick={() => {

            //select corresponding input field
            document.getElementById('password').focus();
          }}>Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password" onClick={() => {
            //select corresponding input field
            document.getElementById('password').focus();
          }}>Password</label>
          <input type='password' name='password' id='password' />
          <button>OK</button>
          </body>




        </div>
        <div className="App-footer">
          <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      </div>
    );
  }
}
