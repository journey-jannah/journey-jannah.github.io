import React from 'react'
import service1 from '../../images/service/img-1.png'
import service2 from '../../images/service/img-2.png'
import './style.css'

const Service = (props) => {
    return(
        <div className="service-area section-padding">
            <div className="container">
                <div className="service-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="service-item">
                                <div className="service-title">
                                    <span>Featured Programs</span>
                                    <h2>Our Programs for Islamic Learning</h2>
                                    <p>Journey to Jannah deploys a series of Islamic classes and workshops utilizing modern approaches to the </p>
                                </div>
                                <div className="routine-table">
                                    <ul className="routne-head">
                                        <li>Class</li>
                                        <li>Day</li>
                                        <li>Time</li>
                                    </ul>
                                    <ul>
                                        <li>Hadith & Tadabur Al-Quran</li>
                                        <li>Thursdays</li>
                                        <li>10am - 12pm</li>
                                    </ul>
                                    <ul>
                                        <li>Kids Summer (Misc)</li>
                                        <li>Tuesdays</li>
                                        <li>11am - 1pm</li>
                                    </ul>
                                    <ul>
                                        <li>Digital Skills</li>
                                        <li><a href="mailto:j2jistem@gmail.com">Contact</a></li>
                                        <li><a href="mailto:j2jistem@gmail.com">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="btns">
                                    <a href="/service-single" className="theme-btn-s3">See More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="service-img">
                                <img src={service1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-wrap-s2">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="service-img">
                                <img src={service2} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="service-item">
                                <div className="service-title">
                                    <span>Exclusively Unique</span>
                                    <h2>Exclusive Opportunities for Self-Development</h2>
                                    <p>Journey to Jannah offers a wide variety of partnership programs with the likes of colleges such as WPI, as well as innovative companies in fields like robotics and emerging fields in STEM.<br></br> <br></br>Our team focuses on bringing opportunities that not only teach but empower people as well.</p>
                                </div>
                                <div className="wpo-counter-grids">
                                    <div className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="10">10</span>+</h2>
                                        </div>
                                        <p>Partnerships</p>
                                    </div>
                                    <div className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="20">20</span>+</h2>
                                        </div>
                                        <p>Programs</p>
                                    </div>
                                    <div className="grid">
                                        <div>
                                            <h2><span className="odometer" data-count="200">200</span>+</h2>
                                        </div>
                                        <p>Participants</p>
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

export default Service;