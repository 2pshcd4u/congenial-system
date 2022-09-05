import bwlogo from './images/bwlogo.png';
import wglogo from './images/wglogo.png';
import mobility from './images/mobility.png';
import migration from './images/migration.png';
import security from './images/security.png';
import server from './images/server.jpeg';
import laptop from './images/laptop.jpeg';
import network from './images/network.jpeg';
import programming from './images/programming.jpeg';
import cloud_mobility from './images/cloud_mobility.jpeg';
import it_support from './images/it_support.jpeg';
import React from "react";
import "./App.css";


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
                                    <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                                        <li class="nav-item">
                                            <a class="nav-link p-2 text-white" aria-current="page" title="home" href="https://www.cloudtensolutions.com/">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="https://cloudtensolutions.atlassian.net/servicedesk/customer/portal/2" class="nav-link p-2 text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-question-square-fill" viewBox="0 0 16 16">
                                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"/>
                                                </svg>
                                            </a>
                                        </li>                                        
                                <li class="nav-item">            
                                    <a class="nav-link p-2 text-white" id="meta" href="https://www.facebook.com/profile.php?id=100085223613654/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-meta" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"/>
                                        </svg>
                                    </a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link p-2 text-white" id="privacy" href="https://www.cloudtensolutions.com/privacy">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                                    </svg>
                                </a>
                                </li>
                            </ul>
                        
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
            <footer>
                <div class="container-fluid">                
                <img class="d-block mx-auto mb-3" src={wglogo} width={200} height={80} alt="Company Logo" />
                </div>
                <div class="text-center">
                <h6>&copy; Cloud 10 Solutions, L.L.C | All Rights Reserved</h6>
                </div>
            </footer>
        
        </div>
    );
}

export default App;