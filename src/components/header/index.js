import React from 'react'
import Logo from '../../logo.svg'
import {Link}  from 'react-router-dom'
import HeaderTopbar from '../header-tpbr'
import MobileMenu from '../../components/mob-menu'
import './style.css'

const Header = () => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

     const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(	
        <div className="middle-header">
            <HeaderTopbar/>
            <div className="header-style-3">
                <div className="container">
                    <div className="header-content">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                            <div className="logo">
                                <Link onClick={ClickHandler} to="/" title=""><img src={Logo} alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-lg-8 d-lg-block d-none">
                            <nav>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/home" title="">Home</Link></li>
                                    <li><Link onClick={ClickHandler} to="/about" title="">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/classes" title="">Classes</Link>
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="/weekly-quran" title="">Weekly Quran Class</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link onClick={ClickHandler} to="/youth" title="">Youth</Link></li>
                                    <li><Link onClick={ClickHandler} to="/donate" title="">Donate</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact" title="">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-1 col-md-6 col-sm-6 col-6">
                            <div className="contact">
                                <div className="cart-search-contact">
                                    <div className="header-search-form-wrapper">
                                        <button className="search-toggle-btn"><i className="fi flaticon-search"></i></button>
                                        <div className="header-search-form">
                                            <form onSubmit={SubmitHandler}>
                                                <div>
                                                    <input type="text" className="form-control" placeholder="Search here..."/>
                                                    <button type="submit"><i className="ti-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn"><Link onClick={ClickHandler} className="active" to="/shop" title=""><i className="fi flaticon-shopping-cart"></i></Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                    
                        <div className="clearfix"></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;