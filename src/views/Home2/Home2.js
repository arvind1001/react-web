import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/Header/Header";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

import "./Home2.scss";
import "../../assets/styles/responsive.scss";
import Slider from "react-slick";
import Cluster1 from "../../assets/images/Cluster-1.png";
import Cluster2 from "../../assets/images/Cluster-2.png";
import Cluster3 from "../../assets/images/Cluster-3.png";
import Cluster4 from "../../assets/images/Cluster-4.png";
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
import card6 from "../../assets/images/home-img/card6.png";
import globeHands from "../../assets/images/home-img/globe-hands.png";
import web from "../../assets/images/home-img/web.png";
import map from "../../assets/images/home-img/map.png";
import HCPhone from "../../assets/images/home-img/HCPhone.png";

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
    <div className="homepage-info2">
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
                  <p className="cards-title">URBAN SANCTUARY</p>
                  <span className="cards-desc">
                    Human Well-being &<br /> Advancement Services{" "}
                  </span>
                </div>
                <div className="card-wrapper purple-card">
                  <img className="card-img" src={Group} />
                  <p className="cards-txt">MASTER SANCTUARY</p>
                  <span className="cards-desc">
                    Master Retreat & <br /> Conscious Lifestyle Experience
                  </span>
                  <div className="d-flex wrap-btn">
                    <button class="left-btn btn">SHOP ONLINE</button>
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

                  <span className="cards-desc">
                    Sanctuary Well-being Supplies
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
              <div><p className="img-txt">Permaculture experience</p>
                <span className="img-2-txt">To Connect With The Land And Sea</span>
              </div>
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
          <Col md={6} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card6} />
              <div className="img-txt">
                <span className="span1">Biophilia</span>
                <span className="span2">Outdoor pursuits, forest bathing, earthing,<br/>
                  eco meditation nature walks, fishing,<br/>
                  surfing, gardening</span>
              </div>
              <div class="bottom-txt">
                <button class="btn img-btn">Read More </button>
                <div className="spn3"></div>
              </div>
            </div>
          </Col>
          <Col md={6} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card4} />
              <div className="img-txt">
                <span className="span1">Weekend advancement workshops</span>
                <span className="span2">Guides, Workshops & Courses</span>
              </div>
              <div class="bottom-txt">
                <button class="btn img-btn">Read More </button>
                <div className="spn3"></div>
              </div>
            </div>
          </Col>
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
              <div className="img-txt">Holistic Health Programs</div>

              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
          <Col md={4} className="grid-wrap">
            <div className="img-with-txt">
              <img src={card3} className="w-100 img-fluid" />
              <div className="img-txt">
                <span className="span1">
                  Natural Biospherically<br />
                  Correct Products Made on Site
                </span>
                <span className="span2">Vision Products</span>
              </div>

              <button class="btn img-btn">Read More </button>
            </div>
          </Col>
        </Row>
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

    </div>
  );
};

export default Home;
