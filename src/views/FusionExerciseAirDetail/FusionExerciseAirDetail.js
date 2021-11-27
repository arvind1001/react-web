import React from 'react';
import Header from '../../components/Header/Header';
import ExerciseDetailSigmentTab from '../../components/ExerciseDetailSigmentTab/ExerciseDetailSigmentTab';
import ExerciseDetailVideo from '../../components/ExerciseDetailVideo/ExerciseDetailVideo';

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
import Cluster1 from '../../assets/images/Cluster-1.png';
import nounVideo from '../../assets/images/exercise_air_detail/noun_Video.png';
import editIcon from '../../assets/images/edit-icon.png';
import pic1 from '../../assets/images/pic1.png'
import pic2 from '../../assets/images/pic2.png'
import pic3 from '../../assets/images/pic3.png'
import startCom from '../../assets/images/start-com.png'
import endCom from '../../assets/images/end-com.png'
import otherImg1 from '../../assets/images/exercise_air_detail/other-img-1.png'
import otherImg2 from '../../assets/images/exercise_air_detail/other-img-2.png'
import otherImg3 from '../../assets/images/exercise_air_detail/other-img-3.png'
import otherImg4 from '../../assets/images/exercise_air_detail/other-img-4.png'
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
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  };

  return (
    <div className="fusion-exe-detail-warper">
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
       <ExerciseDetailVideo/>
        <Row >
          <Col sm={12} md={12}>
            <div className="sigment-img">
              <img src={nounVideo} className="sigment-img-right" />
              <ExerciseDetailSigmentTab></ExerciseDetailSigmentTab>
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
                  <div className="table-data table-responsive">
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
    </div>
  );
}

export default FusionExerciseAirDetail;