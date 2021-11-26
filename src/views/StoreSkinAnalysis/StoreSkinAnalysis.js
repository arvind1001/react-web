import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'scheduler-calendar/dist/index.css'
import Header from '../../components/Header/Header';
import skinNewobs from '../../assets/images/skin-analysis/skin-newobs.png';
import bannerImg from '../../assets/images/skin-analysis/skin-banner-img.png';
import yearRank from '../../assets/images/skin-analysis/year-rank.png';
import metroPin from '../../assets/images/skin-analysis/Icon-metro-pin.png';
import LightModesFace from '../../assets/images/skin-analysis/8-light-modes-face.png';
import testingDevice from '../../assets/images/skin-analysis/testing-device.png';
import mobileImg from '../../assets/images/skin-analysis/mobile-img.png';
import foodImg from '../../assets/images/skin-analysis/food-img.png';
import skinpanelback from '../../assets/images/skin-analysis/skin-panel-back.png';
import pic1 from '../../assets/images/pic1.png';
import pic3 from '../../assets/images/pic3.png';
import skinvimg from '../../assets/images/skin-analysis/skin-v-img.png';
import skinPlayerBtn from '../../assets/images/skin-player-btn.png';

import './StoreSkinAnalysis.scss';
const StoreSkinAnalysis = () => {
  return (
    <div className="store-skin-wrapper">
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
      <div className="back-point-skin">
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className="point-section">
              <p>Pin point the condition of your skin and avoid long term damage with our state of the art skin testing service.</p>
              <ul>
                <li><img src={metroPin} /> Map where your skin health is and heading</li>
                <li><img src={metroPin} />Determine the best treatments and skin products for you based on the condition of your skin</li>
                <li><img src={metroPin} />The patented technology of the OBSERV 520 makes it the most advanced visual analysis, diagnostic devise for your skin, that is available today. Providing accurate skin condition diagnosis, at both the epidermal and dermal layer. Modern day lifestyle choices, coupled with environmental stresses make for a perfect storm to impact your health and the quality of your skin.</li>
                <li><img src={metroPin} />The OBSERV skin analysis device scientifically records visuals within a 30 second time frame to provide the platform to recognise your skins current condition and establish a plan to repair and restore skin texture, radiance and beauty. It is the ideal skin testing device with clinical skin visuals to form a background for consultation and to personalise skin care advise, which can lead onto the best professional in-house skin treatments, or skincare program concerning a bespoke homecare regime.</li>
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
     </div>
        <Container>
          <Row>
            <Col sm={12} md={5}>
              <div className="link-img">
                <img src={LightModesFace} />
              </div>
            </Col>
            <Col sm={12} md={7}>
              <div className="link-cont-img">
                <h1>Link Skin Analysis System with our Hair test and Health Creator app </h1>
                <p>Discover the nutrients that you may be lacking that are contributing to dull and dry skin, by also doing our specialised hair test. Allow us to put together a health and nutrition program focused on improving long term skin health and achieving extra ordinary glowing radiance and beauty.</p>
                <Row>
                  <Col sm={12} md={4}>
                    <img src={testingDevice} />
                  </Col>
                  <Col sm={12} md={4}>
                    <img src={mobileImg} />
                  </Col>
                  <Col sm={12} md={4}>
                    <img src={foodImg} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="link-skin">
        <Row>
          
        <Col sm={12} md={12}>
              <div className="link-cont-text">
                <h1>Holistic beauty programs</h1>
                <p>Natural nutrient rich skin and hair products with naturally occurring active ingredients compliments the skin to help achieve beautiful glowing long term skin health and wellbeing</p>
                <p>Specific treatments flush out toxins from the body aiding the skin's appearance</p>
                <p>Nutritious food is a key to developing  better skin tone and health</p>
              </div>
            </Col>
          </Row>
        <img src={skinpanelback} className="back-img" />
      </div>

      <Row>
        <Col sm={12} md={12}>
          <div className="con-head">
            <h1>Our Customers</h1>
            <Row>
              <Col sm={12} md={6}>
                <div className="con-profile">
                  <div className="con-pro">
                    <img src={pic1} />
                    <h2>Jonathan Walker</h2>
                  </div>
                  <p>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</p>
                </div>
                <div className="con-profile">
                  <div className="con-pro">
                    <img src={pic3} />
                    <h2>Brenda Mercer</h2>
                  </div>
                  <p>In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretium imperdiet, neque est rhoncus massa, tristique rutrum nisl risus at libero.</p>
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="con-img">
                  <img src={skinvimg} />
                  <img src={skinPlayerBtn} />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="finds-store">
              <h4>Create a life of limitless potential with an Optimize epigenetic report and free your genes today?</h4>
              <div className="store-btn">
                <button>Find a Store</button>
              </div>
            </div>
          </Col>

        </Row>
      </Container>
      <Row>
        <Col sm={12} md={12}>
          <div className="finds-text">
            <h3>Urban Sanctuaries for Conscious Creatures, Elevating Global Conscious, and helping create “A Successful Planet.”</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default StoreSkinAnalysis;