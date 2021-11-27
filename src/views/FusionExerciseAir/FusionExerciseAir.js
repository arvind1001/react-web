import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import Header from '../../components/Header/Header';
import FusionExerciseAirTab from '../../components/FusionExerciseAirTab/FusionExerciseAirTab';
import FusionMasterSlider from '../../components/FusionMasterSlider/FusionMasterSlider';

import playerIcon from '../../assets/images/personHealth.png';
import bannerIng from '../../assets/images/fu-exercise2.png';
import circleIon from '../../assets/images/circle-ion.png';
import editIcons from '../../assets/images/edit-icons.png';
import Cluster1 from '../../assets/images/Cluster-1.png';
import shifterApp from '../../assets/images/shifterapp.png';
import creatorApp from '../../assets/images/creatorapp.png';



import './FusionExerciseAir.scss';

const FusionExerciseAir = () => {
    return (
        <div className="exercise-air-wrapper">
            <Header />
            <Row>
                <Col sm={12} md={12}>
                    <div className="banner-secs">
                        <div className="content-sec">
                            <p>Advancement exercises - Health</p>
                            <h1>Fusion Exercise</h1>
                            <h2>Our wish for you – greater happiness and health span</h2>
                            <p>We teach that you are a powerful creator and given the right Techniques you can create your own joy and magnificence. The Mind X Body fusion style classes weave in a philosophy of ‘Genuine Increase’; that for your healing, greater growth and advancement, your good intent and actions towards others must also rise in good measure.</p>
                            <p>This is an understanding that while you may need to primarily look after your own needs and become stronger, fitter and healthier you can further catalyse that process by recognising the health interconnection of extending goodwill. As you progress through the Mind X Body classes from Air to Diamond you will gradually shed the emotional ill health and physical stagnation you once had and experience the full vitality of your being, in doing so you will build extreme capacity; physically, mentally, emotionally and spiritually.</p>
                        </div>
                        <div className="right-img">
                            <img src={playerIcon} />
                        </div>
                        <img src={bannerIng} />
                    </div>
                </Col>
            </Row>
            <div className="info-wraper">
                <Row className="align-items-center">

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
            <FusionExerciseAirTab />
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="slider-secs">
                            <h1>Our Fusion Facilitators and Masters</h1>
                            <FusionMasterSlider></FusionMasterSlider>
                        </div>

                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12} md={3}>
                        <div className="left-clender">
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
                        <div className="gal-clender">
                            <h1>More Information</h1>
                            <ScheduleComponent>
                                <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                            </ScheduleComponent>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FusionExerciseAir;