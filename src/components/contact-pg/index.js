import React from 'react';
import ContactForm from '../contact-form'
import './style.css'

const Contactpage = () => {

    return(
        <section className="wpo-contact-form-map section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-form">
                                    <h2>Get In Touch</h2>
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                        <div className="wpo-contact-info">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2>Given Upon Request</h2>
                                        <div className="info-wrap">
                                            <div className="info-icon">
                                                <i className="ti-world"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Office Address</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2><a className="link-alt" href = "mailto:info@myj2j.org">info@myj2j.org</a></h2>
                                        <div className="info-wrap">
                                            <div className="info-icon-2">
                                                <i className="fi flaticon-envelope"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Official Mail</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="info-item">
                                        <h2><a className="link-alt" href = "tel:6177521648">(617) 752-1648</a></h2>
                                        <div className="info-wrap">
                                            <div className="info-icon-3">
                                                <i className="ti-headphone-alt"></i>
                                            </div>
                                            <div className="info-text">
                                                <span>Official Phone</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     )
        
}

export default Contactpage;
