import server from './images/server.webp';
import network from './images/network.webp';
import keyboard from './images/keyboard.webp';
import { Outlet, Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
<div className="container py-4">
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
<div className="container marketing">
    <div className="row">
        <div className="col-lg-4 text-center">
            <img className="rounded-circle img-thumbnail" src={server} width={140} height={140} alt="Server System" />
                <h2>Servers</h2>
                    <p>Operating system and Application support.</p>
                    <p><a className="btn" href="/servers">Learn More &raquo;</a></p>
        </div>
  <div className="col-lg-4 text-center">
        <img className="rounded-circle img-thumbnail" src={network} width={140} height={140} alt="Network Router" />
    <h2>Networking</h2>
    <p>Route | Switch | Firewall</p>
    <p><a className="btn btn-secondary" href="#">Learn More &raquo;</a></p>
  </div>
  <div className="col-lg-4 text-center">
   <img className="rounded-circle img-thumbnail text-center" src={keyboard} width={140} height={140} alt="Application Code" />
    <h2>Workstations</h2>
    <p>Operating system and User application support.</p>
    <p><a className="btn btn-secondary" href="#">Learn More &raquo;</a></p>
  </div>
</div>
</div>

<div className="row">
  <div className="col text-center py-5">
    <h6>&copy; 2018-2022 Cloud 10 Solutions | All Rights Reserved</h6>
    <h6>Support: support@cloudtensolutions.com</h6>
  </div>
</div>
<Outlet />
</>
        ); 
}