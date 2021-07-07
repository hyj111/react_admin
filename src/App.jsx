import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Login from './view/Login'
import './App.scss'
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={Login} path="/"/>
        </Switch>
      </BrowserRouter>
    )
  }
}
