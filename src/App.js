import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/navbar';
import Liste from './components/list/joblist';
import Dashboard from './components/dashboard/dashboard';
import Register from './components/Register';
import Login from './components/Login';
import AddOffer from './components/crud/addoffer';
import { Navigate } from "react-router-dom"; 

class App extends React.Component {
  render() {
  return (
    <div className="container">
      <Router>

        <Route exact path="/">
          <Navbar/>
          <Dashboard/>
        </Route>
        
        <Route exact path="/register">
          <Navbar/>
          <Register/>
        </Route>

        <Route exact path='/login'>
          <Navbar/>
          <Login/>
        </Route>

        <Route exact path='/addoffer'>
          <Navbar/>
          <AddOffer/>
        </Route>

      </Router>
    </div>
  );
}
 
}
export default App;
