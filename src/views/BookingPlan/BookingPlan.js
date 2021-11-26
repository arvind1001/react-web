import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import SelectPlans from '../../components/SelectPlans/SelectPlans';
import FrequentlyAskedQuestions from '../../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import playerIcon from '../../assets/images/personHealth.png'
import bannerIng from '../../assets/images/fu-exercise2.png';
import bannerIcon1 from '../../assets/images/booking-plan/exe-icon1.png';
import bannerIcon2 from '../../assets/images/booking-plan/exe-icon2.png';
import bannerIcon3 from '../../assets/images/booking-plan/exe-icon3.png';
import bannerIcon4 from '../../assets/images/booking-plan/exe-icon4.png';

import './BookingPlan.scss';
const BookingPlan = () => {
    return (
        <div className="booking-plan-wrapper">
            <Header />
            <Row>
                <Col sm={12} md={12}>
                    <div className="banner-sec">
                        <div className="content-sec">
                            <h1>Fusion Exercise > AIR</h1>
                            <h2>On Demand</h2>

                            <div className="ban-icons">
                                <div className="icon-sec">
                                    <img src={bannerIcon1} />
                                    <p>No Equipment
                                        Required </p>
                                </div>
                                <div className="icon-sec">
                                    <img src={bannerIcon2} />
                                    <p>Workout anywhere, anytime</p>
                                </div>
                                <div className="icon-sec">
                                    <img src={bannerIcon3} />
                                    <p>Workout in Segments</p>
                                </div>
                                <div className="icon-sec">
                                    <img src={bannerIcon4} />
                                    <p>coaching service</p>
                                    <span>join our Advancement Exercise community for weekly motivation</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-img">
                            <img src={playerIcon} />
                        </div>
                        <img src={bannerIng} />
                    </div>
                </Col>
            </Row>
            <Container>
             <SelectPlans/>
            </Container>
            <FrequentlyAskedQuestions/>
        </div>
    );
}

export default BookingPlan;