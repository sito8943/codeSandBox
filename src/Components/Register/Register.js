import React, { useState } from "react";

import "./Register.css";

import Fade from "@material-ui/core/Fade";

import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Link from "@material-ui/core/Link";
import {
  Button,
  Typography,
  InputAdornment,
  Divider,
} from "@material-ui/core/";
import { TextField } from "formik-material-ui";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { WrapperTable, WrapperCol, WrapperCell } from "../Wrapper/Wrapper";

import { makeStyles } from "@material-ui/core/styles";
import { useModalForm } from "../../Context/ModalContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
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

  const handleRegisterClose = () => {
    setModalState({ type: "closeModal" });
  };

  const handleShowLogin = () => {
    handleRegisterClose();
    setModalState({ type: "openLoginForm" });
  }

  return (
    <>
      <Fade in={modalState.stateModal}>
          <div className={classes.paper}>
            <div className="divCloseButton">
              <Button
                onclick={handleRegisterClose}
                style={{ padding: "0", minWidth: "0" }}
              >
                <CloseIcon />
              </Button>
            </div>
            
            <div className="divMarginBottom">
              <Typography variant="h5" style={{ fontWeight: "bold" }}>
                {props.texts.title}
              </Typography>
            </div>
            <Divider />
            {/* Server response */}
            <Formik
              initialValues={{ email: "", password: "", rememberMe: "false" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(props.texts.invalidEmail)
                  .required(props.texts.requiredField),
                fname: Yup.string().required(props.texts.requiredField),
                lname: Yup.string().required(props.texts.requiredField),
                password: Yup.string()
                  .min(8, props.texts.invalidPassword)
                  .required(props.texts.passwordField),
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
                      endAdornment: (
                        <InputAdornment position="end">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="fname"
                    placeholder={props.texts.fname}
                    type="text"
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="lname"
                    placeholder={props.texts.lname}
                    type="text"
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Field
                    name="password"
                    placeholder={props.texts.password}
                    type={"password"}
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
                  <div className="divSubtitle2">
                  <WrapperTable fullWidth>
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
                  </div>
                  <div className="divSubtitle2">
                    <Button
                      size="large"
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {props.texts.signUp}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <Divider />
            <div className="divSubtitle2">
              <Button
                size="large"
                variant="contained"
                fullWidth
                color="secondary"
                type="submit"
              >
                {props.texts.googleSignup}
                <AccountCircleIcon
                  style={{ paddingLeft: "10px", paddingBottom: "1px" }}
                />
              </Button>
            </div>
            <Typography variant="body1" align="center" component="div">
              <div className="spanMarginLogin">
                <span>{props.texts.askLogin}</span>
                <Link onClick={handleShowLogin} style={{ paddingLeft: "5px" }}>
                  {props.texts.login}
                </Link>
              </div>
              <div style={{ marginTop: "24px", textAlign: "center" }}>
                <Link
                  component="button"
                  onClick={handleRegisterClose}
                  variant="subtitle2"
                  style={{ textDecoration: "none" }}
                >
                  <WrapperTable>
                    <WrapperCell style={{ paddingRight: "8px" }}>
                      <ArrowBackIosIcon />
                    </WrapperCell>
                    <WrapperCell style={{ paddingBottom: "5px" }}>
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

export default Login;
