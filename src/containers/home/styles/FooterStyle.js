import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: fit-content;
  background: rgb(136, 67, 83);
  mix-blend-mode: normal;
  // border:1px solid rgba(5,5,5,0.1);
  padding: 1em 0em;
`;

export const FooterTop = styled.section`
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: -2em;
  @media screen and (max-width: 769px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
  }
`;

export const FooterSmallText = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 2em;
`;

export const FooterBigText = styled.h5`
  font-style: normal;
  font-weight: 800;
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
  margin-top: -0.5em;
  @media screen and (max-width: 769px) {
    line-height: 1.5em;
  }
`;

export const FooterButton = styled.button`
  width: 12em;
  height: 47px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1em;
  color: rgba(255, 255, 255, 1);
  outline: none;
  transition: 0.5s border, 0.5s color;
  &:hover {
    color: white;
    border: 1px solid rgb(249, 107, 5);
  }
`;

export const FooterMiddle = styled.section`
  height: fit-content;
  // height:5em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3.5em;
  margin-left: 5%;
  margin-right: 5%;
  @media screen and (max-width: 769px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
    margin-top: 2.5em;
  }
`;

export const FooterMiddleFirst = styled.div`
  margin-top: 0em;
  width: 100%;
  height: fit-content;
`;

export const FooterMiddleSecond = styled.div`
  width: 100%;
  height: fit-content;
  text-align: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 769px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }
`;

export const FooterMiddleThird = styled.div`
  display: block;
  width: 100%;
  margin-left: auto;
  height: fit-content;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;

export const FooterIconBox = styled.div`
  width: 10em;
  height: 4em;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5em;
  // @media screen and (max-width: 900px) {
  //   width: 100%;
  //   justify-content: space-between;
  // }
  @media screen and (max-width: 900px) {
    font-size: 1.2em;
    width: 10em;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 769px) {
    width: 10em;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterLogoBox = styled.div`
  @media screen and (max-width: 900px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 769px) {
    margin-top: 1.5em;
    text-align: center;
  }
`;
export const FooterLogo = styled.img`
  width: 3em;
  height: 3em;
  @media screen and (max-width: 900px) {
    margin-left: 0em;
  }
  @media screen and (max-width: 769px) {
    width: 3em;
    height: 3em;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterIcons = styled.div`
  height: 2.5em;
  width: 2.5em;
  color: rgba(249, 107, 5,0.8);
  border-radius: 50px;
  background: white;
  text-align: center;
  @media screen and (max-width: 769px) {
    height: 2.1em;
    width: 2.1em;
  }
`;

export const FooterMiddleText = styled.h5`
  // font-style: normal;
  font-weight: normal;
  font-size: 1em;
  color: rgba(255, 255, 255, 1);
  margin-top: 0em;
  line-height: 2em;
  @media screen and (max-width: 769px) {
    font-size: 1em;
    width: 100%;
    text-align: center;
    margin-top: -0.5em;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const FooterContactText = styled.h3`
  font-style: normal;
  font-weight: 800;
  font-size: 1.5em;
  text-align: right;
  // letter-spacing: -0.05em;
  color: #ffffff;
  margin-top: -0.2em;
  @media screen and (max-width: 900px) {
    font-size: 1.5em;
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    margin-top: -1em;
    font-size: 1.2em;
    line-height: 1.5em;
    margin-bottom: 1em;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  width: 80%;
  float: right;
  height: 3em;
  margin-top: 1em;
  background: white;
  border-radius: 2em;
  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
  }
`;

export const FooterContactBtn = styled.button`
  width: 2em;
  height: 2em;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgb(249, 107, 5);
  outline: none;
  // padding: 1.7em 0.3em;
  // margin: 8px 0;
  border-radius: 50px;
  box-sizing: border-box;
  font-style: normal;
  color: white;
  cursor: pointer;
`;

export const FooterContactInput = styled.input`
  width: 85%;
  height: 3em;
  border-radius: 2em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 1);
  outline: none;
  padding: 1em 0.3em;
  // margin: 8px 0;
  box-sizing: border-box;
  font-style: normal;
  color: rgba(5, 5, 5, 0.7);
  &::-webkit-input-placeholder {
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
    padding-left: 5px;
    padding-top: 2px;
    color: rgba(5, 5, 5, 0.7);
  }
`;

export const FooterBottom = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: fit-content;
  margin-top: 2em;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 769px) {
    margin-left: 7.5%;
    margin-right: 7.5%;
    margin-top: 1em;
    margin-bottom: -1em;
  }
`;

export const FooterBottomText = styled.h6`
  font-style: normal;
  font-weight: bold;
  font-size: 1em;
  line-height: 21px;
  color: #ffffff;
  margin-top: 1em;
  margin-bottom:1em;
  letter-spacing: 2px;
`;
