import bwlogo from './images/bwlogo.png';
import mobility from './images/mobility.png';
import migration from './images/migration.png';
import security from './images/security.png';
import server from './images/server.jpeg';
import laptop from './images/laptop.jpeg';
import network from './images/network.jpeg';
import programming from './images/programming.jpeg';
import cloud_mobility from './images/cloud_mobility.jpeg';
import it_support from './images/it_support.jpeg';
import wglogo from './images/wglogo.png';
import React from "react";
import "./App.scss";
import showNum from "./showNum";




function App() {
    return (
        <div class="app">
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.cloudtensolutions.com/images/bwlogo.png">
                        <img class="img-logo" src={bwlogo} width={200} height={80} alt="Company Logo" />
                    </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                                <div class="collapse navbar-collapse" id="navbarCollapse">
                                    <ul class="navbar-nav mb-2 mb-md-0">
                                        <li class="nav-item">
                                            <a class="nav-link text-white" aria-current="page" title="home" href="https://www.cloudtensolutions.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                </svg>
                                            </a>
                                        </li>         
                                        
                                            <li class="nav-item">                                           
                                                <a class="nav-link text-white mx-2" href="#phonenumber" onClick={showNum}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-telephone-fill" onClick={"941-226-9613"} viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                                    </svg> 941-226-9613
                                                </a>
                                            </li>           
                                    </ul>
                                </div>
                                <a class="nav-link d-inline text-end p-2 text-white" id="meta" href="https://www.facebook.com/profile.php?id=100085223613654/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
                                    </svg>
                                </a>
                                <div class="linkedin d-inline text-end p-2 text-white" id="linkedin">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </div>
                                <div class="privacy d-inline text-end p-2 text-white" id="privacy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                                    </svg>
                                </div>
                    </div>
            </nav>

<div class="carousel">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={mobility} class="d-block w-100" width={800} height={400} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block text-start">
                        <h3 class="mx-3">Endpoint Configuration</h3>
                            <p>Manage your mobile devices with ease!</p>
                    </div>
            </div>
  
                        <div class="carousel-item">
                            <img src={migration} class="d-block w-100" width={800} height={400} alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>Cloud Migration</h3>
                                        <p>Minimize cost by migrating to the cloud!</p>
                                </div>
                        </div>
  
                        <div class="carousel-item">
                            <img src={security} class="d-block w-100" width={800} height={400} alt="Third slide" />
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
</div>



<div class="container-fluid">
    <div class="marketing">
        <div class="row my-5">
            <div class="col-lg-4">
                <img class="rounded-circle" src={server} width={200} height={200} alt="A blade server being removed from an enclosure." />
                    <h2 class="fw-normal">Server Support</h2>
            </div>
            <div class="col-lg-4">
                <img class="rounded-circle" src={laptop} width={200} height={200} alt="A black keyboard." />
                    <h2 class="fw-normal">Desktop Support</h2>
            </div>
            <div class="col-lg-4">
                <img class="rounded-circle" src={network} width={200} height={200} alt="Network Device" />
                    <h2 class="fw-normal">Network Support</h2>
            </div>
        </div>
    </div>
  
                <hr class="featurette-divider" />
        
            <div class="container-fluid">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">Automation-As-A-Service</h2>
                        <h2 class="text-muted">Autoclose a request? Yep, we said it!</h2>
                            <p class="lead">Redundant tasks are inevitable. Automatically resolving them is too.</p>
                    </div>
                        <div class="col-md-5">
                            <img src={programming} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
                        </div>
                </div>
            </div>
  
                <hr class="featurette-divider" />
            
            <div class="container-fluid">
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">Automate just about anything.</h2>
                        <h2 class="text-muted">Imagine the possibilities!</h2>
                            <p class="lead">A slew of custom automation that addresses, infrastructure, mobile devices, and policy deployments.</p>
                    </div>
                        <div class="col-md-5 order-md-1">
                            <img src={cloud_mobility} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
                        </div>
                </div>
            </div>
  
                <hr class="featurette-divider" />

            <div class="container-fluid">
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">We can build it.</h2>
                        <h2 class="text-muted">Just for you.</h2>
                            <p class="lead">Every infrastructure is different but each have a base of common tasks. Let"s start there! Afterwards, build on it.</p>
                    </div>
                        <div class="col-md-5">
                            <img src={it_support} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
                        </div>
                </div>
            </div>
  
                <hr class="featurette-divider" />

    </div>

    
        <div class="Footer">
            <div class="container-fluid">
                    <div class="footer-logo text-center" id="footer-logo">
                        <img src={wglogo} width={200} height={80} alt="A grey cloud." />
                    </div>
            </div>
        </div>
    </div>
    );
}

export default App;