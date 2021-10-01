import React from 'react';
import Header from '../../components/Header/Header';
import HealthGallery from '../../components/HealthGallery/HealthGallery';
import VisionaireForm from '../../components/VisionaireForm/VisionaireForm';
const Home =()=> {
  return (
    <>
         <div className="banner">
         <Header  />
        <section>
            <div className="row">
                <div className="col-md-12 banner-content">
                    <h1>REGISTER</h1>
                </div>
            </div>
        </section>
    </div>
    <section className="p-tb-35">
        <div className="container">
            <div className="row">
            <div className="col-md-6 col-sm-12">
               <VisionaireForm/>
               </div>
               <div className="col-md-6 col-sm-12 border-lefts mobile-border-hide">
               <HealthGallery/>
               </div>
              </div>
        </div>
    </section>
    </>
  );
}

export default Home;
