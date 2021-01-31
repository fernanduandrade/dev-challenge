import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ClassifiedForm from './Components/Form/ClassifiedForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/create" component={ClassifiedForm} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);
