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
                                        Hi There,
                                    </h2>
                                    <h2 className="perfect__place animate--perfect">
                                        Welcome to MentUP
                                    </h2>
                                    <h4 className="service__describe_page">
                                        We are your go to safe place for expression.
                                    </h4>
                                    <h4 className="service__describe_page">
                                        An anonymous platform for mental health support, counselling and advocacy for students in tertiary institutions.
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

                        <div className="curve__shape__design">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#884353" fill-opacity="1" d="M0,160L40,181.3C80,203,160,245,240,261.3C320,277,400,267,480,256C560,245,640,235,720,218.7C800,203,880,181,960,170.7C1040,160,1120,160,1200,170.7C1280,181,1360,203,1400,213.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill-opacity="1" d="M0,0L40,37.3C80,75,160,149,240,186.7C320,224,400,224,480,197.3C560,171,640,117,720,122.7C800,128,880,192,960,229.3C1040,267,1120,277,1200,240C1280,203,1360,117,1400,74.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                            </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill-opacity="1" d="M0,320L40,272C80,224,160,128,240,112C320,96,400,160,480,197.3C560,235,640,245,720,245.3C800,245,880,235,960,192C1040,149,1120,75,1200,58.7C1280,43,1360,85,1400,106.7L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                            </svg> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path  fill-opacity="1" d="M0,64L40,53.3C80,43,160,21,240,48C320,75,400,149,480,149.3C560,149,640,75,720,53.3C800,32,880,64,960,101.3C1040,139,1120,181,1200,197.3C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                            </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill-opacity="1" d="M0,288L40,245.3C80,203,160,117,240,106.7C320,96,400,160,480,176C560,192,640,160,720,133.3C800,107,880,85,960,69.3C1040,53,1120,43,1200,74.7C1280,107,1360,181,1400,218.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                            </svg>
                        </div>
                    </section>

                    {/* Start of the Second Layer */}

                    <section className="__layer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        {/* <hr className="layer__rule" /> */}
                        <div className="second__layer__container">
                            <h4 className="second__layer__title">About MentUP</h4>
                            <h6 className="second__layer__title2">
                                MentUP is a mental health product owned by Voice-Out The expression; an initiative that advances discussions on mental health and advocates for safe spaces for support, expression and deepening of knowledge in the mental health space among the youth population in Nigeria and beyond.
                            </h6>
                            <div className="second__layer__description">
                                <img src={mobileSecondImage}
                                    alt=""
                                    className="second__layer__desc__img"/>
                                <div className="second__layer__desc">
                                    <h5 className="second__layer__desc__head">
                                        Our app, MentUP is providng the following solutions:
                                    </h5>

                                    <li className="second__layer__desc__inner">
                                        Accessibility to mental health services.
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        Affordability of mental health services.
                                    </li>

                                    <li className="second__layer__desc__inner">
                                        Building an active community of mentally aware individuals.
                                    </li>
                                    <li className="second__layer__desc__inner">
                                        Proving educative resources for you to make more informed decisions about mental health.
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
                                Would you like to partner with us? Send us a review on our app or perhaps invest in the vision?
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
