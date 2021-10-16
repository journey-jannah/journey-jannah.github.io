import React from 'react'
import './style.css'
import plr1 from '../../images/pilars/img-1.png'
import plr2 from '../../images/pilars/img-2.png'
import plr3 from '../../images/pilars/img-4.png'
import plr4 from '../../images/pilars/img-5.png'
import plr5 from '../../images/pilars/img-6.png'


const Pilars = () => {

    

    const Pillars = [

        {
            pillarsImg:plr1,


        },
        {
            pillarsImg:plr2,


        },
        {
            pillarsImg:plr3,


        },
        {
            pillarsImg:plr4,


        },
        {
            pillarsImg:plr5,

        },

    ]

    return(
                   
        <div className="pilars-area">
            <h1 className="wpo-section-title"><b>Organizations We've Worked With</b></h1>
            <div className="fluid-container">
                <div className="row-grid">
                    {Pillars.map((pillar, pl) =>(
                        <div className="grid" key={pl}>
                            <div className="pilars-item">
                                <div className="pillars-img">
                                    <img src={pillar.pillarsImg} alt="" />
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