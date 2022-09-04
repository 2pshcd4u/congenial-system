import mobility from './images/mobility.png';
import migration from './images/migration.png';
import security from './images/security.png';

function Carousel() {
    return (
<div id="carousel">
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
    );
}
export default Carousel;