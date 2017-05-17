import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {
  HashRouter,
  Route
} from "react-router-dom"
import Store from "./Store"
import Product from "./Product"

ReactDOM.render(

  <HashRouter>
  <div className="">
  <Route exact path="/" component={App}/>
  <Route path="/store" component={Store}/>
  <Route path="/product/:id" component={Product}/>
  </div>
  </HashRouter>,

  document.getElementById('root')
);
