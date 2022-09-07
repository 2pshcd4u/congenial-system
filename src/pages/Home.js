import wglogo from './images/wglogo.webp';
import mobilemanagement from './images/mobilemanagement.webp';
import migration from './images/migration.webp';
import security from './images/migratetothecloud.webp';
import server from './images/server.webp';
import keyboard from './images/keyboard.webp';
import network from './images/network.webp';
import programming from './images/programming.webp';
import cloud_mobility from './images/cloud_mobility.webp';
import it_support from './images/itsupport.webp';

const Home = () => {
    return (
<>
<div class="Home">
    <div className="carousel">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mobilemanagement} className="d-block w-100" width={1000} height={500} alt="First slide" />
                        <div className="carousel-caption d-none d-md-block text-start">
                            <h3 className="text-center text-black">Endpoint Configuration</h3>
                                <p className="text-center text-black">Manage your mobile devices with ease!</p>
                        </div>
                </div>  
                <div className="carousel-item">
                    <img src={migration} className="d-block w-100" width={1000} height={500} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Cloud Migration</h3>
                                <p>Minimize cost by migrating to the cloud!</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={security} className="d-block w-100" width={1000} height={500} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Secured Workloads</h3>
                                <p>Encrypt data in transit and at rest!</p>
                        </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>

<div className="container-fluid">
    <div className="marketing">
        <div className="row my-5">
            <div className="col-lg-4">
                <img className="rounded-circle" src={server} width={140} height={140} alt="A blade server being removed from an enclosure." />
                    <h2 className="fw-normal">Server Support</h2>
            </div>
        <div className="col-lg-4">
            <img className="rounded-circle" src={keyboard} width={140} height={140} alt="A black keyboard." />
                <h2 className="fw-normal">Desktop Support</h2>
        </div>
            <div className="col-lg-4">
                <img className="rounded-circle" src={network} width={140} height={140} alt="Network Device" />
                    <h2 className="fw-normal">Network Support</h2>
            </div>
        </div>
<hr className="featurette-divider" />        
    <div className="container">
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading fw-normal pt-4 lh-1">Automation-As-A-Service</h2>
                    <h2 className="text-muted">Autoclose a request? Yep, we said it!</h2>
                        <p className="lead">Redundant tasks are inevitable. Automatically resolving them is too.</p>
            </div>
            <div className="col-md-5">
                <img src={programming} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
            </div>
        </div>
    </div>
<hr className="featurette-divider" />

        <div className="row featurette">
            <div className="col-md-7 order-md-2">
                <h2 className="featurette-heading fw-normal pt-4 lh-1">Automate just about anything.</h2>
                <h2 className="text-muted">Imagine the possibilities!</h2>
                    <p className="lead">A slew of custom automation that addresses, infrastructure, mobile devices, and policy deployments.</p>
            </div>
            <div className="col-md-5 order-md-1">
                <img src={cloud_mobility} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
            </div>
        </div>
<hr className="featurette-divider" />
        <div className="row featurette">
            <div className="col-md-7">
                <h2 className="featurette-heading pt-4 fw-normal text-center lh-1">Expert IT Help</h2>
                    <h2 className="text-muted text-center">Just for you.</h2>
                        <p className="lead text-center">Consider us as your remote IT team.</p>
            </div>
            <div className="col-md-5">
                <img src={it_support} width={500} height={250} alt="Graphic cloud infrastructure related devices." />
            </div>
        </div>
    </div>
</div>
<hr className="featurette-divider" />
<footer>
    <div className="container-fluid">                
        <img className="d-block mx-auto mb-3" src={wglogo} width={200} height={80} alt="Company Logo" />
    </div>
    <div className="text-center">
        <h6>&copy; Cloud 10 Solutions, L.L.C | All Rights Reserved</h6>
    </div>
</footer>
</div>
</>
    );
}
export default Home;