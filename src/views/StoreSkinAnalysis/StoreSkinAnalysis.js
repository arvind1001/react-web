import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'scheduler-calendar/dist/index.css'
import Header from '../../components/Header/Header';
import skinNewobs from '../../assets/images/skin-newobs.png';
import bannerImg from '../../assets/images/skin-banner-img.png';
import yearRank from '../../assets/images/year-rank.png';
import metroPin from '../../assets/images/Icon-metro-pin.png';

import './StoreSkinAnalysis.scss';
const StoreSkinAnalysis = () => {
  return (
    <>
      <Header />
      <Row>
        <Col sm={12} md={12}>
          <div className="banner-skin">
            <div className="content-sec">
              <span className="content-left">
                <p>Services > Tech Testing</p>
                <h1>Skin Analyser</h1>
              </span>
              <div className="socil-img">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fa fa-globe"></i>
              </div>
            </div>
            <div className="img-content">
              <div className="skinNewobs">
                <img src={skinNewobs} />
                <h4>OBSERV 520X</h4>
              </div>
              <span className="skin-banner-txt">
                <h1>Beautiful Skin!</h1>
                <h4>Beauty from within</h4>
                <p>We believe that great skin is a reflection of inner health and beauty- your skin is representative of what going on inside of you.</p>
                <p>A skin test will reveal not just the condition of your skin and how to proactively nurture the skin to make it more beautiful but also contributes to a piece of the puzzle of our comprehensive heath testing services to integrate a holistic road map for you to optimise health which will involve glowing skin.</p>
                <p>We recommend refining diet to achieve the very best nutrition that provides the body what it needs to experience great health and fresh skin, and we recommend using the fully natural and nutrition rich Vision Products skin and hair care products and specialised treatment plans to compliment this beauty.</p>

                <div className="link-img">
                  <a href=""> <i className="fa fa-globe"></i>Read More</a>
                  <a href=""> <i className="fas fa-newspaper"></i> News</a>
                </div>
              </span>
            </div>
            <img src={bannerImg} />
          </div>
        </Col>

      </Row>
      <Container>
      <Row>
        <Col sm={12} md={8}>
          <div className="point-section">
            <p>Pin point the condition of your skin and avoid long term damage with our state of the art skin testing service.</p>
            <ul>
              <li><img src={metroPin}/> Map where your skin health is and heading</li>
              <li><img src={metroPin}/>Determine the best treatments and skin products for you based on the condition of your skin</li>
              <li><img src={metroPin}/>The patented technology of the OBSERV 520 makes it the most advanced visual analysis, diagnostic devise for your skin, that is available today. Providing accurate skin condition diagnosis, at both the epidermal and dermal layer. Modern day lifestyle choices, coupled with environmental stresses make for a perfect storm to impact your health and the quality of your skin.</li>
              <li><img src={metroPin}/>The OBSERV skin analysis device scientifically records visuals within a 30 second time frame to provide the platform to recognise your skins current condition and establish a plan to repair and restore skin texture, radiance and beauty. It is the ideal skin testing device with clinical skin visuals to form a background for consultation and to personalise skin care advise, which can lead onto the best professional in-house skin treatments, or skincare program concerning a bespoke homecare regime.</li>
            </ul>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="point-section">
             <img src={yearRank} className="img-section" />
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default StoreSkinAnalysis;