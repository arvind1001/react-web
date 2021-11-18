import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import Header from '../../components/Header/Header';
import sliderImg from '../../assets/images/acro-yoga.jpg';
import Cluster1 from '../../assets/images/Cluster-1.png'
import Cluster2 from '../../assets/images/Cluster-2.png'
import Cluster3 from '../../assets/images/Cluster-3.png'
import Cluster4 from '../../assets/images/Cluster-4.png'
import barrow from '../../assets/images/b-arrow.png'
import playerIcon from '../../assets/images/player-icon.png'
import personHealth from '../../assets/images/personHealth.png'
import circleIon from '../../assets/images/circle-ion.png'
import editIcons from '../../assets/images/edit-icons.png'

import './AdvanceExercises.scss';

const AdvanceExercises = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    maxWidth: 50
  };
  return (
    <>
      <Header />
      <Row>

        <Col sm={12} md={12}>
          <Slider {...settings}>
            <div className="slider-conatiner">
              <div className="cente-text">
                <h1>Advancement exercises</h1>
                <p>Can be done anywhere- no specialised equipment required</p>
                <button>Start Todat</button>
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
                  {/* <span className="pro-co">Prosperity</span> */}
                  <img src={Cluster2} />
                </div>
                <div className="tb-info">
                  {/* <span className="ins-co">Inspiration</span> */}
                  <img src={Cluster3} />
                </div>
                <div className="tb-info">
                  {/* <span className="joy-co">Joy</span> */}
                  <img src={Cluster4} />
                </div>
              </div>
              <img src={sliderImg} />
            </div>
            <div className="slider-conatiner">
              <div className="cente-text">
                <h1>Advancement exercises</h1>
                <p>Can be done anywhere- no specialised equipment required</p>
                <button>Start Todat</button>
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
                  {/* <span className="pro-co">Prosperity</span> */}
                  <img src={Cluster2} />
                </div>
                <div className="tb-info">
                  {/* <span className="ins-co">Inspiration</span> */}
                  <img src={Cluster3} />
                </div>
                <div className="tb-info">
                  {/* <span className="joy-co">Joy</span> */}
                  <img src={Cluster4} />
                </div>
              </div>
              <img src={sliderImg} />
            </div>
          </Slider>

        </Col>
      </Row>
      <div className="info-wraper">
        <Row>

          <Col sm={12} md={5}>
            <div className="info-sec">
              <span className="info-left">
                <img src={circleIon} />
                <p>Health</p>
              </span>
              <p>When phasellus dignissim, in pellentesuqe?</p>
              <img src={editIcons} />
            </div>

          </Col>
          <Col sm={12} md={2}>

            <div className="tb-info">
              <img className="activeimg" src={Cluster1} />
            </div>
          </Col>
          <Col sm={12} md={5}>
            <div className="app-btn">
              <button><img src={circleIon} /> WEIGHT SHIFTER APP</button>
              <button><img src={circleIon} /> HEALTH CREATOR APP</button>
            </div>
          </Col>
        </Row>
      </div>
      <Row>

        <Col sm={12} md={12}>
          <div className="botom-icon">
            <div className="setion-name">
              <img src={Cluster1} />
              <p>Health</p>
            </div>
            <span>|</span>
            <div className="setion-name">
              <img src={Cluster2} />
              <p>Prosperity</p>
            </div>
            <span>|</span>
            <div className="setion-name">
              <img src={Cluster3} />
              <p>Inspiration</p>
            </div>
            <span>|</span>
            <div className="setion-name">
              <img src={Cluster4} />
              <p>Joy</p>
            </div>
          </div>

        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12}>
          <div className="exercise-secion-right">
            <div className="section-right">
              <h1>FUSION Exercise Series </h1>
              <div className="exe-inner exe-bg1">
                <div className="exe-inner-sp">

                  <Row>

                    <Col sm={4} md={3}>
                      <div className="line-inner">
                        <div className="v-line">
                        </div>
                        <ul className="v-text">
                          <li>AIR</li>
                          <li>WATER</li>
                          <li>Crystal</li>
                          <li>Diamond</li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="content-inner">
                        <h3>Sanctuary Mind X Body Exercise</h3>
                        <p>Amplify the abilities of the body through the power of the mind with our Fusion Exercise series.
                        </p>
                        <p>A multi-faceted exercise program that encompasses the key Health Psychology aspects to fortify and enhance one’s mental, emotional state while also providing all of the very best physical components for complete all round holistic health – firstly to aid and promote preventative health, healing and anti-aging, and secondly to enhance the body’s abilities for exceptional physical performance.
                        </p>
                        <p>This workout program involves four progressive mental-emotional fitness, physical fitness, and flexibility and strength levels to create a more fully dynamic you
                        </p>
                        <div className="btn-section">
                          <button>READ MORE</button>
                          <img src={playerIcon} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={2} md={2}>
                      <img src={personHealth} />
                    </Col>
                  </Row>
                </div>
              </div>
              <h2>DiscoveR  Shift  Evolve  Create</h2>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="exercise-secion-left">
            <div className="section-right">
              <h1>Home workouts</h1>
              <div className="exe-inner exe-bg2">
                <div className="exe-inner-sp">
                  <Row>
                    <Col sm={2} md={2}>
                      <img src={personHealth} />
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="content-inner">
                        <h3>Porta pharetra nec</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                        <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>

                        <div className="btn-section">
                          <button>READ MORE</button>
                          <img src={playerIcon} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={3}>
                      <div className="line-inner">

                        <ul className="v-text">
                          <li>Stretching</li>
                          <li>Calisthenics</li>
                          <li>Isometrics</li>
                          <li>Hiit</li>
                        </ul>
                        <div className="v-line">
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <h2>DiscoveR  Shift  Evolve  Create</h2>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="exercise-secion-right">
            <div className="section-right">
              <h1>Yoga & Qigong</h1>
              <div className="exe-inner exe-bg3">
                <div className="exe-inner-sp">

                  <Row>

                    <Col sm={4} md={3}>
                      <div className="line-inner">
                        <div className="v-line">
                        </div>
                        <ul className="v-text">
                          <li>Vanyasa FLOW 1</li>
                          <li>Vanyasa FLOW 2</li>
                          <li>Vanyasa FLOW 3</li>
                          <li>Qigong</li>
                          <li>Martial arts</li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="content-inner">
                        <h3>Orci tincidunt </h3>
                        <p>Amplify the abilities of the body through the power of the mind with our Fusion Exercise series.
                        </p>
                        <p>A multi-faceted exercise program that encompasses the key Health Psychology aspects to fortify and enhance one’s mental, emotional state while also providing all of the very best physical components for complete all round holistic health – firstly to aid and promote preventative health, healing and anti-aging, and secondly to enhance the body’s abilities for exceptional physical performance.
                        </p>
                        <p>This workout program involves four progressive mental-emotional fitness, physical fitness, and flexibility and strength levels to create a more fully dynamic you
                        </p>
                        <div className="btn-section">
                          <button>READ MORE</button>
                          <img src={playerIcon} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={2} md={2}>
                      <img src={personHealth} />
                    </Col>
                  </Row>
                </div>
              </div>
              <h2>DiscoveR  Shift  Evolve  Create</h2>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="exercise-secion-left">
            <div className="section-right">
              <h1>dance</h1>
              <div className="exe-inner exe-bg4">
                <div className="exe-inner-sp">
                  <Row>
                    <Col sm={2} md={2}>
                      <img src={personHealth} />
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="content-inner">
                        <h3>Porta aliquam metus</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                        <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>

                        <div className="btn-section">
                          <button>READ MORE</button>
                          <img src={playerIcon} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={4} md={3}>
                      <div className="line-inner">

                        <ul className="v-text">
                          <li>modern</li>
                          <li>salsa</li>
                          <li>tango</li>
                          <li>Cha cha</li>
                        </ul>
                        <div className="v-line">
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <h2>DiscoveR  Shift  Evolve  Create</h2>
            </div>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="exercise-secion-right">
            <div className="section-right">
              <h1>Mind-health </h1>
              <div className="exe-inner exe-bg5">
                <div className="exe-inner-sp">

                  <Row>

                    <Col sm={4} md={3}>
                      <div className="line-inner">
                        <div className="v-line">
                        </div>
                        <ul className="v-text">
                          <li>Affirmations</li>
                          <li>Visualisations</li>
                          <li>GUIDED meditations</li>
                          <li>Healing readings</li>
                          <li>Breathing Exercise</li>
                        </ul>
                      </div>
                    </Col>
                    <Col sm={6} md={7}>
                      <div className="content-inner">
                        <h3>Porta pharetra nec</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                        <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        </p>
                        <div className="btn-section">
                          <button>READ MORE</button>
                          <img src={playerIcon} />
                        </div>
                      </div>
                    </Col>
                    <Col sm={2} md={2}>
                      <img src={personHealth} />
                    </Col>
                  </Row>
                </div>
              </div>
              <h2>DiscoveR  Shift  Evolve  Create</h2>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
      <div className="shifter-plan">
        <h3>WEIGHT SHIFTER PLAN</h3>
        <Row>
          <Col sm={12} md={6}>
            <div className="ex-plans">
              <p>or Select an existing Exercise plan</p>
              <div class="form-group">
                <label>Exercise Plan Name</label>
                <input type="text" class="form-control" placeholder="Plan Name" />
              </div>
              <div class="form-group">
                <label>Select Week</label>
                <select class="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className='submit-btn'>
                  <button className="btn">Create Plan</button>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <div className="ex-plans">
              <p>or Select an existing Exercise plan</p>
              <div class="form-group">
                <label>Exercise plan Name</label>
                <select class="form-control" >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className='submit-btn'>
                  <button className="btn">Submit</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      </Container>
    </>
  );
}

export default AdvanceExercises;
