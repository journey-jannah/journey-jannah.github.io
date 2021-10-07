import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import Error from '../../components/404'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;

