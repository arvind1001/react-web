import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import HealthGallery from '../../components/HealthGallery/HealthGallery';
import VisionaireForm from '../../components/VisionaireForm/VisionaireForm';
import './Register.scss';
const Register =()=> {
  return (
    <>
         <div className="banner">
         <Header  />

         
        <section>
            <Row>
            <Col sm={12} md={12} className="r-banner-content">
                    <h1>Get Started</h1>
                </Col>
            </Row>
        </section>
    </div>
    <section className="p-tb-35">
      <Container>
            <Row>
            <Col sm={12} md={6} >
                <VisionaireForm/>
                </Col>
                <Col sm={12} md={6} className="border-lefts mobile-border-hide">
                <HealthGallery/>
                </Col>
                </Row>
      </Container>
    </section>
    </>
  );
}

export default Register;
