import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import Shop from '../../components/shop'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ShopPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'}/> 
            <Shop/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopPage;
