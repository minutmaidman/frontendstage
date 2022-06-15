import React from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

class Dashboard extends React.Component{
    render() {
     return (
      <div class="jumbotron">
      <h1 class="display-4">FIND A JOB OR MAKE AN OFFER</h1>
      <p class="lead">Postulez en tant que Candidat </p>
      <hr class="my-4"></hr>
      <p>Postez votre offre d'emploi</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Postuler   </a>
        |
        <a class="btn btn-primary btn-lg" href="/addoffer" role="button">Faire une annonce</a>
      </p>
    </div>
     )}}

     export default Dashboard;