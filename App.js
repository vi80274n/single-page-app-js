import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Post1 from './post1.js'; 
//import Post2 from './post2.js'; 
//import Post3 from './post3.js'; // eslint-disable-next-line
import main from './main.js'
import nav from './nav.js'
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Page-header">
          My Blog - Header
        </header>
        <div className="Page-main">
          <main />
          <nav />
        </div>
        <footer className="Page-footer">
          My Blog - Footer
        </footer>
      </div>
    );
  }
}

export default App;
