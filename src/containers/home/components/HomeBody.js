import React from "react";

// import {Ripple} from "react-preloaders";

import {Link} from "react-router-dom";

import "../styles/homeBody.css";

import {Helmet} from "react-helmet";

// import {Chrono} from 'react-chrono';

import AOS from "aos";

import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";

import mobileFirstImage from "../images/Group 3.svg";

import mobileSecondImage from "../images/Group 4.svg";

import contacUsImage from "../images/Group 183.svg";

const HomeBody = () => {
    AOS.init();


    return (
        <> {/* <Ripple color={"rgb(0, 68, 72)"}
                background="white"
                time={3000}
                customLoading={false}/> */}
            <div>
                <Helmet htmlAttributes>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous"/>
                </Helmet>

                <div data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine">

                    <section className="bodyContainer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <div className="first__layer">
                            <div className="left__side">
                                <div className="left__side__container">
                                    <h2 className="perfect__place animate--perfect">
                                        Hi there,
                                    </h2>
                                    <h2 className="perfect__place animate--perfect">
                                        This is MentUp
                                    </h2>
                                    <h4 className="service__describe_page">
                                        A safe place to share your mental health challenges without fear of insecurities, privacy & freedom infrigment but the aim to get counselling and supports anonymously.
                                    </h4>

                                    <div className="left__side__button__container">
                                        <Link to="/" className="left__side__button">
                                            <i className="fas fa-apple-alt"></i>
                                            App Store
                                        </Link>
                                    </div>
                                    <div className="left__side__button__container">
                                        <Link to="/" className="left__side__button2">
                                            <i className="fab fa-google-play"></i>
                                            Play Store
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="right__side">
                                <div className="right__side__container">
                                    <div className="leftSideImage"></div>
                                    <div className="rightSideImage"></div>
                                </div>
                            </div>
                        </div>
                        <div className="first__layer__mobile">
                            <img src={mobileFirstImage}
                                alt=""/>
                        </div>
                        <div className="curve__shape">
                            <div className="section_wave1"></div>
                        </div>
                    </section>

                    {/* Start of the Second Layer */}

                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="second__layer__container">
                            <h4 className="second__layer__title">About MentUp</h4>
                            <h6 className="second__layer__title2">
                                Voice Out The Expression is an initiative that advances discussions on mental health and advocates for safe spaces among the youth population in Nigeria. As a means to advance mental health in Nigeria, we developed MentUP.
                            </h6>
                            <div className="second__layer__description">
                                <img src={mobileSecondImage}
                                    alt=""
                                    className="second__layer__desc__img"/>
                                <div className="second__layer__desc">
                                    <h5 className="second__layer__desc__head">
                                        Our product seeks to bridge the disparity in those outlined issues by providing the following solutions;
                                    </h5>

                                    <li className="second__layer__desc__inner">
                                        Accessibility to mental health services.
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        Affordability of mental health services
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        Psycho-education for mental health advocacy and awareness
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        Building a mental health-conscious community both online and offline (safe space for expression)
                                    </li>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  */}

                    {/* Third layer */}


                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="__layer__container">
                            <h4 className="second__layer__title">Feedback</h4>
                            <h6 className="second__layer__title2">
                                Got a feedback for us or interested to reach out to us?
                            </h6>
                            <div className="fourth__layer__description">
                                <div className="fourth__layer__card__container">
                                    <div className="fourth__layer__left__card">
                                        {/* <div className="fourth__layer__right__card__image"></div> */}
                                        <img src={contacUsImage}
                                            className="fourth__layer__right__card__image"
                                            alt="Contact Us"/>
                                    </div>
                                    <div className="fourth__layer__right__card">
                                        <div className="contact__input__card">
                                            <div className="contact__input__box">
                                                <input type="text" placeholder=" Subject" className="contact__input"/>
                                            </div>
                                            <div className="contact__input__box">
                                                <input type="email" placeholder=" Your Email" className="contact__input"/>
                                            </div>
                                            <div className="contact__input__box">
                                                <textarea type="text" placeholder=" Message" className="contact__input contact--text--area"></textarea>
                                            </div>

                                            <div className="contact__button__box">
                                                <button className="contact__button">SEND</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default HomeBody;
