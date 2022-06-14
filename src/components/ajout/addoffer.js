import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
class addoffer extends React.Component{
    render() {
     return (
     <><div class="sixteen columns">
             <h2><i class="fa fa-plus-circle"></i> Signing Up as an Employer</h2>
         </div>
         <form>
         <div class="form-group">
    <label for="exampleFormControlInput1">Compagnie</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Compagnie">
    </input>
  </div>
  <br/>
  <div class="form-group row">
    <label for="exampleFormControlInput1" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control"   id="exampleFormControlInput1" placeholder="email@example.com">
      </input>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword" placeholder="Password">
      </input>
    </div>
  </div>
  <br/>
  <div class="form-group">
    <label for="exampleFormControlInput1">Job Title</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
    </input>
  </div>
  <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      </input>
     <div class="invalid-feedback">
        Please provide a valid state.
      </div></div>
      <div class="form-group">
    <label for="exampleFormControlTextarea1">Détail de l'offre</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-outline-success btn-lg">Terminer</button>
  </form></>)
  }}
         export default addoffer;