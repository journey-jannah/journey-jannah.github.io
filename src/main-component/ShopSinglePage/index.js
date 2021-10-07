import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import ShopSingle from '../../components/shop-sing'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const ShopSinglePage =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Shop Single'} pagesub={'Shop'}/> 
            <ShopSingle/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ShopSinglePage;
