import React, { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import lineIcon from '../../assets/images/line-icon.png';
import logo from '../../assets/images/logo.png';
import './Header.scss';

const Header=() =>{
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
             {/* <!-- ***** Top  Header Start ***** --> */}
        {/* <header className="secondary-header">
        <Container fluid>
                <Row className="align-items-center justify-content-between header-info">
                    <Col md={4} className="left-panel text-left grey-txt">
                        <i className="far fa-file-alt"></i>
                    </Col>
                    <Col md={4} className="center-panel text-center grey-txt">
                        <p className="mb-0">Second Genome</p>
                    </Col>
                    <Col md={4} className="right-panel text-right">
                        <div className="clock-icon">
                            <i className="white-txt fas fa-clock"></i><span className="grey-txt">16:00 GMT</span>
                        </div>
                        <div className="search-icon">
                            <i className="white-txt fas fa-search"></i>
                            <input type="text" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header> */}
        {/* <!-- ***** Top  Header End ***** -->
        <!-- ***** Header Area Start ***** --> */}
        <header className="header-area">
        <Container fluid>
                <Row className="align-items-center">
                <Col md={3} className="mobile-hide">
                        {/* <!-- Logo --> */}
                        <a className="navbar-brand">
                        <img src={lineIcon}/>
                        <img src={logo}/></a>
                    </Col>
                    <Col md={6} className="mobile-hide">
                        <nav className="custom-navbar">
                            <div className="navbar-navs">
                                <ul className="navbar-info d-flex align-items-center">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">About us <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item custom-dropdwn">
                                        <div className="nav-link custom-dropdwn-link" href="#">discover
                                            <i className="fas fa-angle-down"></i>
                                            <div className="dropdown-content">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item custom-dropdwn">
                                        <div className="nav-link custom-dropdwn-link" href="#">services
                                            <i className="fas fa-angle-down"></i>
                                            <div className="dropdown-content">
                                                <a href="#">Link 1</a>
                                                <a href="#">Link 2</a>
                                                <a href="#">Link 3</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">participate</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">prosper</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">get started</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                    </Col>
                    <Col md={3} className="mobile-hide">
                        <ul className="d-flex justify-content-end align-items-center">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fas fa-shopping-cart"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fas fa-map-marker-alt"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fas fa-user"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <i className="fas fa-th-large"></i>
                                </a>
                            </li>

                        </ul>
                    </Col>
                    <Col md={12} className="desk-hide">
                        <div className="mobile-menu">
                            <a className="navbar-brand"><img src="./images/logo.jpg"/></a>
                            <span onclick="toggleSideNav()">&#9776;</span>
                        </div>
                        <div id="mySidenav" className="sidenav">
                            <a href="javascript:void(0)" className="closebtn" onclick="toggleSideNav()">&times;</a>
                            <a href="#">About us </a>
                            <a href="#">discover</a>
                            <a href="#">services</a>
                            <a href="#">participate</a>
                            <a href="#">prosper</a>
                            <a href="#">get started</a>
                        </div>
                    </Col>
                </Row>
           </Container>
        </header>
        {/* <!-- ***** Header Area End ***** -->

        <!-- ***** banner section Start ***** --> */}
     
    </>
  );
}

export default Header;
