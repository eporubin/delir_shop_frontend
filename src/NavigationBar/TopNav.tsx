import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import './TopNav.css';

export default function TopNav(){
   
    return(
        <div className='TopNav'>
            <nav className="navbar navbar-expand-lg  navbar-light bg-color">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src='/images/DelirLong.png' width='150px' alt='Delir Logo Image'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <span className="nav-link active" aria-current="page"><Link to="/"> Home</Link></span>
                            </li>
                            <li className="nav-item">
                            <span className='nav-link '><Link to="Category"> Categories</Link></span>
                            </li>
                            <li className="nav-item">
                            <span className='nav-link '><Link to="Pricing"> Pricing</Link></span>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-outline-bar" type="submit">Free Consultation</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}