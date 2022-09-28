import React from 'react';
import evnt from '../../images/blog/logo192.svg'


import './style.css'
// eslint-disable-next-line no-lone-blocks
{/*import ins1 from '../../images/recent-posts/img-1.jpg'
import ins2 from '../../images/recent-posts/img-2.jpg'
import ins3 from '../../images/recent-posts/img-3.jpg'*/}

const BlogSidebar = () => {

    const SubmitHandler = (e) =>{
       e.preventDefault()
    }

    return(
        <div className="col col-lg-4 col-md-12 col-12">
            <div className="wpo-blog-sidebar">
                <div className="widget profile-widget">
                    <div className="profile-img">
                        <img src={evnt} alt="" />
                        <h2>Journey to Jannah Youth</h2>
                        <p>Stay updated on our journey as we focus on impacting our communities.</p>
                    </div>
                    <div className="pro-social">
                        <ul>
                            <li><a href = "http://twitter.com/JtoJYouthWing?s=20"><i className="ti-facebook"></i></a></li>
                            <li><a href = "http://twitter.com/JtoJYouthWing?s=20"><i className="ti-twitter-alt"></i></a></li>
                            <li><a href = "http://twitter.com/JtoJYouthWing?s=20"><i className="ti-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Youth.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                {/*
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        <li><Link to="/blog-details">Islamic Rules<span>(8)</span></Link></li>
                        <li><Link to="/blog-details">Importance of Marriage<span>(5)</span></Link></li>
                        <li><Link to="/blog-details">Hajj Guide <span>(7)</span></Link></li>
                        <li><Link to="/blog-details">Helping Poor<span>(3)</span></Link></li>
                        <li><Link to="/blog-details">Travelling <span>(6)</span></Link></li>
                        <li><Link to="/blog-details">Learning Quran <span>(2)</span></Link></li>
                    </ul>
                </div>*/}
                {/*
                <div className="widget recent-post-widget">
                    <h3>Recent posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins1} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Many Children are suffering a lot for food.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins2} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be kind for the poor people and the kids.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={ins3} alt=""/>
                            </div>
                            <div className="details">
                                <h4><Link to="/blog-details">Be soft and kind for the poor people.</Link></h4>
                                <span className="date">22 Sep 2021</span>
                            </div>
                        </div>
                    </div>
                </div>*/}
                {/*<div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="/blog-details">Salat</Link></li>
                        <li><Link to="/blog-details">Quran</Link></li>
                        <li><Link to="/blog-details">Books</Link></li>
                        <li><Link to="/blog-details">Education</Link></li>
                        <li><Link to="/blog-details">World Wide</Link></li>
                        <li><Link to="/blog-details">Marriage</Link></li>
                        <li><Link to="/blog-details">Hajj</Link></li>
                        <li><Link to="/blog-details">Health</Link></li>
                    </ul>
                </div>*/}
            </div>
        </div>
     )
        
}

export default BlogSidebar;
