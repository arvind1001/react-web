import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import playerIcon from '../../assets/images/personHealth.png';
import bannerIng from '../../assets/images/fu-exercise2.png';
import circleIon from '../../assets/images/circle-ion.png';
import editIcons from '../../assets/images/edit-icons.png';
import Cluster1 from '../../assets/images/Cluster-1.png';
import shifterApp from '../../assets/images/shifterapp.png';
import creatorApp from '../../assets/images/creatorapp.png';
import fusionexc1 from '../../assets/images/fusionexc1.png';
import fusionexc2 from '../../assets/images/fusionexc2.png';
import fusionexc3 from '../../assets/images/fusionexc3.png';
import fusionexc4 from '../../assets/images/fusionexc4.png';

import checkIcon from '../../assets/images/check-icon.png';
import smalPlayIcon from '../../assets/images/smal-play-icon.png';
import mediumPlayIcon from '../../assets/images/medium-play-icon.png';
import './FusionExerciseAir.scss';
const FusionExerciseAir = () => {
    return (
        <>
            <Header />
            <Row>
                <Col sm={12} md={12}>
                    <div className="banner-secs">
                        <div className="content-sec">
                            <p>Advancement exercises - Health</p>
                            <h1>Fusion Exercise</h1>
                            <h2>Our wish for you – greater happiness and health span</h2>
                            <p>We teach that you are a powerful creator and given the right Techniques you can create your own joy and magnificence. The Mind X Body fusion style classes weave in a philosophy of ‘Genuine Increase’; that for your healing, greater growth and advancement, your good intent and actions towards others must also rise in good measure.</p>
                            <p>This is an understanding that while you may need to primarily look after your own needs and become stronger, fitter and healthier you can further catalyse that process by recognising the health interconnection of extending goodwill. As you progress through the Mind X Body classes from Air to Diamond you will gradually shed the emotional ill health and physical stagnation you once had and experience the full vitality of your being, in doing so you will build extreme capacity; physically, mentally, emotionally and spiritually.</p>
                        </div>
                        <div className="right-img">
                            <img src={playerIcon} />
                        </div>
                        <img src={bannerIng} />
                    </div>
                </Col>
            </Row>
            <div className="info-wraper">
                <Row>

                    <Col sm={12} md={5}>
                        <div className="info-sec">
                            <span className="info-left">
                                <img src={circleIon} />
                                <p>Health</p>
                            </span>
                            <p>When phasellus dignissim, in pellentesuqe?</p>
                            <img src={editIcons} />
                        </div>

                    </Col>
                    <Col sm={12} md={2}>

                        <div className="tb-info">
                            <img className="activeimg" src={Cluster1} />
                        </div>
                    </Col>
                    <Col sm={12} md={5}>
                        <div className="app-btn">
                            <button><img src={shifterApp} /> WEIGHT SHIFTER APP</button>
                            <button><img src={creatorApp} /> HEALTH CREATOR APP</button>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col sm={12} md={12}>
                    <div className="fusion-exe">
                        <h1>Fusion Exercise Series</h1>
                    </div>
                </Col>
                <div className="fusion-gal">
                    <Row>
                        <Col sm={12} md={3}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc1} />
                                <h4>AIR</h4>
                                <div className="fu-active-gal"></div>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc2} />
                                <h4>WATER</h4>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc3} />
                                <h4>CRYSTAL</h4>
                            </div>
                        </Col>
                        <Col sm={12} md={3}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc4} />
                                <h4>DIAMOND</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="fusion-con-gl">

                            <div className="gal-con">
                                <h1>AIR BENEFITS</h1>
                                <div className="gal-con-text">
                                    <p>A confidence building, well balanced invigorating class for beginners, or middle-aged to elderly wishing to begin their journey back to greater health and well-being. Restorative, oxygenating, esteem building, up lifting, healing, empowering.</p>
                                    <ul>
                                        <li> <img src={checkIcon} />Restorative - as you age from approx. 40 years onward, you begin to lose muscle - counter age related muscle loss, and enhance muscle rehabilitation, mobility and strength.</li>
                                        <li> <img src={checkIcon} />Oxygenating - deep breathing exercisers to stimulate the cardiorespiratory system, alkalise and oxygenate the body. </li>
                                        <li> <img src={checkIcon} />Self-esteem building - visualisation processes to mentally ready yourself to achieve the health and life goals you are looking for. </li>
                                        <li> <img src={checkIcon} />Up lifting - finish our Mind X Body classes happier than when you started, our classes have a positive emotional effect on mind, body and spirit enhancing the endocrine system.</li>
                                        <li> <img src={checkIcon} />Healing - specially crafted guided mediations to identify and release emotional pain associated with negative and limiting emotions. Reduce stress, create positive feeling states and enhance emotional well-being to free up the mind-body to enable its own healing processes.</li>
                                        <li> <img src={checkIcon} />Self-Empowerment – basic martial arts techniques and etiquette to effect a positive psychological effect for the benefit of increasing personal confidence.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gal-con-img">
                                <div className="fu-dis">
                                <div className="fu-head">
                                    <h2>AIR</h2>
                                    </div>
                                    <div className="fu-dis-con">
                                        <div className="fu-dis-txt">
                                           
                                            <h4>Description: </h4>
                                            
                                            <p>A low impact and intensity class to get you accustomed to the wide ranging benefits of Fusion and pave the way to greater holistic health. Ideal for all age groups. From as little as $1.00 per day</p>
                                        </div>
                                        <div className="fu-dis-time">
                                            <p><span>DURATION</span>：60 Minutes</p>
                                            <p><span>MASTER</span>：Kim Larking</p>
                                        </div>
                                        <div className="fu-dis-btn">
                                            <button>Preview <img src={smalPlayIcon}/></button>
                                            <button>WATCH <img src={mediumPlayIcon}/></button>
                                            <button>BOOK THIS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="back-img" >
                                <img src={fusionexc1} />
                            </div>
                        </div>
                    </Col>
                </Row>


            </Row>

        </>
    );
}

export default FusionExerciseAir;