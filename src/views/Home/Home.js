import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

import "./Home.scss";
import "../../assets/styles/responsive.scss";
import Slider from "react-slick";
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
import barrow from "../../assets/images/b-arrow.png";
import slide1 from "../../assets/images/home-img/acro-acro-pose-acro-yoga.png";
import Path from "../../assets/images/home-img/Path.png";
import BeComeButton from "../../components/BeComeButton/BeComeButton";
import Park from "../../assets/images/home-img/park.png";
import Group from "../../assets/images/home-img/Group.png";
import Cart from "../../assets/images/home-img/cart.png";
import rightArrow from "../../assets/images/home-img/right-arrow.png";
import logoMetaWheel from "../../assets/images/home-img/Logo MetaWheel_1.png";
import Biospherically from "../../assets/images/home-img/biospherically-correct-trans-bg.png";
import leafImg from "../../assets/images/home-img/leaf-img.png";
import card1 from "../../assets/images/home-img/card1.png";
import card2 from "../../assets/images/home-img/card2.png";
import card3 from "../../assets/images/home-img/card3.png";
import card4 from "../../assets/images/home-img/card4.png";
import card5 from "../../assets/images/home-img/card5.png";
import Twitter from "../../assets/images/home-img/Twitter.png";
import globeHands from "../../assets/images/home-img/globe-hands.png";
import Facebook from "../../assets/images/home-img/Facebook.png";
import web from "../../assets/images/home-img/web.png";
import map from "../../assets/images/home-img/map.png";
import Form from "react-bootstrap/Form";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import mobileBg from "../../assets/images/home-img/mobileBg.png";
const Home = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    maxWidth: 50,
  };
  return (
    <div className="homepage-info">
      <Header />
      <div className="main-slider">
      <HomeSlider></HomeSlider>
      </div>
      <div class="user-form">
        <Container>
          <Row className="align-items-center">
            <Col md={4}>
              <BeComeButton />
            </Col>
            <Col md={8}>
              <p className="main-txt">
                Free Access the insights of our human advancement training
                guides.
              </p>
              <span className="secondary-txt">
                Join us now and get a new well-being strategy every week on how
                to incorporate these essential health keys into your life for
                greater vitality, and to live your ultimate health span.
              </span>
              <div className="form-cover">
                <Form.Group className="mb-3 mt-3">
                  <Form.Control type="text" placeholder="Full name" />
                </Form.Group>
                <Form.Group className="mb-3 mt-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <button className="signup-btn mt-3 mb-3">sign up</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="custom-card">
        <Container>
          <Row>
            <Col md={12}>
              <div className="card-info">
                <div className="card-wrapper">
                  <img className="card-img" src={Park} />
                  <p className="cards-title">MASTER SANCTUARY</p>
                  <p className="cards-txt">Reconnect with Land and Sea </p>
                  <span className="cards-desc">
                    Master Retreat & Conscious Lifestyle
                    <br />
                    Experience
                  </span>
                </div>
                <div className="card-wrapper dark-card">
                  <img className="card-img" src={Group} />
                  <p className="cards-title">URBAN SANCTUARY</p>
                  <p className="cards-txt">Holistic Advancement Architecture</p>
                  <span className="cards-desc">
                    Human Well-being & Advancement <br />
                    Services
                  </span>
                  <div className="d-flex wrap-btn">
                    <button class="left-btn btn">Virtual experience</button>
                    <button class="right-btn btn">
                      <img src={logoMetaWheel} />
                      <span className="read-more-btn">
                        Read More
                        <img src={rightArrow} />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="card-wrapper">
                  <img className="card-img" src={Cart} />
                  <p className="cards-title">SANCTUARY STORE</p>
                  <p className="cards-txt">Increasing Health Span</p>
                  <span className="cards-desc">
                    Well-being Services and Supplies
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="list-info">
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="text-center">
              <p className="lrg-txt">
                Discover your Magnificence <br />
                Urban Sanctuaries for Conscious Creatures
              </p>
            </Col>
            <Col md={5}>
              <div className="list-wrapper">
                <div className="list-img">
                  <img src={Biospherically} />
                </div>
                <div className="list-desc">
                  Biospherically Correct shopping and services experience,
                  elevating global consciousness and helping create “A
                  Successful Planet.”
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="sec-wrapper">
        <Row className="align-items-center ml-0 mr-0">
          <Col md={4} className="pl-0 pr-0">
            <div className="img-with-txt h-100">
              <img src={leafImg} className="h-100 w-100 leaf-img" />
              <div className="img-txt">Life Force Food</div>
              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={8}>
            <div className="txt-details">
              <p>
                <b>Our Sanctuary Stores</b> stock the entire Vision,
                Biospherically Correct, product range of Superfood Skincare, Eco
                Hair and Body care, Super soft eco apparel, Natures Greeting
                Cards and Coconut Oil, along with our extensive range of Life
                Force Foods, drinks and dressings, which you can nutritionally
                analyse using our Health Creator App for optimum everyday
                well-being. Sign up to access the food science, gain greater
                health, help achieve your ideal weight, and quick purchase
                products with your Urban Sanctuary account.
              </p>
              <div className="icon-wrapper">
                <div className="setion-name">
                  <img src={Cluster1} className="img-fluid" />
                  <p>Health</p>
                </div>

                <div className="setion-name">
                  <img src={Cluster2} />
                  <p>Prosperity</p>
                </div>

                <div className="setion-name">
                  <img src={Cluster3} />
                  <p>Inspiration</p>
                </div>

                <div className="setion-name">
                  <img src={Cluster4} />
                  <p>Joy</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div class="sec-wrapper  img-grid-c">
        <Row className="align-items-center ml-0 mr-0">
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt ">
              <img src={card1} className="w-100 img-fluid" />
              <div className="img-txt">
                Advanced Holistic <br />
                Testing & Apps
              </div>
              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card2} className="w-100 img-fluid" />
              <div className="img-txt">Advancement Exercises</div>

              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card3} className="w-100 img-fluid" />
              <div className="img-txt">
                <span className="span1">
                  Natural Biospherically <br />
                  Correct Products
                </span>
                <span className="span2">Vision Products</span>
              </div>

              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={6} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card4} />
              <div className="img-txt">
                <span className="span1">In-house Health Specialists</span>
                <span className="span2">Protocols & Consultancy</span>
              </div>
              <div class="bottom-txt">
                <button class="btn img-btn">Read More </button>
                <div className="spn3">Coming Soon</div>
              </div>
            </div>
          </Col>
          <Col md={6} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card5} />
              <div className="img-txt">
                <span className="span1">Advanced Learning</span>
                <span className="span2">Guides, Workshops & Courses</span>
              </div>
              <div class="bottom-txt">
                <button class="btn img-btn">Read More </button>
                <div className="spn3">Coming Soon</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div class="img-slides">
        <Slider {...settings}>
          <div class="position-relative">
            <img src={mobileBg} />
            <h3>
              OUR <br />
              <div className="spn-txt">APPLICATIONS</div>
            </h3>
          </div>
          <div class="position-relative">
            <img src={mobileBg} />
            <h3>
              OUR <br />
              APPLICATIONS
            </h3>
          </div>
          <div class="position-relative">
            <img src={mobileBg} />
            <h3>
              OUR <br />
              APPLICATIONS
            </h3>
          </div>
        </Slider>
      </div>
      <div className="our-story">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={6} className="text-center">
              <img src={globeHands} />
            </Col>
            <Col md={6}>
              <div className="story-txt">
                <div className="story-title">Our Story</div>
                <p class="light-txt">
                  Vision for Humanity and the Sanctuary Project
                </p>
                <p class="bold-txt">Greater people for better planet</p>
                <p class="story-desc">
                  The VFH Sanctuaries work together as a Biospherically Correct
                  eco system, providing you a stream of organic foods, ethical
                  products and personal development services, all based around
                  bringing out the magnificence in you. From our Charter we
                  promote that ‘we are all creators, with a life purpose to be
                  our fullest capacity and most magnificent expression’. The
                  Sanctuaries also interlock your advancement into planetary
                  wellbeing. Through their greater purpose and ethos, the
                  Sanctuaries show the path of greater people for better planet.
                  See our Global Metawheel.
                </p>
                <p class="story-desc">
                  Consciously shop online or at our Sanctuary Stores, personally
                  advance and grow through our Urban Sanctuary services, enjoy
                  the bliss and serenity of our Master Sanctuary, engage with
                  other conscious creatures on our Higher Consciousness Network
                  and ultimately prosper through ‘right livihood’ with our Plato
                  Franchise System opportunity.
                </p>
                <div className="social-icons">
                  <p className="mb-0">
                    Discover your Magnificence at the Sanctuary
                  </p>
                  <div className="icons-cover">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <img src={web} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="map-info">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <div className="map-title">
                PROSPER - THE WORLD IS YOUR OYSTER
              </div>
              <p className="map-desc">
                Join the higher consciousness revolution, and utilize the Plato
                Franchise System
                <br />
                to establish a meaningful livelihood.{" "}
                <a>Find out how to apply here</a>
              </p>
            </Col>
            <Col md={12} className="text-center map-tab">
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="World">
                  <div className="table-data">
                    <img src={map} />
                  </div>
                </Tab>
                <Tab eventKey="second" title="Australia & New Zealand">
                  <div className="chart-sec">
                    <img src={map} />
                  </div>
                </Tab>
                <Tab eventKey="third" title="Auckland">
                  <div className="chart-sec">
                    <img src={map} />
                  </div>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="content-wrapper">
        <Container>
          <Row>
            <Col md={6} className="txt-wrapper">
              <div className="content-heading">THE PLATO FRANCHISE SYSTEM</div>
              <p>
                Participate in our Plato Franchise opportunity and prosper while
                being instrumental in helping create “A Successful Planet”.
              </p>
              <p>
                Plato, born 427 BC, a philosopher in Classical Greece, became
                the founder of the Academy in Athens, the first institution of
                higher learning in the Western world. Plato has become widely
                considered as one of the most respected thinkers of all time.
                One of Plato’s philosophies was that a person’s wage should not
                be more than 5 times that of another's. Plato was thinking of
                the power structures of the era, however to help establish a
                sense of equality in the world, we believe this thinking is now
                more important than ever.
              </p>
            </Col>
            <Col md={6}>
              <button class="btn inquire-btn">ENQUIRE ABOUT THIS</button>
              <p>
                Share your skills and passions with others, form your syndicate,
                build your teams ability, establish each person's role on our
                operational template, then have your chosen team leader submit
                your syndicates application to us. If you and your team are
                approved we will help you open your very own Sanctuary Store or
                Urban Sanctuary.
              </p>
              <p>
                We believe the Sanctuary and the Plato Franchise System
                opportunity is the way of the future; creating ecologically and
                financially sustainable pathways forward while collaborating
                people. Find out more here.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="men-grp">
        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col md={8} className="grp-wrapper">
              <div className="grp-heading">
                GREATER PEOPLE FOR BETTER PLANET
              </div>
              <p className="grp-desc">
                Join our growing number of Visionary Urban Sanctuary customers
              </p>

              <span className="btn-1">Natural Beauty</span>

              <span className="btn-1">Increased Vitality</span>

              <span className="btn-1">Esteem and Appearance</span>

              <span className="btn-1">Improved Health</span>

              <span className="btn-1">Greater Prosperity</span>

              <span className="btn-1">Better Relationships </span>

              <span className="btn-1 bg-light-custom">
                Life Balance and Connection
              </span>

              <span className="btn-1">Empowerment</span>

              <span className="btn-1">Greater Purpose</span>

              <span className="btn-1">Clarity of Mind</span>

              <span className="btn-1">Greater Happiness</span>
            </Col>
            <Col md={7}>
              <div className="white-bg-txt ">
                <div className="d-flex icon-info justify-content-between">
                  <div className="name">Jean Shrimpton</div>
                  <div className="icons-cover d-flex align-items-center">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <img src={web} />
                  </div>
                </div>
                <p>
                  Since shopping at the Sanctuary Store and eating truly good
                  food every day, I cannot believe the difference this has made
                  to my energy levels and work performance. I am definitely
                  recommending Sanctuary to all of my friends. What a great
                  concepts, thank you Sanctuary Store!
                </p>
              </div>
              <p className="norm-txt">Discover your Magnificence</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
