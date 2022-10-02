/* eslint-disable react/style-prop-object */
import React, {Component} from 'react'
import './style.scss'
import img1 from '../../images/robot-covid/img-1.jpg'
import img2 from '../../images/robot-covid/img-2.jpg'
import img3 from '../../images/robot-covid/img-3.jpg'
import img4 from '../../images/robot-covid/img-4.jpg'
import img5 from '../../images/robot-covid/img-5.jpg'
import img6 from '../../images/robot-covid/img-6.jpg'
import img7 from '../../images/robot-covid/img-7.jpg'
import img8 from '../../images/robot-covid/img-8.jpg'
import img9 from '../../images/robot-covid/img-9.jpg'
import img10 from '../../images/robot-covid/img-10.jpg'
import img11 from '../../images/robot-covid/img-11.jpg'
import img12 from '../../images/robot-covid/img-12.jpg'
import img13 from '../../images/robot-covid/img-13.jpg'
import img14 from '../../images/robot-covid/img-14.jpg'
import img15 from '../../images/robot-covid/img-15.jpg'
import img16 from '../../images/robot-covid/img-16.jpg'
import img17 from '../../images/robot-covid/img-17.jpg'
import img18 from '../../images/robot-covid/img-18.jpg'
import img19 from '../../images/robot-covid/img-19.jpg'
import img20 from '../../images/robot-covid/img-20.jpg'
import img21 from '../../images/robot-covid/img-21.jpg'
import img22 from '../../images/robot-covid/img-22.jpg'

class Collage extends Component {
    render() {
    return(
    
        <div className="wrapper">
           <div className="wpo-section-title">
                            <span>Our Events</span>
                            <h2>Some of What We Offer</h2>
                        </div>
		<div className="gallery">
			<ul>
				<li><img src={img1} alt=""></img></li>
                <li><img src={img2} alt=""></img></li>
                <li><img src={img3} alt=""></img></li>
                <li><img src={img4} alt=""></img></li>
                <li><img src={img5} alt=""></img></li>
                <li><img src={img6} alt=""></img></li>
                <li><img src={img7} alt=""></img></li>
                <li><img src={img8} alt=""></img></li>
                <li><img src={img9} alt=""></img></li>
                <li><img src={img10} alt=""></img></li>
                <li><img src={img11} alt=""></img></li>
                <li><img src={img12} alt=""></img></li>
                <li><img src={img13} alt=""></img></li>
                <li><img src={img14} alt=""></img></li>
                <li><img src={img15} alt=""></img></li>
                <li><img src={img16} alt=""></img></li>
                <li><img src={img17} alt=""></img></li>
                <li><img src={img18} alt=""></img></li>
                <li><img src={img19} alt=""></img></li>
                <li><img src={img20} alt=""></img></li>
                <li><img src={img21} alt=""></img></li>
                <li><img src={img22} alt=""></img></li>
			</ul>
		</div>
        </div>
    )
}
}

export default Collage;

