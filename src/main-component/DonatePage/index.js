import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import Donate from '../../components/donate'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const DonatePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Donate Now'} pagesub={'Donate'}/> 
            <Donate/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default DonatePage;
