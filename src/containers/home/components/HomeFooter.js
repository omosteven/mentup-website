import React from 'react';

// import { Link } from 'react-router-dom';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import {
    Footer, FooterBottom,
    // FooterButton,
    FooterIconBox, FooterIcons, FooterLogo, FooterLogoBox, FooterMiddle, FooterMiddleText, FooterMiddleFirst, FooterMiddleSecond, FooterMiddleThird,
    //   FooterSmallText, FooterTop,
    FooterContactText, FooterContactInput, FooterBottomText, FooterContact, FooterContactBtn
} from '../styles/FooterStyle';
import mentUPLogo from "../images/MentUPLogo.svg";

const HomeFooter = (props) => {
    // AOS.init();

    return (
        <>
            <Footer data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">


                <FooterMiddle data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <Grid container spacing={3}>
                        <Grid item lg={4} md={4} xs={12} sm={12}>
                            <FooterMiddleFirst>
                                <FooterLogoBox>
                                    <FooterLogo src={mentUPLogo} />
                                </FooterLogoBox>

                                <FooterIconBox>
                                    <a href='https://linkedin.com' target='__blank'>
                                        <FooterIcons>
                                            <LinkedInIcon style={{ marginTop: '0.35em' }} />
                                        </FooterIcons>
                                    </a>
                                    <a href='https://facebook.com' target='__blank'>
                                        <FooterIcons>
                                            <FacebookIcon style={{ marginTop: '0.35em' }} />
                                        </FooterIcons>
                                    </a>
                                    <a href='https://twitter.com/' target='__blank'>
                                        <FooterIcons>
                                            <TwitterIcon style={{ marginTop: '0.35em' }} />
                                        </FooterIcons>
                                    </a>
                                </FooterIconBox>
                            </FooterMiddleFirst>
                        </Grid>

                        <Grid item lg={4} md={4} xs={12} sm={12}>
                            <FooterMiddleSecond>
                                <FooterMiddleText>Terms</FooterMiddleText>
                                <FooterMiddleText>Privacy Policy</FooterMiddleText>
                                <FooterMiddleText>FAQs</FooterMiddleText>
                            </FooterMiddleSecond>
                        </Grid>

                        <Grid item lg={4} md={4} xs={12} sm={12}>
                            <FooterMiddleThird>
                                <FooterContactText>Don't miss out in your inbox!</FooterContactText>
                                <FooterContact>
                                    <FooterContactInput placeholder="Enter Your Email" />
                                    <FooterContactBtn><ArrowForwardIosIcon /></FooterContactBtn>
                                </FooterContact>

                            </FooterMiddleThird>
                        </Grid>
                    </Grid>

                </FooterMiddle>

                <FooterBottom>
                    <FooterBottomText>© 2021 MentupApp. All rights reserved</FooterBottomText>
                </FooterBottom>
            </Footer>
        </>
    )
};

export default HomeFooter;