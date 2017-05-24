import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Nick welcome to React</h2>
        </div>

        <div className="test">
        <h1 className="">{"Welcome To the store"}</h1>

          <Link to={"/store"}>
          <div className="button">
          {"Go to store"}
          </div>
          </Link>

        </div>
      </div>
    );
  }
}

export default App;



    // <Link to={"/product/" + product.id}>
    //<Link to={"/store"}</Link>
