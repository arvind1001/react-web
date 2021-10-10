import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import HealthGallery from '../../components/HealthGallery/HealthGallery';
import VisionaireForm from '../../components/VisionaireForm/VisionaireForm';
const Home =()=> {
  return (
    <>
         <div className="banner">
         <Header  />

         
        <section>
            <Row>
            <Col sm={12} md={12} className="banner-content">
                    <h1>REGISTER</h1>
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

export default Home;
