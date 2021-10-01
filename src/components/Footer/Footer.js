import React from 'react';
import BeComeButton from '../../components/BeComeButton/BeComeButton';
import './Footer.scss';

const Footer=()=> {
  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-md-5 col-sm-12 dis-cover cols">
                <p className="font-weight-bold">Discover your Magnificence by becoming a Urban Sanctuary Visionaire</p>
                <BeComeButton/>
            </div>

            <div className="col-md-1 col-sm-6 footer-col cols">
                <ul className="footer-menu font-weight-bold">
                    <li><a href="#">About us </a></li>
                    <li><a href="#">discover</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">participate</a></li>
                    <li><a href="#">prosper</a></li>
                    <li><a href="#">get started</a></li>
                </ul>
            </div>
            <div className="col-md-1 col-sm-6 footer-col cols">
                <ul className="footer-menu font-weight-bold">
                    <li><a href="#">Find a Store </a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Volunteer</a></li>
                    <li><a href="#">Know More</a></li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-6 footer-col-2 cols">
                <ul className="footer-inf font-weight-bold">
                    <li>URBAN SANCTURIES - VISION FOR HUMANITY</li>
                    <li className="font-weight-light">Cick here to integrate your Visionaire accounts</li>
                    <li>(09) 353-7890</li>
                    <li>Level 3, 2 St Martins Lane,<br/>Prosper Grafton, Auckland 1010<br/>New Zealand</li>
                </ul>
            </div>
            <div className="col-md-2 col-sm-12 footer-icon">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
            </div>
            <div className="col-md-12 copyr">
                <p>©VFH Sanctuaries 2018</p>
            </div>
        </div>
    </div>
</footer>

  );
}

export default Footer;
