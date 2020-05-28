import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SideBar from './common/sidebar';
import NavTop from './common/navbar';
import Dashboard from './common/Dashboard';
import Search from './common/Search';
import Report from './common/Report';

export default class App extends Component {
  render() {
    return (
      <Router>
        
      <div id="wrapper">
        <SideBar/>
        
        <div id="content-wrapper" className="d-flex flex-column">

          <div id="content">
            <NavTop/> 
            <div className="container-fluid">
              <Switch>
                <Route exact path="/">
                  <Dashboard/>
                </Route>
                <Route exact path="/search">
                  <Search/>
                </Route>
                <Route exact path="/report">
                  <Report/>
                </Route>
              </Switch>
            </div> 
          </div>

        </div>
      </div>
      
      </Router>
    )
  }
}
