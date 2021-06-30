import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    EarlyAccessBox, EarlyAccessMsg, EarlyAccessText, ModalCancelIcon, ModalContainer,
    AuthFormBtn, AuthFormInnerCard, AuthInput
} from '../styles/EarlyAccesStyle';
import { Grid } from '@material-ui/core';
// import registerEarlyBirds from '../../adapters/home/registerEarlyBirds';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none',
        outline: 'none'
    }
}));

export default function TransitionsModal(props) {
    const classes = useStyles();

    const [btnState, setBtnState] = useState({ isDisabled: false, text: 'JOIN US NOW' });

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', likedTheProduct: true, registeredAs: 'Founder', userOpinion: ''
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data', formData);
        if (formData.firstName === '' && formData.lastName === '' && formData.email === '') {
            toast.warning('Please ensure your first & last name with email are entered!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {

            toast('Please, kindly wait while we submit your entry!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setBtnState({ isDisabled: true, text: 'JOINING...' });

            formData.likedTheProduct = formData.likedTheProduct === "false" ? false : true;

            // let getResp = registerEarlyBirds(formData);

            // getResp.then(({ isError, errorMessage, data }) => {

            //     if (isError) {

            //         toast.error(errorMessage, {
            //             position: "top-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //         });

            //         setBtnState({ isDisabled: false, text: 'JOIN US NOW' });

            //     } else {
            //         toast.success('Thanks for pre-registering with us. We will get in touch via email!', {
            //             position: "top-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //         });
            //         setBtnState({ isDisabled: true, text: 'THANKS FOR JOINING US!' });

            //         setTimeout(() => {
            //             props?.setOpen(false);
            //         }, 2000);
            //     }
            // });
        }
    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props?.open}
                onClose={props?.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props?.open}>
                    <EarlyAccessBox>
                        <ModalCancelIcon><CloseIcon onClick={props?.handleClose} style={{ cursor: 'pointer' }} /></ModalCancelIcon>
                        <ModalContainer>
                            <EarlyAccessMsg>Hi there,</EarlyAccessMsg>
                            <EarlyAccessText>We would love you join our early access to stay tuned when we launch</EarlyAccessText>
                            <Grid container spacing={2}>
                                <Grid item lg={6} xs={12} md={6} sm={12}>
                                    <AuthFormInnerCard>
                                        <AuthInput name='firstName' onChange={handleChange} placeholder='First Name*' required />
                                    </AuthFormInnerCard>
                                </Grid>

                                <Grid item lg={6} xs={12} md={6} sm={12}>
                                    <AuthFormInnerCard>
                                        <AuthInput name='lastName' onChange={handleChange} placeholder='Last Name*' required />
                                    </AuthFormInnerCard>
                                </Grid>

                                <Grid item lg={12} xs={12} md={12} sm={12}>
                                    <AuthFormInnerCard>
                                        <AuthInput name='email' onChange={handleChange} placeholder='Email*' required />
                                    </AuthFormInnerCard>
                                </Grid>

                                <Grid item lg={6} xs={12} md={6} sm={12}>

                                </Grid>
                                <Grid item lg={6} xs={12} md={6} sm={12}>
                                    <AuthFormInnerCard>
                                        <AuthFormBtn type='submit' onClick={handleSubmit} disabled={btnState.isDisabled}>{btnState.text}</AuthFormBtn>
                                    </AuthFormInnerCard>
                                </Grid>
                            </Grid>
                        </ModalContainer>
                    </EarlyAccessBox>
                </Fade>
            </Modal>
        </>
    );
}
