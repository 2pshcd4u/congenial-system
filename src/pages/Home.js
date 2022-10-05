import server from './images/server.webp';
import network from './images/network.webp';
import keyboard from './images/keyboard.webp';
import draas from './images/Partner_DRaaS_728X90Banner.jpg';
import vdi from './images/HCI-EN-1b-728x90.jpg';
import hci from './images/HCI-EN-1b-728x90.jpg';

export default function Home() {
    return ( 
        <>
<div id="Home" className="mt-5"></div>
<div className="container-fluid">
<div id="carouselFade" className="carousel slide carousel-fade" data-bs-target="carousel">
  <div className="carousel-inner">
      <div className="carousel-item bg-body active">
        <img src={draas} className="d-block w-100" alt="VMware Graphic"></img>
      </div>
      <div className="carousel-item">
      <img src={hci} className="d-block w-100"  alt="Virtual Desktops"></img>
      </div>
      <div className="carousel-item">
      <img className="d-block w-100" src={vdi} alt="Virtual Desktops"></img>
      </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="carouselFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="carouselFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div className="container-fluid py-4">
    <div className="p-5 mb-4 rounded-3">
      <div className="container-fluid">
        <h1 className="display-5">Basic Authentication Deprecation</h1>
        <p className="col-md-8 fs-4">Microsoft is deprecating basic authencation in Exchange. It will also impact the use of app passwords with applications that don't support two-step verification.</p>
        <a href="https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/deprecation-of-basic-authentication-exchange-online">
        <button className="btn btn-lg learnbutton" type="button">Find out more</button>
        </a>
      </div>
    </div>
</div>
<br></br>
<div className="py-2"></div>
<h1 id="Infrastructure" className="text-center py-2 mb-5">Infrastructure Services</h1>
<div className="container-fluid marketing mb-5">
    <div className="row">
        <div className="col-lg-4 text-center">
            <img className="rounded-circle img-thumbnail" src={server} width={140} height={140} alt="Server System" />
                <h2>Servers</h2>
                    <p>Operating system and Application support.</p>
                    <p><a className="btn btn-secondary" href="https://www.upwork.com/workwith/natep12">Learn More &raquo;</a></p>
        </div>
  <div className="col-lg-4 text-center">
        <img className="rounded-circle img-thumbnail" src={network} width={140} height={140} alt="Network Router" />
    <h2>Networking</h2>
    <p>Route | Switch | Firewall</p>
    <p><a className="btn btn-secondary" href="https://www.upwork.com/workwith/natep12">Learn More &raquo;</a></p>
  </div>
  <div className="col-lg-4 text-center">
   <img className="rounded-circle img-thumbnail text-center" src={keyboard} width={140} height={140} alt="Application Code" />
    <h2>Workstations</h2>
    <p>Operating system and User application support.</p>
    <p><a className="btn btn-secondary" href="https://www.upwork.com/workwith/natep12">Learn More &raquo;</a></p>
  </div>
</div>
</div>
<br></br>
<div id="Project">
<h1 className="text-center mt-5">Email Migrations</h1>
<div className="container-fluid px-4" id="hanging-icons">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-toggles" viewBox="0 0 16 16">
  <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z"/>
</svg>
        </div>
        <div>
          <h2>Exchange Server 2019</h2>
          <p>Running Exchange 2013 and need to keep data on-premise for compliance reasons? Exchange 2019 is your next option as the most updated version.</p>
          <a href="https://www.upwork.com/workwith/natep12" className="btn btn-secondary">
            Get Started
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark text-center flex-shrink-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
        </div>
        <div>
          <h2>Office | Microsoft 365</h2>
          <p>If you have Exchange server currently or on Office 365 and are ready to migrate to Microsoft 365, we've got you covered.</p>
          <a className="btn btn-secondary text-center" href="https://www.upwork.com/workwith/natep12">Get Started</a> 
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z"/>
</svg>
        </div>
        <div>
          <h2>Google Workspace and Microsoft 365</h2>
          <p>If you are wanting to move to or from either product, we can get you migrated over. </p>
          <a href="https://www.upwork.com/workwith/natep12" className="btn btn-secondary">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='container-fluid'>
  <div className='row'>
  <div className='col'>
      <h6 className='text-center'>Support: support@cloudtensolutions.com</h6>
    </div>
    <div className='col'>
      <h6 className='text-center'>&copy; 2016-2022 Cloud 10 Solutions | All Rights Reserved</h6>
    </div>
  </div>
</div>
</>
        ); 
}