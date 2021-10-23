import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'

class Hero2 extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };
        return (
            <section className="hero hero-style-1">
                <div className="hero-slider-alt">
                    <Slider {...settings}>
                          <div className="slide s1">
                              <div className="container">
                                 <div className="row">
                                 </div>
                            </div>
                        </div>
                        <div className="slide s2">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s4">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s5">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s6">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s7">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s8">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s9">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s10">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s11">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s12">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s13">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s14">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s15">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s16">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s17">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s18">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s19">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s20">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s21">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                        <div className="slide s22">
                            <div className="container">
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
export default Hero2;