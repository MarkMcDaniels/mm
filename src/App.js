import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


import MM from './containers/MM';
import MMmobile from './containers/MMmobile/MMmobile';

class App extends Component {

  

  render() {

    

    return (
      <div>
        <MM />
      </div>
    );
  }
}

export default App;
