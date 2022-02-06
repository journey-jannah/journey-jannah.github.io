import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import ServiceSingle from '../../components/service-sing'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ServiceSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Weekly Classes'} pagesub={'Weekly Quran'}/> 
            <ServiceSingle/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServiceSinglePage;
