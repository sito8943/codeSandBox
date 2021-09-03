import React, { useState } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Fade,
  Avatar,
  Typography,
} from "@material-ui/core";

import { useUserLogin } from "../../Context/UserLogin";
import { useModalForm } from "../../Context/ModalContext";

const LoginMenu = () => {
  const { state, dispatch } = useUserLogin();
  const {setModalState } = useModalForm();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onUserLogout = (e) => {
    setAnchorEl(null);
    dispatch({ type: "Logout" });
  };

  const onUserLogin = (e) => {
    setAnchorEl(null);
   /* dispatch({
      type: "Login",
    }); /*TODO este codigo se ejecutara cuando foirebase determine que el usuario se ha logueado...no aqui*/
    setModalState({ type: "openLoginForm" });
  };

  const handleUserSignUp=(e)=>{
    setModalState({ type: "openRegisterForm" });
    handleClose()
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="fade-logged-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Avatar />
      </IconButton>
      <Menu
        id="fade-logged-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {!state.logged && (
          <MenuItem onClick={onUserLogin}>
            <Typography variant="inherit" noWrap>
              Login
            </Typography>
          </MenuItem>
        )}

        <MenuItem onClick={handleUserSignUp}>
          <Typography variant="inherit" noWrap>
            Create Account
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="inherit" noWrap>
            Help
          </Typography>
        </MenuItem>
        {state.logged && (
          <MenuItem onClick={onUserLogout}>
            <Typography variant="inherit" noWrap>
              Logout
            </Typography>
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default LoginMenu;
