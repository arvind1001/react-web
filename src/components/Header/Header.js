import React, { useState, useEffect } from 'react';
import lineIcon from '../../assets/images/line-icon.jpg';
import logo from '../../assets/images/logo.jpg';
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
             <header className="secondary-header">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between header-info">
                    <div className="col-md-4 left-panel text-left grey-txt">
                        <i className="far fa-file-alt"></i>
                    </div>
                    <div className="col-md-4 center-panel text-center grey-txt">
                        <p className="mb-0">Second Genome</p>
                    </div>
                    <div className="col-md-4 right-panel text-right">
                        <div className="clock-icon">
                            <i className="white-txt fas fa-clock"></i><span className="grey-txt">16:00 GMT</span>
                        </div>
                        <div className="search-icon">
                            <i className="white-txt fas fa-search"></i>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- ***** Top  Header End ***** -->
        <!-- ***** Header Area Start ***** --> */}
        <header className="header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-3 mobile-hide">
                        {/* <!-- Logo --> */}
                        <a className="navbar-brand">
                        <img src={lineIcon}/>
                        <img src={logo}/></a>
                    </div>
                    <div className="col-md-6 mobile-hide">
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

                    </div>
                    <div className="col-md-3 mobile-hide">
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

                    </div>
                    <div className="col-md-12 desk-hide">
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
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- ***** Header Area End ***** -->

        <!-- ***** banner section Start ***** --> */}
     
    </>
  );
}

export default Header;
