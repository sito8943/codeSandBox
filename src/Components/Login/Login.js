import React, { useState } from 'react';

import './Login.css'

import Fade from '@material-ui/core/Fade';

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Link from '@material-ui/core/Link';
import { Button, Typography, InputAdornment, Divider } from '@material-ui/core/';
import { TextField, CheckboxWithLabel } from 'formik-material-ui';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { WrapperTable, WrapperCol, WrapperCell } from '../Wrapper/Wrapper';

import { makeStyles } from '@material-ui/core/styles';
import { useModalForm } from '../../Context/ModalContext';

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Login = (props) => {

  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  const { modalState, setModalState } = useModalForm();
 
  const handleLoginClose = () => {
    setModalState({ type: "closeModal" });    
  };

  const handleShowSignUp = () => {
    handleLoginClose();
    setModalState({ type: "openRegisterForm" });
  }

  return (
      <> 
        <Fade in={modalState.stateModal}>
            <div className={classes.paper}>
                <div className='divCloseButton'>
                    <Button onclick={handleLoginClose} style={{padding:'0', minWidth: '0'}}>
                        <CloseIcon  />
                    </Button>
                </div>
                <div className='divMarginBottom'>
                    <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                        Log in to continue
                    </Typography>
                </div>
                {/* Server response */}
                <Formik
                    initialValues={{ email: '', password: '', rememberMe: 'false' }}
                    validationSchema={Yup.object({
                    email: Yup.string()
                        .email(props.texts.invalidEmail)
                        .required(props.texts.requiredEmail),
                    password: Yup.string()
                        .min(8, props.texts.invalidPassword)
                        .required(props.texts.passwordRequired),
                    })}
                    onSubmit={null}
                >
                    {({ isSubmitting }) => (
                    <Form autoComplete="off">
                        <Field
                            name="email"
                            placeholder={props.texts.user}
                            type="email"
                            component={TextField}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            InputProps={{
                                endAdornment: 
                                <InputAdornment position="end">
                                    <MailOutlineIcon/>
                                </InputAdornment>,
                            }}
                        />
                        <Field
                            name="password"
                            placeholder={props.texts.password}
                            type={showPassword ? 'text' : 'password'}
                            component={TextField}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LockOpenIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <WrapperTable fullWidth>
                            <WrapperCol align="left">
                                <Field
                                    component={CheckboxWithLabel}
                                    type="checkbox"
                                    checked={false}
                                    color="primary"
                                    Label={{ label: props.texts.rememberMe }}
                                />
                            </WrapperCol>
                            <WrapperCol align="right">
                                <Link
                                component="button"
                                type="button"
                                onClick={handleClickShowPassword}
                                variant="subtitle2"
                                style={{textDecoration:'none'}}
                                >
                                {showPassword ? props.texts.hidePassword : props.texts.showPassword}
                                </Link>
                            </WrapperCol>
                        </WrapperTable>
                        <div className='divSubtitle2'>
                            <Button
                                size="large"
                                variant="contained"
                                fullWidth
                                color="primary"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {props.texts.login}
                            </Button>
                        </div>
                        <div className='divSubtitle2' style={{ textAlign: 'center' }}>
                            <Link
                                type="button"
                                component="button"
                                onClick={null}
                                variant="subtitle2"
                                >
                                {props.texts.forgot}
                            </Link>
                        </div>
                    </Form>
                    )}
                </Formik>
                <Divider />
                <div className='divSubtitle2'>
                    <Button
                        size="large"
                        variant="contained"
                        fullWidth
                        color="secondary"
                        type="submit"
                    >
                        {props.texts.googleLogin}
                        <AccountCircleIcon style={{paddingLeft:'10px', paddingBottom:'1px'}}/>
                    </Button>
                </div>
                <Typography variant="body1" align="center" component="div">
                    <div className='spanMarginLogin'>
                        <span>{props.texts.askSignUp}</span>
                        <Link onClick={handleShowSignUp} style={{paddingLeft:'5px'}}>{props.texts.signUp}</Link>
                    </div>
                    <div style={{ marginTop: '24px', textAlign: 'center' }}>
                        <Link component="button" onClick={handleLoginClose} variant="subtitle2" style={{textDecoration:'none'}}>
                            <WrapperTable>
                                <WrapperCell style={{ paddingRight: '8px' }}>
                                    <ArrowBackIosIcon />
                                </WrapperCell>
                                <WrapperCell style={{paddingBottom:'5px'}}>
                                    {props.texts.back}
                                </WrapperCell>
                            </WrapperTable>
                        </Link>
                    </div>
                </Typography>
            </div>
        </Fade>
    </>
  );
};

export default Login