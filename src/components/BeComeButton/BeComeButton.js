import React from 'react';
import btnlogo from '../../assets/images/btnlogo.png';
import { useLocation } from 'react-router-dom';
import greenButton from '../../assets/images/green-btns.png';
import './BeComeButton.scss';


const BeComeButton = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* <button id="btn-image"><img src={btnlogo}/><p><span>Become</span> <br/>Visionaire</p></button> */}
      <div className="btn-image">
        {(pathname =='/store-service-skin-analysis') || pathname =='/store-service-inbody-scanning' ? (
          <img src={greenButton} />
        ) : (
          <img src={btnlogo} />
        )}
      </div>
    </>

  );
}

export default BeComeButton;
