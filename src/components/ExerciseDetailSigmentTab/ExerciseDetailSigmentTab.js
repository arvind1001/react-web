import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Slider from "react-slick";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import sigment1 from '../../assets/images/exercise_air_detail/sigment1.png';
import sigment2 from '../../assets/images/exercise_air_detail/sigment2.png';
import sigment3 from '../../assets/images/exercise_air_detail/sigment3.png';
import sigment4 from '../../assets/images/exercise_air_detail/sigment4.png';
import sigment5 from '../../assets/images/exercise_air_detail/sigment5.png';
import sigment6 from '../../assets/images/exercise_air_detail/sigment6.png';
import sigment7 from '../../assets/images/exercise_air_detail/sigment7.png';
import './ExerciseDetailSigmentTab.scss';

const ExerciseDetailSigmentTab = () => {
    var sigCard = {
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
              breakpoint: 1025,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
              }
          },
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          }
        ]
      };
  return (
    <>
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
                    <div className="sig-card">
                      <p>High Tech Studio</p>
                      <img src={sigment5} />
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
                    <div className="sig-card">
                      <p>High Tech Studio</p>
                      <img src={sigment5} />
                    </div>
                  </Slider>
                </Tab>
              </Tabs>
    </>
  );
}

export default ExerciseDetailSigmentTab;