import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './SelectPlans.scss';
const SelectPlans =()=> {
    return (
        <>
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
        </>
        )
}
export default SelectPlans;