import wglogo from './images/wglogo.png';
import mobility from './images/mobility.png';
import migration from './images/migration.png';
import security from './images/security.png';
import server from './images/server.png';
import keyboard from './images/keyboard.png';
import network from './images/network.png';
import programming from './images/programming.png';
import cloud_mobility from './images/cloud_mobility.png';
import it_support from './images/it_support.png';

const Home = () => {
    return (
<>
<div id="home" class="Home">

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
                <img class="rounded-circle" src={server} width={140} height={140} alt="A blade server being removed from an enclosure." />
                    <h2 class="fw-normal">Server Support</h2>
            </div>
        <div class="col-lg-4">
            <img class="rounded-circle" src={keyboard} width={140} height={140} alt="A black keyboard." />
                <h2 class="fw-normal">Desktop Support</h2>
        </div>
            <div class="col-lg-4">
                <img class="rounded-circle" src={network} width={140} height={140} alt="Network Device" />
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
</div>
<hr class="featurette-divider" />
<footer>
    <div class="container-fluid">                
        <img class="d-block mx-auto mb-3" src={wglogo} width={200} height={80} alt="Company Logo" />
    </div>
    <div class="text-center">
        <h6>&copy; Cloud 10 Solutions, L.L.C | All Rights Reserved</h6>
    </div>
</footer>
</div>
   
</>
    );
}
export default Home;