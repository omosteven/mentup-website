import styled from 'styled-components';


// --- Modal Styling ---

export const EarlyAccessBox = styled.div`
  background: white;
  // height: 28em;
  height:fit-content;
  width: 35em;
  border: none;
  outline: none;
  border-radius: 0.5em;
  font-family: 'Mukta', sans-serif;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
`;

export const EarlyAccessMsg = styled.h4`
  // text-align:center;
  color: rgba(5, 5, 5, 0.7);
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom:1em;
`;

export const EarlyAccessText = styled.h6`
  // text-align:center;
  color: rgba(5, 5, 5, 0.7);
  margin-bottom: 0.5em;
  font-size: 0.9em;
  font-weight: normal;
  line-height: 1.5em;
  @media screen and (max-width:769px){
    font-size:0.85em;
  }
`;

export const EarlyAccessSelText = styled.h6`
  // text-align:center;
  color: rgba(5, 5, 5, 0.7);
  margin-top: 0em;
  margin-bottom: 0.5em;
  font-size: 0.9em;
  font-weight: normal;
  @media screen and (max-width:769px){
    font-size:0.85em;
  }
`;

export const ModalCancelIcon = styled.div`
  float: right;
  margin-right: 1em;
  color: red;
  margin-top: 0.5em;
`;

export const ModalContainer = styled.form`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 15em;
  height:fit-content;
  // background:red;
  margin-top: 3em;
  margin-bottom:1.5em;
`;


export const AuthContainer = styled.div`
  //   background: red;
  height: 100vh;
  width: 100%;
  display: flex;
  @media screen and (max-width: 769px) {
    display: block;
  }
`;

export const AuthLeft = styled.section`
  width: 50%;
  background: rgba(31, 40, 71, 1);
  background: rgba(255, 255, 255, 1);
  // height:100vh;
  min-height: 100vh;
  @media screen and (max-width: 769px) {
    display: none;
  }
`;

export const AuthRight = styled.section`
  width: 50%;
  min-height: 100vh;
  background: rgba(31, 40, 71, 1);
  @media screen and (max-width: 769px) {
    width: 100%;

    background-size: cover;
    background: rgba(31, 40, 71, 1);

    background: rgba(255, 255, 255, 1);
  }
`;

export const AuthLeftInner = styled.div`
  width: 80%;
  margin-left: 10%;
  height: 50vh;
  margin-top: 25vh;
`;

export const AuthRightInner = styled.div`
  width: 75%;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.3em;
  margin-top: 2em;
  margin-left: auto;
  margin-right: auto;
  height: 90vh;
  //   border-radius:0.5em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  @media screen and (max-width: 769px) {
    background: unset;
    width: unset;
    margin-top: unset;
    margin-left: unset;
    height: unset;
    border: 1px solid rgba(255, 255, 255, 0);
  }
`;

export const AuthLeftTitle = styled.h3`
  color: rgba(5, 5, 5, 0.8);
  font-size: 2.8em;
  line-height: 1.5em;
  width: 100%;
  font-weight: bold;
  margin-top: 2em;
  @media screen and (max-width: 1025px) {
    width: 100%;
    font-size: 2.2em;
  }
  @media screen and (max-width: 720px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7em;
    font-size: 2em;
    margin-top: 2em;
  }
`;

export const AuthLeftText = styled.p`
  // font-size:2em;
  margin-top: -1em;
  line-height: 2em;
  width: 90%;
  font-weight: normal;
  color: rgba(5, 5, 5, 0.7);
  @media screen and (max-width: 720px) {
    width: 90%;
    margin-top: 0em;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AuthForm = styled.div`
  // background:red;
  height: 80vh;
  margin-top: 5vh;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 769px) {
    width: 85%;
    margin-top: 10vh;
  }
