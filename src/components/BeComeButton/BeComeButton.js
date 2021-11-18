import React from 'react';
import btnlogo from '../../assets/images/btnlogo.png';
import './BeComeButton.scss';


const BeComeButton=()=> {
  return (
    <>
      {/* <button id="btn-image"><img src={btnlogo}/><p><span>Become</span> <br/>Visionaire</p></button> */}
      <div className="btn-image">
         <img src={btnlogo} />
    </div>  
</>

  );
}

export default BeComeButton;
