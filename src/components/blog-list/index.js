import React from 'react';
import {Link} from 'react-router-dom'
import BlogSidebar from '../blog-sdbr'
/* import VideoModal from '../../components/modal-vid'*/
import './style.css'
import blog1 from '../../images/blog/unsplash.jpg'
import blog2 from '../../images/blog/unsplash2.jpg'
import blog3 from '../../images/blog/unsplash3.jpg'


const BlogList = () => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                   <img src={blog1} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> By J2J Youth Finance Committee</a></li>
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> 25 Feb 2022</a></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Finance Committee Updates</Link></h3>
                                <p>Currently looking into ways to fund some of our initial projects, hope to utilize a donation page, and maybe other donation mediums. Stay tuned in our newsletter to keep up and keep our mission going strong. </p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">Read More...</Link>
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Finance</span>
                                    </div>
                                </div>
                            </div>
                            <div className="post post-text-wrap">
                                <div className="blog-thumb-text">
                                    <span>Meta</span>
                                </div>
                                <ul className="entry-meta">
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> J2J Team</a></li>
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> 25 Feb 2022</a></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Why we started a youth initiative.</Link></h3>
                                <p>The gravity of the future of education means it's time to start moving towards empowering the youth. There is a generation waiting to take today's problems and make them tomorrow's solutions.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                </div>
                            </div>
                            <div className="post format-gallery">
                                <div className="entry-media post-slider">
                                    <img src={blog3} alt="" />
                                </div>
                                <ul className="entry-meta">
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20">J2J Youth Marketing Committee</a></li>
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> 13 March 2022</a></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Marketing Committee Updates</Link></h3>
                                <p>Focusing on contributing to the project by getting 10 boxes of gloves. We’re also working on making labels and getting the logo to put on the boxes that are filled with the supplies we’re all gathering. </p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">Read More...</Link>
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Marketing</span>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="post post-text-wrap">
                                <div className="post-bloquote">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    <span>Robert Harry</span>
                                </div>
                                <div className="blog-thumb-text">
                                    <span>Salat</span>
                                </div>
                                <ul className="entry-meta">
                                    <li><Link onClick={ClickHandler} to="/blog-details"> By Robert harry</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details"> 25 Feb 2021</Link></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Salat is the best exercise for body fitness</Link></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt of the graduate ut labore et dolore magna aliqua.</p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                </div>
    </div>*/}
                            <div className="post format-gallery">
                                <div className="entry-media video-holder">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="blog-thumb-badge">
                                    <div className="blog-thumb-text">
                                        <span>Volunteering</span>
                                    </div>
                                </div>
                                <ul className="entry-meta">
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> J2J Youth Organizational Committee</a></li>
                                    <li><a href = "http://twitter.com/JtoJYouthWing?s=20"> 13 Jan 2022</a></li>
                                </ul>
                                <h3><Link onClick={ClickHandler} to="/blog-details">Organizational Committee</Link></h3>
                                <p>Received generous donation by The Boys and Girls Club of 100 masks; Contacted and approved by HHRD director Humayun Kabeer to donate to us 80 masks by this Saturday. </p>
                                <div className="entry-bottom">
                                    <Link onClick={ClickHandler} to="/blog-details" className="read-more">View More...</Link>
                                </div>
                            </div>
                            <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-details" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link onClick={ClickHandler} to="/blog-details">1</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details">2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-details">3</Link></li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/blog-details" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>
        </section>
     )
        
}

export default BlogList;
