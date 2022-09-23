import React from 'react';
import './LandingHero.css'
import Typewriter from 'typewriter-effect';

function LandingHero() {
  
  return (
    <div className="LandingHero">
        
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <div className="display-4 fw-bold lh-1 word mb-5">
                    <h1> Made with love by taking care of you!
                    </h1>
                    </div>
                    <p className="lead">We believe that sweet treats should play a part in making every day special, both for you and your loved ones. We are aiming to create elegant and colorful treats with outstanding fillings.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold hero-button">Menu</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4 hero-button-contact">Contact us</button>
                    </div>
                </div>
                <div className="col-lg-5 p-0 overflow-hidden">
                    <img className="rounded-lg-2 img-fluid" src="/images/hero-img.png" alt=""  />
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingHero;