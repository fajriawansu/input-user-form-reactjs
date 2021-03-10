import React, { Component } from 'react'
import NavbarComponent from './components/NavbarComponent'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import HomeContainer from './containers/HomeContainer';
import CreateUserContainer from './containers/CreateUserContainer';
import EditUserContainer from './containers/EditUserContainer';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <h1 className="text-center">Master Karyawan</h1>
        <BrowserRouter>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/create" exact component={CreateUserContainer} />
          <Route path="/edit/:id" exact component={EditUserContainer} />
        </BrowserRouter>
      </div>
    )
  }
}
