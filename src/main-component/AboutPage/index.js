import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import ImgSlider from '../../components/img-sldr'
import PageTitle from '../../components/pg-title'
import About from '../../components/about'
import Course from '../../components/course'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import abimg from '../../images/about-3.svg'



const AboutPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'About Us'} pagesub={'About'}/> 
            <About aboutImg={abimg}/>
            <Course/>
            <ImgSlider/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;
