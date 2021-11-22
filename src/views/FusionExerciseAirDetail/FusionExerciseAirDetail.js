import React from 'react';
import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Bar } from 'react-chartjs-2';
import playerIcon from '../../assets/images/personHealth.png';
import bannerIng from '../../assets/images/fu-exercise2.png';
import circleIon from '../../assets/images/circle-ion.png';
import editIcons from '../../assets/images/edit-icons.png';
import shifterApp from '../../assets/images/shifterapp.png';
import creatorApp from '../../assets/images/creatorapp.png';
import blackDiamond from '../../assets/images/black-diamond.png';
import Yoga from '../../assets/images/yoga.png';
import favIcon1 from '../../assets/images/fav_icon1.png';
import favIcon2 from '../../assets/images/fav_icon2.png';
import Cluster1 from '../../assets/images/Cluster-1.png';
import Cluster2 from '../../assets/images/Cluster-2.png';
import Cluster3 from '../../assets/images/Cluster-3.png';
import Cluster4 from '../../assets/images/Cluster-4.png';
import playerIcons from '../../assets/images/player-icon.png';
import nounVideo from '../../assets/images/noun_Video.png';
import sigment1 from '../../assets/images/sigment1.png';
import sigment2 from '../../assets/images/sigment2.png';
import sigment3 from '../../assets/images/sigment3.png';
import sigment4 from '../../assets/images/sigment4.png';
import sigment5 from '../../assets/images/sigment5.png';
import sigment6 from '../../assets/images/sigment6.png';
import sigment7 from '../../assets/images/sigment7.png';
import editIcon from '../../assets/images/edit-icon.png';
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'
import startCom from '../../assets/images/start-com.png'
import endCom from '../../assets/images/end-com.png'
import otherImg1 from '../../assets/images/other-img-1.png'
import otherImg2 from '../../assets/images/other-img-2.png'
import otherImg3 from '../../assets/images/other-img-3.png'
import otherImg4 from '../../assets/images/other-img-4.png'
import './FusionExerciseAirDetail.scss';
const data = {
  labels: ['Fusion Air', 'Fusion Water', 'Fusion Crystal', 'Fusion Diamond', 'Vinyasa 1','Vinyasa 2','Modern Dance','Classic Dance'],
  datasets: [
    {
      label: 'Calories',
      data: [240,360, 260, 380, 220, 370,280,320,340],
      backgroundColor: [
        '#3ef73e',
        '#f7e53e',
        '#2d902d',
        '#f73eb9',
        '#f73e3e',
        '#60a5f5',
        '#be6fa0',
        '#ca8c27'
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      //   'rgba(255, 206, 86, 1)',
      //   'rgba(75, 192, 192, 1)',
      //   'rgba(153, 102, 255, 1)',
      //   'rgba(255, 159, 64, 1)',
      // ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      //display: true,
      //text: 'F Chart',
    },
  },
};

const FusionExerciseAirDetail = () => {

  var settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  var sigCard = {
    autoplay: true,
    dots: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <Header />
      <Row>
        <Col sm={12} md={12}>
          <div className="banner-secss">
            <div className="content-sec">
              <h1>Fusion Exercise</h1>
            </div>
            <div className="right-img">
              <img src={playerIcon} />
            </div>
            <img src={bannerIng} />
          </div>
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
              <button><img src={shifterApp} /> WEIGHT SHIFTER APP</button>
              <button><img src={creatorApp} /> HEALTH CREATOR APP</button>
            </div>
          </Col>
        </Row>
      </div>
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="vedio-sec">
              <div className="vedio-con">
                <div className="vedios">
                  <img src={Yoga} />
                  <img src={startCom} />
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
        <Row >
          <Col sm={12} md={12}>
            <div className="sigment-img">
              <img src={nounVideo} className="sigment-img-right" />
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="Select Ambiance">
                  <Slider {...sigCard}>
                    <div className="sig-card">
                      <p>Okinawan Garden</p>
                      <img src={sigment1} />
                    </div>

                    <div className="sig-card">
                      <p>Tropical Beach</p>
                      <img src={sigment2} />
                    </div>
                    <div className="sig-card">
                      <p>New York loft</p>
                      <img src={sigment3} />
                    </div>
                    <div className="sig-card">
                      <p>Warehouse</p>
                      <img src={sigment4} />
                    </div>
                    <div className="sig-card">
                      <p>High Tech Studio</p>
                      <img src={sigment5} />
                    </div>
                    <div className="sig-card">
                      <p>Forest Water Fall</p>
                      <img src={sigment6} />
                    </div>
                    <div className="sig-card">
                      <p>Lake</p>
                      <img src={sigment7} />
                    </div>
                  </Slider>
                </Tab>
                <Tab eventKey="second" title="Select Segments">
                  <Slider {...sigCard}>
                    <div className="sig-card">
                      <p>Okinawan Garden</p>
                      <img src={sigment1} />
                    </div>
                    <div className="sig-card">
                      <p>Tropical Beach</p>
                      <img src={sigment2} />
                    </div>
                    <div className="sig-card">
                      <p>New York loft</p>
                      <img src={sigment3} />
                    </div>
                    <div className="sig-card">
                      <p>Warehouse</p>
                      <img src={sigment4} />
                    </div>
                    <div className="sig-card">
                      <p>High Tech Studio</p>
                      <img src={sigment5} />
                    </div>
                    <div className="sig-card">
                      <p>Forest Water Fall</p>
                      <img src={sigment6} />
                    </div>
                    <div className="sig-card">
                      <p>Lake</p>
                      <img src={sigment7} />
                    </div>
                  </Slider>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col sm={12} md={12}>
            <div className="cust-review">
              <h1>Customer Reviews</h1>
              <img src={editIcon} title="WRITE REVIEWS" />
            </div>
          </Col>
        </Row >

      </Container>
      <div className="revie-slider">
        <Slider {...settings}>
          <div className="review-card">
            <div className="card-review">
              <div className="head-sec">
                <img src={pic1} />
                <div className="head-info">
                  <p>Aliquam tellus </p>
                  <h1>Chris Andrews</h1>
                </div>
              </div>
              <div className="star-info">
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star no-colr"></i>
                </p>
                <p>Home Workout</p>
              </div>
              <div className="info2">
                <img src={startCom} />
                <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                <img src={endCom} className="img2" />
                <span>26/01/2020</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="card-review">
              <div className="head-sec">
                <img src={pic2} />
                <div className="head-info">
                  <p>Aliquam tellus </p>
                  <h1>Chris Andrews</h1>
                </div>
              </div>
              <div className="star-info">
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star no-colr"></i>
                </p>
                <p>Home Workout</p>
              </div>
              <div className="info2">
                <img src={startCom} />
                <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                <img src={endCom} className="img2" />
                <span>26/01/2020</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="card-review">
              <div className="head-sec">
                <img src={pic3} />
                <div className="head-info">
                  <p>Aliquam tellus </p>
                  <h1>Chris Andrews</h1>
                </div>
              </div>
              <div className="star-info">
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star no-colr"></i>
                </p>
                <p>Home Workout</p>
              </div>
              <div className="info2">
                <img src={startCom} />
                <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                <img src={endCom} className="img2" />
                <span>26/01/2020</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="card-review">
              <div className="head-sec">
                <img src={pic1} />
                <div className="head-info">
                  <p>Aliquam tellus </p>
                  <h1>Chris Andrews</h1>
                </div>
              </div>
              <div className="star-info">
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star no-colr"></i>
                </p>
                <p>Home Workout</p>
              </div>
              <div className="info2">
                <img src={startCom} />
                <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                <img src={endCom} className="img2" />
                <span>26/01/2020</span>
              </div>
            </div>
          </div>
          <div className="review-card">
            <div className="card-review">
              <div className="head-sec">
                <img src={pic1} />
                <div className="head-info">
                  <p>Aliquam tellus </p>
                  <h1>Chris Andrews</h1>
                </div>
              </div>
              <div className="star-info">
                <p>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star no-colr"></i>
                </p>
                <p>Home Workout</p>
              </div>
              <div className="info2">
                <img src={startCom} />
                <p>Mauris neque nisi, faucibus non elementum in, convallis et eros. Sed pretium sem libero, vel pellentesque purus ultrices ut. In quis leo id massa pulvinar euismod cursus non justo. </p>
                <img src={endCom} className="img2" />
                <span>26/01/2020</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <Container>
        <Row >
          <Col sm={12} md={12}>
            <div className="exercise-programs">
              <h1>other exercise programs you may like</h1>
              <Slider {...settings}>
                <div className="exercise-pro">
                  <div className="sig-card">
                    <img src={otherImg1} />
                    <p>Yoga</p>
                  </div>
                </div>
                <div className="exercise-pro">
                  <div className="sig-card">
                    <img src={otherImg2} />
                    <p>Home Workouts</p>
                  </div>
                </div>
                <div className="exercise-pro">
                  <div className="sig-card">
                    <img src={otherImg3} />
                    <p>Dance</p>
                  </div>
                </div>
                <div className="exercise-pro">
                  <div className="sig-card">
                    <img src={otherImg4} />
                    <p>Mind Health Exercise</p>
                  </div>
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row >
          <Col sm={12} md={3}>
            <div className="left-chart">
              <ul>
                <li>On Demand</li>
                <li className="cal-active">Live Session</li>
                <li>Calories</li>
                <li>Calender </li>
                <li>Guides</li>
                <li>Workshops</li>
                <li>Courses</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <div className="char-setion">
              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="View 1">
                  <div className="table-data">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Exercise</th>
                          <th>125 pounds/56,7kg</th>
                          <th>155 pounds/70,7kg</th>
                          <th>185 pounds/83,9kg</th>
                          <th>250 pounds/113,4kg</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i class="fas fa-circle"></i>Fusion Air</td>
                          <td>240 Calories</td>
                          <td>220 Calories</td>
                          <td>250 Calories</td>
                          <td>260 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Fusion Water</td>
                          <td>340 Calories</td>
                          <td>350 Calories</td>
                          <td>320 Calories</td>
                          <td>310 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Fusion Crystal</td>
                          <td>240 Calories</td>
                          <td>220 Calories</td>
                          <td>250 Calories</td>
                          <td>260 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Fusion Diamond</td>
                          <td>240 Calories</td>
                          <td>220 Calories</td>
                          <td>250 Calories</td>
                          <td>260 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Vinyasa 1</td>
                          <td>340 Calories</td>
                          <td>350 Calories</td>
                          <td>320 Calories</td>
                          <td>310 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Vinyasa 2</td>
                          <td>240 Calories</td>
                          <td>220 Calories</td>
                          <td>250 Calories</td>
                          <td>260 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Modern Dance</td>
                          <td>340 Calories</td>
                          <td>350 Calories</td>
                          <td>320 Calories</td>
                          <td>310 Calories</td>
                        </tr>
                        <tr>
                          <td><i class="fas fa-circle"></i>Classic Dance</td>
                          <td>240 Calories</td>
                          <td>240 Calories</td>
                          <td>240 Calories</td>
                          <td>240 Calories</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
                <Tab eventKey="second" title="View 1">
                  <div className="chart-sec">
                  <Bar data={data} options={options} />
                  </div>
                    
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FusionExerciseAirDetail;