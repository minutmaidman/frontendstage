import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class addInfo extends React.Component{
    render() {
     return (
      <><div class="sixteen columns">
             <h2><i class="fa fa-plus-circle"></i> Signing Up as a Candidate</h2>
         </div><form>
       
         <div class="row">
    <div class="col">
    <label for="exampleInputEmail1">Prenom</label>
      <input type="text" class="form-control" placeholder="First name">
      </input>
</div>
    <div class="col">
    <label for="exampleInputEmail1">Nom</label>
      <input type="text" class="form-control" placeholder="Last name">
      </input>
    </div>
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
    <label for="exampleFormControlFile1">Rajoutez votre Cv</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </input>
  </div>

  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">City</label>
      <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
      </input>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationCustom04">State</label>
      <input type="text" class="form-control" id="validationCustom04" placeholder="State" required>
      </input>
     <div class="invalid-feedback">
        Please provide a valid state.
      </div>
      </div>
    </div>
    <button type="submit" class="btn btn-outline-success btn-lg">Terminer</button>
             </form></>

     )}}

     export default addInfo;