`;

export const AuthInput = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 0.3em;
  margin-bottom: 1em;
  margin-top: 0.5em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  background: rgba(5, 5, 5, 0.005);
  outline: none;
  padding: 1.7em 0.3em;
  margin: 8px 0;
  box-sizing: border-box;
  color: rgba(5, 5, 5, 1);
  &::-webkit-input-placeholder {
    overflow: visible;
    vertical-align: top;
    display: inline-block !important;
    padding-left: 5px;
    padding-top: 2px;
    color: rgba(5, 5, 5, 0.5);
  }
  @media screen and (max-width: 769px) {
    // color: rgba(5, 5, 5, 1);
    // border: 1px solid rgba(255, 255, 255, 0.3);
    // background: rgba(255, 255, 255, 1);
  }
`;

export const AuthSelect = styled.select`
  width: 100%;
  height: 3.5em;
  border-radius: 0.3em;
  margin-bottom: 1em;
  margin-top: 0.5em;
  border: 1px solid rgba(5, 5, 5, 0.3);
  background: rgba(5, 5, 5, 0.1);
  outline: none;
  padding: 0em 0.5em;
  box-sizing: border-box;
  color: rgba(5, 5, 5, 0.7);
  @media screen and (max-width: 769px) {
    // color: rgba(5, 5, 5, 1);
    // border: 1px solid rgba(255, 255, 255, 0.3);
    // background: rgba(255, 255, 255, 1);
  }
`;

export const AuthFormTitle = styled.h1`
  color: rgba(31, 40, 71, 1);
  color: rgba(5, 5, 5, 0.8);
  font-weight: bold;
  font-size: 1.8em;
  margin-top: 1em;
  @media screen and (max-width: 769px) {
    // color: rgba(255, 255, 255, 1);
  }
`;

export const AuthFormText = styled.p`
  line-height: 2em;
  color: rgba(5, 5, 5, 0.7);
  @media screen and (max-width: 769px) {
    // color: rgba(255, 255, 255, 0.7);
  }
`;

export const AuthFormInnerCard = styled.div`height: fit-content;`;

export const AuthForgotText = styled.p`
  float: right;
  color: rgba(31, 40, 71, 1);
  cursor: pointer;
  margin-bottom: 1em;
  @media screen and (max-width: 769px) {
    // color: rgba(255, 255, 255, 1);
    margin-top: 0.5em;
  }
`;

export const AuthBottomText = styled.p`
  color: rgba(5, 5, 5, 0.8);
  text-align: center;
  cursor: pointer;
  //   font-weight: bold;
  @media screen and (max-width: 769px) {
    // color: rgba(255, 255, 255, 1);
    font-weight: bold;
  }
`;

export const AuthFormBtn = styled.button`
  height: 3em;
  color: rgba(255, 255, 255, 1);
  font-weight: bold;
  border: none;
  width: 100%;
  // margin-top:1em;
  cursor: pointer;
  background: rgb(136, 67, 83);
  outline: none;
  border-radius: 0.3em;
  transition: 0.7s background, 0.7s border, 0.7s color;
  &:hover {
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgb(136, 67, 83);
    color: rgba(5, 5, 5, 0.8);
    outline:none;
  }
`;

export const AuthLogo = styled.img`
  width: 4em;
  height: 4em;
`;


export const AuthTextArea = styled.input`
width: 100%;
height: 5em;
border-radius: 0.3em;
margin-bottom: 1em;
margin-top: 0.5em;
border: 1px solid rgba(5, 5, 5, 0.3);
background: rgba(5, 5, 5, 0.005);
outline: none;
padding: 1.7em 0.3em;
margin: 8px 0;
box-sizing: border-box;
color: rgba(5, 5, 5, 1);
&::-webkit-input-placeholder {
  overflow: visible;
  vertical-align: top;
  display: inline-block !important;
  padding-left: 5px;
  padding-top: 2px;
  color: rgba(5, 5, 5, 0.5);
}
@media screen and (max-width: 769px) {
  // color: rgba(5, 5, 5, 1);
  // border: 1px solid rgba(255, 255, 255, 0.3);
  // background: rgba(255, 255, 255, 1);
}
`;