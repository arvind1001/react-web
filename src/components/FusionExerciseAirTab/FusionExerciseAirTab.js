import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import fusionexc1 from '../../assets/images/exercise-air/fusionexc1.png';
import fusionexc2 from '../../assets/images/exercise-air/fusionexc2.png';
import fusionexc3 from '../../assets/images/exercise-air/fusionexc3.png';
import fusionexc4 from '../../assets/images/exercise-air/fusionexc4.png';
import checkIcon from '../../assets/images/check-icon.png';
import smalPlayIcon from '../../assets/images/smal-play-icon.png';
import mediumPlayIcon from '../../assets/images/medium-play-icon.png';
import './FusionExerciseAirTab.scss';

const FusionExerciseAirTab = () => {
    const [showTabs, tabChange] = useState(1);

    return (
        <>
            <Row>
                <Col sm={12} md={12}>
                    <div className="fusion-exe">
                        <h1>Fusion Exercise Series</h1>
                    </div>
                </Col>
                <div className="fusion-gal">
                    <Row>
                        <Col sm={6} md={3}>
                            <div className="fusion-exe-gl" onClick={() => tabChange(1)}>
                                <img src={fusionexc1} />
                                <h4>AIR</h4>
                                <div className={`${showTabs == 1 ? 'fu-active-gal' : ''}`}></div>
                            </div>
                        </Col>
                        <Col sm={6} md={3} onClick={() => tabChange(2)}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc2} />
                                <h4>WATER</h4>
                                <div className={`${showTabs == 2 ? 'fu-active-gal' : ''}`}></div>
                            </div>
                        </Col>
                        <Col sm={6} md={3} onClick={() => tabChange(3)}>
                            <div className="fusion-exe-gl">
                                <img src={fusionexc3} />
                                <h4>CRYSTAL</h4>
                                <div className={`${showTabs == 3 ? 'fu-active-gal' : ''}`}></div>
                            </div>
                        </Col>
                        <Col sm={6} md={3}>
                            <div className="fusion-exe-gl" onClick={() => tabChange(4)}>
                                <img src={fusionexc4} />
                                <h4>DIAMOND</h4>
                                <div className={`${showTabs == 4 ? 'fu-active-gal' : ''}`}></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm={12} md={12}>
                        <div className={`${showTabs == 1 ? 'tab-content-show' : 'tab-content-hide'}`}>
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
                                                <button>PREVIEW<img src={smalPlayIcon} /></button>
                                                <button>WATCH <img src={mediumPlayIcon} /></button>
                                                <button>BOOK THIS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-img" >
                                    <img src={fusionexc1} />
                                </div>
                            </div>
                        </div>
                        <div className={`${showTabs == 2 ? 'tab-content-show' : 'tab-content-hide'}`}>
                            <div className="fusion-con-gl">
                                <div className="gal-con">
                                    <h1>WATER BENEFITS</h1>
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
                                            <h2>WATER</h2>
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
                                                <button>PREVIEW<img src={smalPlayIcon} /></button>
                                                <button>WATCH <img src={mediumPlayIcon} /></button>
                                                <button>BOOK THIS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-img" >
                                    <img src={fusionexc1} />
                                </div>
                            </div>
                        </div>
                        <div className={`${showTabs == 3 ? 'tab-content-show' : 'tab-content-hide'}`}>
                            <div className="fusion-con-gl">
                                <div className="gal-con">
                                    <h1>CRYSTAL BENEFITS</h1>
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
                                            <h2>CRYSTAL</h2>
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
                                                <button>PREVIEW<img src={smalPlayIcon} /></button>
                                                <button>WATCH <img src={mediumPlayIcon} /></button>
                                                <button>BOOK THIS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-img" >
                                    <img src={fusionexc1} />
                                </div>
                            </div>
                        </div>
                        <div className={`${showTabs == 4 ? 'tab-content-show' : 'tab-content-hide'}`}>
                            <div className="fusion-con-gl">
                                <div className="gal-con">
                                    <h1>DIAMOND BENEFITS</h1>
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
                                            <h2>DIAMOND</h2>
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
                                                <button>PREVIEW<img src={smalPlayIcon} /></button>
                                                <button>WATCH <img src={mediumPlayIcon} /></button>
                                                <button>BOOK THIS</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="back-img" >
                                    <img src={fusionexc1} />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Row>
        </>
    );
}

export default FusionExerciseAirTab;