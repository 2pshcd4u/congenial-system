import React from 'react';
import bwlogo from './images/bwlogo.png';
import mobility from './images/mobility.png';
import security from './images/security.png';
import migration from './images/migration.png';
import server from './images/server.jpeg';
import laptop from './images/laptop.jpeg';
import network from './images/network.jpeg';
import programming from "./images/programming.jpeg";
import cloud from "./images/cloud_mobility.jpeg";
import it from "./images/it_support.jpeg";
import wlogo from "./images/logo_wg.png";
import './App.css';

const App = () =>  {
      return (
<>
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
  <div class="container-fluid">
    <img class="navbar-brand img-logo" src={bwlogo} alt="Company Logo"></img>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" title="Remote Technical Support and Services" href="./">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
              </svg>
              </a>
            </li>
            <li class="nav-item">
              <div class="nav-link" title="Contact" href="./images/phone-fill.svg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
              </svg>
              </div>
            </li>
          </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

<div>
<div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img src={mobility} class="d-block w-100" width="800" height="400" alt="First slide"></img>
<div class="carousel-caption d-none d-md-block text-start">
 <h3 class="mx-3">Endpoint Configuration</h3>
   <p>Manage your mobile devices with ease!</p>
</div>
</div>

<div class="carousel-item">
<img src={migration} class="d-block w-100" width="800" height="400" alt="Second slide"></img>
<div class="carousel-caption d-none d-md-block">
<h3>Cloud Migration</h3>
<p>Minimize cost by migrating to the cloud!</p>
</div>
</div>

<div class="carousel-item">
<img src={security} class="d-block w-100" width="800" height="400" alt="Third slide"></img>
<div class="carousel-caption d-none d-md-block">
<h3>Secured Workloads</h3>
<p>Encrypt data in transit and at rest!</p>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
</div>
<div class="container-fluid">
<div class="marketing">
<div class="row my-5">
<div class="col-lg-4">
<img class="bd-placeholder-img rounded-circle" src={server} width="140px" height="140px" alt="A blade server being removed from an enclosure."></img> 
<h2 class="fw-normal">Server Support</h2>
</div>
<div class="col-lg-4">
<img class="bd-placeholder-img rounded-circle" src={laptop} width="140px" height="140px" alt="A black keyboard."></img>
<h2 class="fw-normal">Desktop Support</h2>
</div>
<div class="col-lg-4">
<img class="bd-placeholder-img rounded-circle" src={network} width="140px" height="140px" alt="Network Device"></img> 
<h2 class="fw-normal">Network Support</h2>
</div>
</div>
</div>

<hr class="featurette-divider"></hr>

<div class="row featurette">
<div class="col-md-7">
<h2 class="featurette-heading fw-normal lh-1">Automation-As-A-Service</h2>
<h2 class="text-muted">Autoclose a request? Yep, we said it!</h2>
<p class="lead">Redundant tasks are inevitable. Automatically resolving them is too.</p>
</div>
<div class="col-md-5">
<img src={programming} width="500px" height="250px" alt="Graphic cloud infrastructure related devices."></img>
</div>
</div>

<hr class="featurette-divider"></hr>

<div class="row featurette">
<div class="col-md-7 order-md-2">
<h2 class="featurette-heading fw-normal lh-1">Automate just about anything.</h2>
<h2 class="text-muted">Imagine the possibilities!</h2>
<p class="lead">A slew of custom automation that addresses, infrastructure, mobile devices, and policy deployments.</p>
</div>
<div class="col-md-5 order-md-1">
<img src={cloud} width="500px" height="250" alt="Graphic cloud infrastructure related devices."></img>
</div>
</div>

<hr class="featurette-divider"></hr>

<div class="row featurette">
<div class="col-md-7">
<h2 class="featurette-heading fw-normal lh-1">We can build it.</h2>
<h2 class="text-muted">Just for you.</h2>
<p class="lead">Every infrastructure is different but each have a base of common tasks. Let"s start there! Afterwards, build on it.</p>
</div>
<div class="col-md-5">
<img src={it} width="500px" height="250px" alt="Graphic cloud infrastructure related devices."></img>
</div>
</div>
<hr class="featurette-divider"></hr>
<footer>
  <div class="container text-center">
    <img class="footer-logo" src={wlogo} alt="A grey cloud."></img>
      <p>Contact: 941-226-9613</p>
      <a href="https://www.facebook.com/profile.php?id=100085223613654">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
        </svg>
      </a>        
  </div>
</footer>
  </div>
</div>
</>
    );
  }
export default App;



