import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import playerIcon from '../../assets/images/personHealth.png'
import bannerIng from '../../assets/images/fu-exercise2.png';
import bannerIcon1 from '../../assets/images/exe-icon1.png';
import bannerIcon2 from '../../assets/images/exe-icon2.png';
import bannerIcon3 from '../../assets/images/exe-icon3.png';
import bannerIcon4 from '../../assets/images/exe-icon4.png';

import './BookingPlan.scss';
const BookingPlan = () => {
    return (
        <>
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
                <Row>
                    <Col sm={12} md={12}>
                        <div className="plan-head">
                            <h1>Select your plan</h1>
                            <p>Fusion Air & Water Plus segments</p>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="plan-card">
                            <div className="card-head">
                                <h1>Weekly Plan</h1>
                            </div>
                            <div className="ex-price">
                                <h2><sub>$</sub>6.95</h2><span>per week</span>
                            </div>
                            <div className="card-detail">
                                <p>Billed weekly, minimum term 4 weeks</p>
                                <p>($27.80 month / $361.40 per year)</p>
                                <p>Get in great shape and state of mind for less than a dollar a day!</p>
                            </div>
                            <div className="button-sec">
                            <button>Start Now</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="plan-card">
                            <div className="card-head">
                                <h1>Monthly Plan</h1>
                            </div>
                            <div className="ex-price">
                                <h2><sub>$</sub>19.99</h2><span>per month</span>
                            </div>
                            <div className="card-detail">
                                <p>Billed monthly, minimum term 4 months</p>
                                <p>($4.99 per week / $239.88 per year)</p>
                                <p>No excuses – holistic health and fitness for just the cost a coffee!</p>
                            </div>
                            <div className="button-sec">
                            <button>Start Now</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className="plan-card">
                            <div className="card-head">
                                <h1>Yearly Plan</h1>
                            </div>
                            <div className="ex-price">
                                <h2><sub>$</sub>179.88</h2><span>per year</span>
                            </div>
                            <div className="card-detail">
                                <p>Billed once annually</p>
                                <p>($14.99 per month)</p>
                                <p>Way to go for super low cost holistic health and fitness!</p>
                            </div>
                            <div className="button-sec mar-t">
                            <button>Start Now</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={12}>
                        <div className="plan-more">
                            <h1>More Plans Coming Soon</h1>
                            <p>Fusion Series Plan, All Advancement Exercise Plan and Global Plan<span> - that gives you unlimited access to all exercise resources.</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className=""></div>
            <Row>
                    <Col sm={12} md={12}>
                        <div className="plan-more-detail">
                             <h1>Frequently Asked Questions</h1>
                          </div>
                    </Col>
                    <Col sm={12} md={6} className="plan-detail1">
                        
                            <h1>What is Fusion Exercise on demand?</h1>
                            <p>The classes are pre-recorded specifically with a ‘watch from home’ audience in mind. But you can watch classes anywhere in the world that you have access to the internet and our website. Fusion Exercise On Demand is also perfect for office and outdoor settings. Broadcast from your devise to your smart TV for a larger visual.</p>
                           
                            <h1>What do I get?</h1>
                            <p>You get the class series, either; Air, Water, Crystal or Diamond, plus the segment workouts to quicken your Fusion Exercise progress and use as short workouts any time of the day, 30 minute weekly coaching session to help guide you, answer questions and motivate you.</p>
                            
                            <h1>What about other work programs?</h1>
                            <p>You can upgrade at any time to a more extensive plan covering the whole Fusion Series, all Advancement Exercise options, and even a Global Plan that gives you unlimited access to all exercise resources.</p>
                          
                            <h1>Can I try before I buy?</h1>
                            <p>Our classes are designed to be very cost effective in order to help as many people as possible enjoy greater health and well-being. Although we do not have a trail period you can view the preview videos to get a feel for the classes before you commit.</p>
                        
                    </Col>
                    <Col sm={12} md={6} className="plan-detail1">
                      
                            <h1>Advance payment</h1>
                            <p>All fees are for advance payment of classes and terms, you will be charged the time frame of the term in advance, for example; 1 week, 1 month, or 1 year in advance. Your advance payment also enables access to the weekly live coaching session to help motivate you along the way.</p>
                          
                            <h1>Minimum terms</h1>
                            <p>Requires you to pay a minimum of times as stated in the term, until the term is complete. This also helps you commit to a minimum time frame to give it your best shot!</p>
                       
                            <h1>Payment method</h1>
                            <p>We accept Visa and MasterCard for all weekly, monthly and annual subscriptions.</p>
                       
                            <h1>We accept Visa and MasterCard for all weekly, monthly and annual subscriptions.</h1>
                            <p>Annual terms can be paid by direct debit to our bank account.</p>
                       
                            <h1>How do I cancel my subscription</h1>
                            <p>Simply go to setting in your account and adjust your subscription options there to review, upgrade or cancel.</p>
                       
                        
                    </Col>
            </Row>
        </>
    );
}

export default BookingPlan;