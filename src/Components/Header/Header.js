import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import AppLogo from "../../app_logo.png";
import LoginMenu from "../UserMenu/LoginMenu";

import { useModalForm } from '../../Context/ModalContext';
import Button from '@material-ui/core/Button';

import NavDrawer from '../NavDrawer/NavDrawer'

import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from '@material-ui/icons/Menu';

const Header = (props) => {

  const { modalState, setModalState } = useModalForm();
  const handleNavDrawer = () => {
    setModalState({type: 'openNavDrawer'});
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={AppLogo} alt="" />
      </Link>

      <div className="header__center responsive">
        <input type="text" placeholder={props.texts.searchPlaceholder} />
        <SearchIcon />
      </div>

      <div style={{flex:'1'}}>

      </div>
            
      <div className="header__right">
        <ul className='responsive'>
          <li>
            <Link to='/' style={{textDecoration:"none"}}>
              {props.texts.homeLink}
            </Link>
            </li>
          <li>
            <Link to='/search' style={{textDecoration:"none"}}>
              {props.texts.searchLink}
            </Link>
          </li>
          <li></li>
        </ul>
        <div className='drawerButton'>
          <Button onClick={handleNavDrawer}><MenuIcon/></Button>
        </div>
        <NavDrawer texts = {props.texts} />
        <LoginMenu />
      </div>
      <div className='ma-right'>

      </div>
    </div>
  );
};

export default Header;
