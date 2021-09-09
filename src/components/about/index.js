import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area section-padding">
            <div className="container">
                <div className="wpo-about-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="wpo-about-img-3">
                                <img src={props.aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 colsm-12">
                            <div className="wpo-about-text">
                                <div className="wpo-section-title">
                                    <span>Our Mission</span>
                                    <h2>Empowering Women & Youth with Islam</h2>
                                </div>
                                <p>At Journey to Jannah our goal is to help women become self-empowered, not only through quranic studies but through modern techniques like interactive finanicial workshops or self-awareness classes.</p>
                                <div className="btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn" tabIndex="0">Our Values</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;