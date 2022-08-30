import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import server from './images/server.jpeg';
import network from './images/network.jpeg';
import security from './images/security.png';
import laptop from './images/laptop.jpeg';
import mobility from './images/mobility.png';
import migration from './images/migration.png';
import Col from 'react-bootstrap/esm/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import whitelogo from './images/logo_wg.png';
import cloudmanagement from './images/cloud_mobility.jpeg';
import programming from './images/programming.jpeg';
import support from './images/it_support.jpeg';
import Nav from "react-bootstrap/esm/Nav";
import bwlogo from './images/bwlogo.png';
import Navbar from 'react-bootstrap/esm/Navbar';

const Home = () => {
  return (
<>
<Navbar className="navbar navbar-expand fixed-top" bg="black" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img 
                       className="img-logo"
                       src={bwlogo}
                       width={200}
                       height={80}
                       alt="A grey laptop computer with a black background."
                />
              </Navbar.Brand>
              <Nav className="navbar-nav me-auto mb-2 mb-md-0">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Container>
</Navbar>
<Carousel fade>
    <Carousel.Item>
      <img
        className="bd-placeholder-img d-block w-100"
        src={mobility}
        width={800}
        height={400}
        alt="First slide"
      />
      <Carousel.Caption className="text-start">
        <h3>Endpoint Configuration</h3>
        <p>Manage your mobile devices with ease!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={migration}
        width={800}
        height={400}
        alt="Second slide"        
        />
      <Carousel.Caption>
        <h3>Cloud Migration</h3>
        <p>Minimize cost by migrating to the cloud!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={security}
        width={800}
        height={400}
        alt="Third slide"
      />
      <Carousel.Caption className="text-end">
        <h3>Secured Workloads</h3>
        <p>Encrypt data in transit and at rest!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

<Container className="container marketing">
  <Row>
    <Col lg={4}>
      <Image className="bd-placeholder-img rounded-circle"
              src={server}
              width={140}
              height={140}
              alt="A blade server being removed from an enclosure."> 
      </Image>
      <h2 class="fw-normal">Server Support</h2>
      <p></p>
    </Col>
    <Col lg={4}>
    <Image className="bd-placeholder-img rounded-circle"
              src={laptop}
              width={140}
              height={140}
              alt="A blade server being removed from an enclosure."> 
    </Image>
    <h2 class="fw-normal">Desktop Support</h2>
    </Col>
  <Col lg={4}>
    <Image className="bd-placeholder-img rounded-circle"
              src={network}
              width={140}
              height={140}
              alt="A blade server being removed from an enclosure."> 
      </Image>
    <h2 class="fw-normal">Network Support</h2>
    </Col>
</Row>
</Container>

<hr class="featurette-divider"></hr>

<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">Automation-As-A-Service</h2>
    <h2 class="text-muted">Autoclose a request? Yep, we said it!</h2>
    <p class="lead">Redundant tasks are inevitable. Automatically resolving them is too.</p>
  </div>
  <div class="col-md-5">
      <img src={programming}
           width={500}
           height={250}
           alt="Graphic cloud infrastructure related devices.">
     </img>
  </div>
</div>
<hr class="featurette-divider"></hr>

<div class="row featurette">
  <div class="col-md-7 order-md-2">
    <h2 class="featurette-heading fw-normal lh-1">Automate just about anything.</h2>
    <h2 class="text-muted">Imagine the possibilities!</h2>
    <p class="lead">A slew of custom automation that addresses, infrastructure, mobile devices, and policy deployments.</p>
  </div>
  <div class="col-md-5 order-md-1">
  <img src={cloudmanagement}
           width={500}
           height={250}
           alt="Graphic cloud infrastructure related devices.">
  </img>
  </div>
</div>

<hr class="featurette-divider"></hr>

<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">We can build it.</h2>
    <h2 class="text-muted">Just for you.</h2>
    <p class="lead">Every infrastructure is different but each have a base of common tasks. Let's start there! Afterwards, build on it.</p>
  </div>
  <div class="col-md-5">
  <img src={support}
           width={500}
           height={250}
           alt="Graphic cloud infrastructure related devices.">
     </img>
  </div>
</div>

<hr class="featurette-divider"></hr>

<div class="text-center">
    <footer class="container">
      <img class="img footer-logo" src={whitelogo} alt="A grey cloud."></img>
      <p>Contact: 941-226-9613</p>
      <a href="/Privacy">Privacy</a>
    </footer>
</div>
</>
  );
}
export default Home;