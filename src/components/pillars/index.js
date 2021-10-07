import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import plr1 from '../../images/pilars/img-1.png'
import plr2 from '../../images/pilars/img-2.png'
import plr3 from '../../images/pilars/img-4.png'
import plr4 from '../../images/pilars/img-5.png'
import plr5 from '../../images/pilars/img-6.png'


const Pilars = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    

    const Pillars = [

        {
            pillarsImg:plr1,
            pillarsHeading:"WPI",
            link:'https://wpi.edu'
        },
        {
            pillarsImg:plr2,
            pillarsHeading:"Mass STEM Week",
            link:'https://www.massstemweek.org/'
        },
        {
            pillarsImg:plr3,
            pillarsHeading:"UBTECH",
            link:'https://www.ubtrobot.com//'
        },
        {
            pillarsImg:plr4,
            pillarsHeading:"GSK",
            link:'https://www.ubtrobot.com/'
        },
        {
            pillarsImg:plr5,
            pillarsHeading:"Edison Robotics",
            link:'https://meetedison.com/'
        },

    ]

    return(
                   
        <div className="pilars-area">
            <h2 className="wpo-section-title">Organizations We've Worked With</h2>
            <div className="fluid-container">
                <div className="row-grid">
                    {Pillars.map((pillar, pl) =>(
                        <div className="grid" key={pl}>
                            <div className="pilars-item">
                                <div className="pilarts-img">
                                    <img src={pillar.pillarsImg} alt="" />
                                </div>
                                <div className="pilars-text">
                                    <h2><Link onClick={ClickHandler} to={pillar.link}>{pillar.pillarsHeading}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        
  
      
    )
}

export default Pilars;