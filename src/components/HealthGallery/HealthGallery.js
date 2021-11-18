import React from 'react';
import {Row,Col } from 'react-bootstrap';
import health from '../../assets/images/health.png';
import prosperity from '../../assets/images/prosperity.png';
import inspire from '../../assets/images/inspire.png';
import joy from '../../assets/images/joy.png';
import './HealthGallery.scss';
const HealthGallery =()=> {
  return (
    <>
      
                    <div className="gallery-section ">
                        <h3>EXPLORE BY HEALTH INTEREST</h3>
                        <p className="exp-dec">Join our Rapidly growing community of advancing people,excit about expanding and exceling in every aspect of their lives for greater; happiness, health, prosperity, relationships, life satisfaction and spiritual connection. </p>
                        <Row className="row">
                        <Col  sm={12}  md={6} className="gallery-grid">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={health} alt="Health" style={{width:'100%'}}/>
                                        <div className="caption green-sec">
                                            <p>Health</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col  sm={12} md={6} className="gallery-grid">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={prosperity} alt="Prosperity" style={{width:'100%'}}/>
                                        <div className="caption">
                                            <p>Prosperity</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="gallery-grid">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={inspire} alt="Inspire" style={{width:'100%'}}/>
                                        <div className="caption">
                                            <p>Inspiration</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="gallery-grid">
                                <div className="thumbnail">
                                    <a href="#">
                                        <img src={joy} alt="Joy" style={{width:'100%'}}/>
                                        <div className="caption">
                                            <p>Joy</p>
                                        </div>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
               
         

    </>
  );
}

export default HealthGallery;
