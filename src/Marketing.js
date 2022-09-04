import server from './images/server.jpeg';
import laptop from './images/laptop.jpeg';
import network from './images/network.jpeg';
import programming from './images/programming.jpeg';
import cloud_mobility from './images/cloud_mobility.jpeg';
import it_support from './images/it_support.jpeg';


function Marketing() {
    return (
    <div id="marketing">
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
  
  <hr class="featurette-divider" />
  
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
  
  <hr class="featurette-divider" />
  
  <div class="row featurette">
  <div class="col-md-7">
  <h2 class="featurette-heading fw-normal lh-1">We can build it.</h2>
  <h2 class="text-muted">Just for you.</h2>
  <p class="lead">Every infrastructure is different but each have a base of common tasks. Let"s start there! Afterwards, build on it.</p>
  </div>
  <div class="col-md-5">
  <img src={it_support} width={500} height={500} alt="Graphic cloud infrastructure related devices." />
  </div>
  </div>
  <hr class="featurette-divider" />

</div>
</div>
    );
}

export default Marketing;