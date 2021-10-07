import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import BlogFullwidth from '../../components/blog-full-width'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogFullwidth/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

