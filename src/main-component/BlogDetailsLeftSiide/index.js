import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import BlogDetailsLeft from '../../components/blog-details-left'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsLeftSiide =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetailsLeft/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


