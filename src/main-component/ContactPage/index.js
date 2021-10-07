import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import Contactpage from '../../components/contact-pg'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'}/> 
            <Contactpage/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;

