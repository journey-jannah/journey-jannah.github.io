import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import Hero from '../../components/home'
import About from '../../components/about'
import Service from '../../components/service'
import Pilars from '../../components/pillars'
import Support from '../../components/support'
import BlogSection from '../../components/blog-sctn'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import abimg from '../../images/about-3.svg'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import hero1 from '../../images/slider/img-3.svg'


const HomePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Hero HeroStyleClass={'hero-style-2'} heroImg={hero1}/>
            <About aboutImg={abimg}/>
            <Service/>
            <Pilars/>
            <Support/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;