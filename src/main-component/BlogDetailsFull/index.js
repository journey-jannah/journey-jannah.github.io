import React, {Fragment} from 'react';
import Navbar from '../../components/nav'
import PageTitle from '../../components/pg-title'
import BlogDetailsFullwidth from '../../components/blog-details-full'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'


const BlogDetailsFull =() => {
    return(
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogDetailsFullwidth/>
            <Footer footerClass={'wpo-ne-footer-2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;