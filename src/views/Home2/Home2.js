import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
// import "../Home.scss";
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
import "./Home2.scss";
const Home2 = () => {
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
        <Row>
          <Col sm={12} md={12}>
            <Slider {...settings}>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="italic-txt">Discover your Magnificence</h1>
                  <h1 className="large-txt">
                    URBAN SANCTUARIES FOR<br></br>CONSCIOUS CREATURES
                  </h1>
                  <p>Human Well-being & Advancement Centre.</p>
                  <p>
                    Develop your full Life Force, Holistic Human Vibrancy,
                    Significance and Purpose.
                  </p>
                  <button className="learn-more-btn">
                    LEARN ABOUT US
                    <img src={Path} />
                  </button>
                  <div className="arrow-icon">
                    <img src={barrow} />
                  </div>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <span className="health-co">HEALTH</span>
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                </div>
                <img className="banner-img" src={slide1} />
              </div>
              <div className="slider-conatiner">
                <div className=" slider-txt">
                  <h1 className="italic-txt">Discover your Magnificence</h1>
                  <h1 className="large-txt">
                    URBAN SANCTUARIES FOR<br></br>CONSCIOUS CREATURES
                  </h1>
                  <p>Human Well-being & Advancement Centre.</p>
                  <p>
                    Develop your full Life Force, Holistic Human Vibrancy,
                    Significance and Purpose.
                  </p>
                  <button className="learn-more-btn">
                    LEARN ABOUT US
                    <img src={Path} />
                  </button>
                  <div className="arrow-icon">
                    <img src={barrow} />
                  </div>
                </div>
                <div className="right-icon">
                  <div className="tb-info">
                    <span className="health-co">HEALTH</span>
                    <img className="activeimg" src={Cluster1} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster2} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster3} />
                  </div>
                  <div className="tb-info">
                    <img src={Cluster4} />
                  </div>
                </div>
                <img className="banner-img" src={slide1} />
              </div>
            </Slider>
          </Col>
        </Row>
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
        <Row className="align-items-center">
          <Col md={4} className="pl-0 pr-0">
            <div className="img-with-txt">
              <img src={leafImg} />
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
                  <img src={Cluster1} />
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

      <div class="sec-wrapper img-grid-c">
        <Row className="align-items-center">
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card1} />
              <div className="img-txt">
                Advanced Holistic <br />
                Testing & Apps
              </div>
              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card2} />
              <div className="img-txt">Advancement Exercises</div>

              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card3} />
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
          <Row>
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
    </div>
  );
};

export default Home2;
