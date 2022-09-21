
import mobiledevice from './images/laptop.webp';
import migration from './images/migration.webp';
import security from './images/migratetothecloud.webp';
import server from './images/server.webp';
import keyboard from './images/keyboard.webp';
import network from './images/network.webp';
import programming from './images/programming.webp';
import cloud_mobility from './images/cloud_mobility.webp';
import it_support from './images/itsupport.webp';
import wglogo from './images/wglogo.webp';

export default function Home() {
    return (
        <>
         <div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={mobiledevice} className="d-block mx-auto w-100" width={1000} height={500} alt="First slide" />
                        <div className="carousel-caption d-md-block text-start">
                            <h3>Device Management</h3>
                            <p>Remotely secure and compliant devices.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={migration} className="d-block mx-auto w-100" width={1000} height={500} alt="Second slide" />
                        <div className="carousel-caption d-md-block">
                            <h3>Virtualized Infrastructure</h3>
                            <p>No hardware. No shipping. Just Build It!</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={security} className="d-block mx-auto w-100" width={1000} height={500} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h3>Cloud Security</h3>
                            <p>Increase your security posture.</p>
                        </div>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
        </div>
<div className="container-fluid">
    <div className="marketing">
        <div className="row my-5">
            <div className="col-lg-4">
                <img className="rounded-circle" src={server} width={140} height={140} alt="Server Computer" />
                    <h2 className="fw-normal text-dark">Server</h2>
            </div>
        <div className="col-lg-4">
            <img className="rounded-circle" src={keyboard} width={140} height={140} alt="Keyboard" />
                <h2 className="fw-normal text-dark">Desktop</h2>
        </div>
            <div className="col-lg-4">
                <img className="rounded-circle" src={network} width={140} height={140} alt="Network Equipment" />
                    <h2 className="fw-normal text-dark">Network</h2>
            </div>
        </div>
<hr className="featurette-divider" />        
    <div className="container-fluid">
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


        <div className="container-fluid">
            <div className="row">         
                <div className="col text-center">
                    <div className="d-inline p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                </div>
                <div className="d-inline p-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
</svg>
                </div>
                <div className="d-inline p-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
</svg> 
</div>
<div className="d-line mt-3">           
<h6>&copy; Cloud 10 Solutions, L.L.C | All Rights Reserved</h6>
</div>
         

         

                </div>
            </div>
        </div>
</>
        ); 
}