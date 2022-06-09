import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/navbar/navbar';
import Liste from './components/list/joblist';
//import Ajout from './components/ajout/ajout';
//import Logo from './components/logo/logo';
import { Navigate } from "react-router-dom"; 

class App extends React.Component {
  render() {
  return (
    <div className="container">
      <Router>

        <Route exact path="/">
          <Navigate to="/joblist" />
        </Route>

        <Navbar/>
        <Route path= "/liste" component={Liste} />
      </Router>
    </div>
  );
}
 
}
export default App;