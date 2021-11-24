import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'scheduler-calendar/dist/index.css'
import Header from '../../components/Header/Header';
import weighting from '../../assets/images/body-scanning/weighting.png';
import machinesBanner from '../../assets/images/body-scanning/machines-banner.png';
import compositionInbody from '../../assets/images/body-scanning/composition-inbody.png';
import scannChecked from '../../assets/images/body-scanning/scann-checked.png';
import scanningRunBack from '../../assets/images/body-scanning/scanning-run-back.png';
import runningStaire from '../../assets/images/body-scanning/running-staire.png';
import degreeLeft from '../../assets/images/body-scanning/degree_left-1.png';
import scanData from '../../assets/images/body-scanning/scan-data.png';
import Fit3ddata from '../../assets/images/body-scanning/Fit3d-data.png';
import scannMobile from '../../assets/images/body-scanning/scann-mobile.png';
import bodybuilder from '../../assets/images/body-scanning/young-bodybuilder.png';
import pic1 from '../../assets/images/pic1.png';
import pic3 from '../../assets/images/pic3.png';
import vedioscanning from '../../assets/images/body-scanning/vedio-scanning.png';
import skinPlayerBtn from '../../assets/images/skin-player-btn.png';
import BookAppointment from '../../assets/images/body-scanning/book-appointment.png';
import './StoreInbodyScanning.scss';
const StoreInbodyScanning = () => {
  return (
    <>
      <Header />
      <Row>
        <Col sm={12} md={12}>
          <div className="banner-scanning">
            <div className="content-sec">
              <span className="content-left">
                <p>Services > Tech Testing</p>
                <h1>Inbody Scanner</h1>
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
                <img src={weighting} />
                <h4>OBSERV 520X</h4>
              </div>
              <span className="skin-banner-txt">
                <h1>Body Composition &  Health Analysis</h1>
                <h4>A perfect Companion for Sanctuary Health Creator & Weight Shifter App</h4>
                <p>InBody’s medical-grade body composition analyzers use four pillars of technology to provide accurate, precise direct segmental measurement multi-frequency bioelectrical impedance analysis (DSM-MFBIA) extensively validated to gold-standard methods.</p>
              </span>
              <div className="scannNewsRun">
                <img src={compositionInbody} />
              </div>
            </div>
            <img src={machinesBanner} />
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="running-scanning">
            <div className="scanning-sec">
              <Row>
                <Col sm={12} md={7}>
                  <div className="running-text">
                    <h4>Key Assessment provided by the Inbody </h4>
                    <p>Providing necessary parameters for Healthcare Professionals to assist in their treatment and prevention in various non-communicable conditions.</p>
                    <ul>
                      <li>
                        <img src={scannChecked} />
                        <div>
                          <p>Visceral Fat</p>
                          <span>Identify potential increased risk associated with various conditions.</span>
                        </div>
                      </li>
                      <li>
                        <img src={scannChecked} />
                        <div>
                          <p>Phase Angle</p>
                          <span>Cellular indicator of cell integrity.</span>
                        </div>
                      </li>
                      <li>
                        <img src={scannChecked} />
                        <div>
                          <p>ECW/TBW Analysis</p>
                          <span>Assess potential fluid accumulation to assist the healthcare professional between dialysis sessions.</span>
                        </div>
                      </li>
                      <li>
                        <img src={scannChecked} />
                        <div>
                          <p>Segmental Lean Analysis</p>
                          <span>Assess potential fluid accumulation to assist the healthcare professional between dialysis sessions.</span>
                        </div>
                      </li>
                      <li>
                        <img src={scannChecked} />
                        <div>
                          <p>Body Composition History</p>
                          <span>Enables a Healthcare Professional ability to track and quantify fluid retention, progress of conditions
                            and progression of their patients treatment.</span>
                        </div>
                      </li>
                    </ul>
                    <p><a href="">Click Here</a> to read Inbody Scan detailed Clinical Publication</p>
                  </div>
                </Col>
                <Col sm={12} md={5}>
                  <div className="runnig-img">
                    <img src={runningStaire} />
                  </div>
                </Col>
              </Row>
            </div>
            <img src={scanningRunBack} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12}>
          <div className="scanning-info">
            <img src={degreeLeft} />
            <div className="scanning-text">
              <h4>About Sanctuary Inbody Scan</h4>
              <p>We believe in the importance of understanding your full body health for a complete wellbeing. It is not just about knowing what you weigh, but more about how the weight is distributed within your body. Our medically approved InBody scanner can accurately measure, report and track your results. The Inbody scanner along with our Health creator and Weight Shifter app can help you track and understand your body better to achieve the best required results.
              </p>
              <p>We at Urban Sanctuary use one of the best Inbody scanner, Inbody 770. It is highly accurate and gives a detailed report of your body composition including your water composition analysis.
              </p>
              <p>This Inbody scanner uses Bioelectrical Impedance Analysis method for measuring body composition, including muscle mass, body fat, and total body water. Alternating low and high-frequency electrical currents are sent through the water in the body via contact with electrodes to measure impedance. </p>
            </div>
          </div>

        </Col>
      </Row>
      <div className="scann-data">
        <Row>
          <Col sm={12} md={6}>
            <div className="scanning-data">
              <h4>Our Scanner </h4>
              <ul>
                <li>Quickly measure fat mass, muscle mass, and body water. Auto-calibrated, user-friendly, and non-invasive, testing is fast and easy—just stand on the device and hold the hand electrodes.Additionally, most brands choose 3d body scans over BIA due to the imaging. Showing both data & body imaging is a powerful client experience.
                </li>
                <li>No empirical estimations based on age, sex, ethnicity, or body type. Instead, Direct Segmental Multi-Frequency BIA technology measures body segments separately for an accurate analysis based on your unique body.
                </li>
                <li>Get vital body composition outputs for evaluating overall health and wellness and a specialized Result Sheet for body water analysis. Draw more insights from exclusive metrics like Visceral Fat Area and Whole Body Phase Angle, track body composition and body water changes, optimize regimens, and give tailored health recommendations backed by research-grade data.
                </li>
                <li>With accurate results and abundant measurement outputs, the InBody770 is a premium body composition analyzer which is used for medical research, patient’s monitoring, sports medicine, and so on. Many of the world’s famous hospitals and doctors are using the InBody770 as a research tool as it is providing plenty of parameters which can be used as a research source. The InBody Result Sheet displays your body composition measurements in a clear, easy-to-read way to make understanding your results simple.</li>
              </ul>

            </div>

          </Col>
          <Col sm={12} md={6}>
            <div className="scanning-data-img">
              <img src={scanData} />
            </div>
          </Col>
        </Row>

      </div>
      <Row>
        <Col sm={12} md={4}>
          <div className="scan-gallery-img">
            <img src={Fit3ddata} />
            <h3>InBody Measurements  & Reports</h3>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="scan-gallery-img">
            <img src={scannMobile} />
            <h3>Track Fat Loss, Body Comp,
              & Muscle mass on our
              Weight Shifter App</h3>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="scan-gallery-img">
            <img src={bodybuilder} />
            <h3>BMR & Body Fat Percentage </h3>
          </div>
        </Col>
        <Col sm={12} md={12}>
          <div className="scan-book-now">
            <h3>BOOK IT NOW !</h3>
            <div className="circle-section">
                <div className="scan-book circle-color1">
                  <div className="top-circle step1">
                    <h3>Step 1</h3>
                  </div>
                  <p>Use our online booking calendar (or phone 021-026-71849 for appointment outside these available times). </p>
                </div>
                <div className="scan-book circle-color2">
                  <div className="top-circle step2">
                    <h3>Step 2</h3>
                  </div>
                  <p>Use our online booking calendar (or phone 021-026-71849 for appointment outside these available times). </p>
                </div>
                <div className="scan-book circle-color3">
                  <div className="top-circle step3">
                    <h3>Step 3</h3>
                  </div>
                  <p>Use our online booking calendar (or phone 021-026-71849 for appointment outside these available times). </p>
                </div>
            </div>
            <button><img src={BookAppointment} />Book an <br/>Appointment</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={12}>
          <div className="sacnning-head">
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
                  <img src={vedioscanning} />
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
              <h4>Create natural beauty through a comprehensive wellness plan</h4>
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
    </>
  );
}

export default StoreInbodyScanning;