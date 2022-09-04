import bwlogo from './images/bwlogo.png';


export default function Navigation() {
  return (
<div id="navigation"> 
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black">
    <div class="container-fluid">
      <img class="navbar-brand img-logo" src={bwlogo} width={200} height={80} alt="Company Logo" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={24} fill="silver" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
              </li>
             
              <li class="nav-item mx-2 text-secondary">           
                941-226-9613
              </li>
            </ul>
          </div>
        </div>
        </nav>
      </div>
  );
}