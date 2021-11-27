import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import blackDiamond from '../../assets/images/black-diamond.png';
import Yoga from '../../assets/images/exercise_air_detail/yoga.png';
import favIcon1 from '../../assets/images/fav_icon1.png';
import favIcon2 from '../../assets/images/fav_icon2.png';
import Cluster1 from '../../assets/images/Cluster-1.png';
import Cluster2 from '../../assets/images/Cluster-2.png';
import Cluster3 from '../../assets/images/Cluster-3.png';
import Cluster4 from '../../assets/images/Cluster-4.png';
import playerIcons from '../../assets/images/player-icon.png';
import './ExerciseDetailVideo.scss';

const ExerciseDetailVideo = () => {
  return (
    <>
      <Row>
          <Col sm={12} md={12}>
            <div className="vedio-sec">
              <div className="vedio-con">
                <div className="vedios">
                  <img src={Yoga} />
                  <img src={playerIcons} />
                </div>
                <div className="vedios-pagi">
                  <p>On Demand air classes:</p>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>
              </div>

              <div className="profile-info">
                <div className="info-con">
                  <div className="profile-img">
                    <img src={blackDiamond} />
                    <h3>Exp: 35 years</h3>
                  </div>
                  <div className="profile-text">
                    <label>Trainer :</label><span>Kim Larking</span>
                    <p>Kim Larking, creator of Mind X Body Fusion Exercise, author of the book Health Psychology, 6th degree Kiaido Ryu black belt, aikido and yoga enthusiast, anti-aging and health span educator.</p>
                  </div>
                </div>
                <div className="profile-wrap">
                  <Row>
                    <Col sm={12} md={12}>
                      <div className="profile-health">
                        <h2>My Health Info</h2>
                      </div>
                    </Col>
                    <Col sm={12} md={6}>
                      <div className="health">
                        <p>Age:</p>
                        <p>18</p>
                      </div>
                    </Col>
                    <Col sm={12} md={6}>
                      <div className="health">
                        <p>Gender:</p>
                        <p>Female</p>
                      </div>
                    </Col>
                    <Col sm={12} md={6}>
                      <div className="health">
                        <p>Weight:</p>
                        <p>54kg</p>
                      </div>
                    </Col>
                    <Col sm={12} md={6}>
                      <div className="health">
                        <p>Height:</p>
                        <p>168cm</p>
                      </div>

                    </Col>
                    <div className="text-cmp">
                      <p> >> Complete Your Health Info</p>
                    </div>
                    <Col sm={12} md={12}>
                      <div className="profile-health">
                        <h2>Workout Info</h2>
                        <div className="shealth">
                          <p>Workout Duration:</p>
                          <span>60 Minutes</span>
                        </div>
                      </div>
                      <div className="work-health">
                        <p>Intent intensity:</p>
                        <div className="btn-health">
                          <button>Light</button>
                          <button className="hactive">Medium</button>
                          <button>Maximum</button>
                        </div>
                      </div>
                      <div className="max-health">
                        <p>Maximum Expected Calorie Burn:</p>
                        <p>300kcl</p>
                        <img src={favIcon1} />
                        <img src={favIcon2} />
                      </div>
                      <div className="max-health">
                        <a href="">Pre Workout Life Force Food</a>
                        <a href="">Post Work Life Force Food</a>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className="cluster">
                <ul>
                  <li><img src={Cluster1} /></li>
                  <li><img src={Cluster2} /></li>
                  <li><img src={Cluster3} /></li>
                  <li><img src={Cluster4} /></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row >
    </>
  );
}

export default ExerciseDetailVideo;