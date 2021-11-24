import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './FrequentlyAskedQuestions.scss';
const FrequentlyAskedQuestions = () => {
    return (
        <>
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
    )
}
export default FrequentlyAskedQuestions;