import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import GrowDefault from '../../assets/images/Grow-default.png';
import blackDiamond from '../../assets/images/black-diamond.png';
import './FusionMasterSlider.scss';

const FusionMasterSlider = () => {
    var settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 1500,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
    return (
        <>
            <Slider {...settings}>
                <div className="slider-item">
                    <img src={blackDiamond} />
                    <h2>Kim Larking</h2>
                    <p>Exp: 35 years</p>
                    <p>Kim Larking, creator of Mind X Body Fusion Exercise, author of the book Health Psychology, 6th degree Kiaido Ryu black belt, aikido and yoga enthusiast, anti-aging and health span educator.</p>
                </div>
                <div className="slider-item">
                    <img src={GrowDefault} />
                    <h2>Watch Our Team <br />Grow</h2>
                    <p>As We Train Up Other</p>
                    <p>Fusion Experts</p>
                </div>
                <div className="slider-item">
                    <img src={GrowDefault} />
                    <h2>Watch Our Team <br />Grow</h2>
                    <p>As We Train Up Other</p>
                    <p>Fusion Experts</p>
                </div>
                <div className="slider-item">
                    <img src={GrowDefault} />
                    <h2>Watch Our Team <br />Grow</h2>
                    <p>As We Train Up Other</p>
                    <p>Fusion Experts</p>
                </div>
                <div className="slider-item">
                    <img src={GrowDefault} />
                    <h2>Watch Our Team <br />Grow</h2>
                    <p>As We Train Up Other</p>
                    <p>Fusion Experts</p>
                </div>
            </Slider>
        </>
    );
}

export default FusionMasterSlider;