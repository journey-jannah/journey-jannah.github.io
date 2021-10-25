import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo.svg'
import Newsletter from '../newsletter'
import './style.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <div className={`wpo-ne-footer ${props.footerClass}`}>
        <Newsletter/>
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <img src={Logo} alt="" />
                                </div>
                                <p>Connect with us to stay in the loop on current projects, classes, and more!</p>
                                <ul>
                                    <li><Link to="//m.facebook.com/pages/category/Community-Service/Journey-to-Jannah-100734968223242/"><i className="fa fa-facebook"></i></Link></li>
                                    <li><Link to="//twitter.com/JtoJYouthWing?s=20"><i className="fa fa-twitter"></i></Link></li>
                                    <li><Link to="//instagram.com/journeytojannah_youthwing?igshid=hm76cionmdoz"><i className="fa fa-instagram"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Frequently Visited</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                    <li><Link onClick={ClickHandler} to="/classes">Classes</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-2 col-md-6 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/classes">Classes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/event">Events</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 offset-lg-1 col-md-6 col-12">
                            <div className="widget market-widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact </h3>
                                </div>
                                <p>Have questions? Feel free to contact us!</p>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="ti-mobile"></i><Link className = "link-alt" to="//tel:6177521648"> (617) 752-1648</Link></li>
                                        <li><i className="fa fa-envelope"></i><Link className = "link-alt" to="//mailto:info@myj2j.org"> info@myj2j.org</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright">&copy; 2021 Journey to Jannah. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
} 

export default Footer;