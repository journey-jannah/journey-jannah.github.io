import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../../images/service/img-3.png'
import service2 from '../../images/service/img-4.png'
import service3 from '../../images/service/img-5.png'
import './style.css'

const Service2 = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
      
    const serviceWrap = [
        {
           simg:service1,
           title:"Thursday Quran Class",
           link:"/weekly-quran"
        },
        {
           simg:service2,
           title:"Youth Group",
           link:"/youth"
        },
        {
           simg:service3,
           title:"Limited Time Events",
           link:"/specials-events"
        },
    ]

    return(
        <div className={`service-area-2 ${props.serviceClass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Offerings</span>
                            <h2>Our Most Popular Classes</h2>
                        </div>
                    </div>
                </div>
                <div className="service-wrap">
                    <div className="row">
                        {serviceWrap.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 custom-grid col-12" key={i}>
                                <div className="service-single-item">
                                    <div className="service-single-img">
                                        <img src={item.simg} alt="" />
                                    </div>
                                    <div className="service-text">
                                        <h2><Link onClick={ClickHandler} to={item.link}>{item.title}</Link></h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service2;