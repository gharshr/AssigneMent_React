import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route,Switch } from 'react-router-dom';
import Login from './Login/Login'
import Navbar from './Navbar'
import Register from './Register/Register';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar className="App"></Navbar>
          <Login className="App"/>
        </Route>
        <Route path="/Register">
          <Navbar className="App"></Navbar>
          <Register className="App"/>
        </Route>
        <Route path="/Dashboard">
          <Dashboard className="App"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
