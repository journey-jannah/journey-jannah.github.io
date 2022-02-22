import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../images/service-details.svg'
import service2 from '../../images/service-detail2.svg'
import './style.css'

const ServiceSingle = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
      


    return(
        <section className="service-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-md-12 col-12">
                        <div className="service-single-content">
                            <div className="service-single-img">
                                <img src={service1} alt=""/>
                            </div>
                            {/*<h2><b>Weekly Quran Classes</b></h2>*/}
                            <p>Join us as we explore every Juz of the Quran, in-depth, and important lessons. Some of our current topics include Hadith Bukhari, Tadabbur Al-Quran, and stories of the sahaba. We also open up our class to group discussion and discusion of current situation and how to apply those lessons in a contemporary context. We also use our community as a catalyst for other community events, including youth get-togethers, special guest speakers, and family events!</p>
                            <p>In order to teach effectively, we have employed a series of technologies & services that allow our participants to learn effectively as well as safely. During the COVID-19 pandemic we shifted our class online on Zoom, and we employ WhatsApp groups and email newsletters in order to maximize the outreach to our community. We're also working on building out an app for a more transparent spread of ideals.</p>
                            <div className="service-single-tb">
                                <div className="service-single-inner">
                                    <span><img src={service2} alt=""/></span>
                                    <div className="service-single-tb-text">
                                        <p>We keep recordings of some of our most popular classes, which is made available to others, right here on our website!</p>
                                        <p>Any recordings provided to the group are provided here along with the date they were recorded.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ul-alt">
                                <h3><b>Some of what you'll see:</b></h3>
                                <ul className="ul-alt">
                                    <li><b>Community</b> - our community platforms emphasize helping each other. Participants often share helpful advice to others or help those in need in the area by organizing group events.</li>
                                    <br></br>
                                    <li><b>Modern Design</b> - our focus is to help you apply Islamic values in the real world - our discussions often include exactly how to do that.</li>
                                    <br></br>
                                    <li><b>Curiousity</b> - there is no discussion that's fully closed - we focus on making sure that you can follow curiosity and that it might one day become a passion.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="prv-nx">
                            <div className="pre-btn"><Link onClick={ClickHandler} to="/weekly-quran">Previous</Link></div>
                            <div className="nex-btn"><Link onClick={ClickHandler} to="/weekly-quran">Next</Link></div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-12 col-12">
                        <div className="service-sidebar">
                            <div className="widget service-list-widget">
                                <h3>All Services</h3>
                                <ul>
                                    <li className="current"><Link to="/weekly-quran">Weekly Classes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/youth">Youth Group</Link></li>
                                    <li><Link onClick={ClickHandler} to="/weekly-quran">Special Events</Link></li>
                                </ul>
                            </div>
                            <a href="https://whatsapp.com">
                                <div className="widget contact-widget" >
                                
                                <div>
                                    <h4>                   </h4>
                                    <h2>              </h2>
                                </div>
                                
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSingle;