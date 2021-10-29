import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Support = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <div className="support-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="support-text">
                            <span>Support Us</span>
                            <h2>We Need Your Help</h2>
                            <p>As an organization we dedicate ourselves to providing opportunities at no to little cost for everyone, help us keep our program available to all!</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/donate" className="theme-btn-s3">Donate Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress-area">
                            <div className="row">
                                <div className="col-lg-4 col-sm-4 custom-grid">
                                    <div className="progress-wrap">
                                        <div className="progress s1">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">20%</div>
                                        </div>
                                        <span>Services</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 custom-grid">
                                    <div className="progress-wrap">
                                        <div className="progress s3">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">30%</div>
                                        </div>
                                        <span>Subsidization</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 custom-grid">
                                    <div className="progress-wrap">
                                        <div className="progress s2">
                                            <span className="progress-left">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <span className="progress-right">
                                                <span className="progress-bar"></span>
                                            </span>
                                            <div className="progress-value">50%</div>
                                        </div>
                                        <span>Programs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;