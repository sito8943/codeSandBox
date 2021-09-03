import React from "react";
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

import SearchIcon from "@material-ui/icons/Search";
import AppLogo from "../../app_logo.png";

import { Link } from "react-router-dom";

import { useModalForm } from '../../Context/ModalContext';

import './NavDrawer.css'

export default function NavDrawer(props) {
    const { modalState, setModalState } = useModalForm();
  
    const toggleDrawer = (open) => (event) => {

        if ((event.type === 'click' && (event.target.id === 'searchInput')) || (event.type === 'keydown' && event.key !== 'Escape')) {
            return;
        }

        if (open)
            setModalState({type: 'openNavDrawer'});
        else
            setModalState({type: 'closeNavDrawer'});
    };
  
    return (
      <div>
        <React.Fragment>
            <Drawer anchor={'left'} open={modalState.navDrawer} onClose={toggleDrawer(false)}>
            <div className='drawer'
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                >
                <List>
                    <ListItem button>
                        <Link to="/" style={{margin:'auto'}}>
                            <img className="drawer__icon" src={AppLogo} alt="" />
                        </Link>
                    </ListItem>
                    <ListItem style={{border: '1px solid lightgray', borderRadius: '999px', margin: 'auto', marginBottom: '10px', width: '250px'}}>
                        <input id='searchInput' type="text" placeholder={props.texts.searchPlaceholder} />
                        <SearchIcon />
                    </ListItem>
                    <ListItem button>
                        <Link className='linka' to='/' style={{textDecoration:'none'}}>
                            <ListItemText primary={props.texts.homeLink} />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link className='linka' to='/search' style={{textDecoration:'none'}}>
                            <ListItemText primary={props.texts.searchLink} />
                        </Link>
                    </ListItem>
                </List>
            </div>
            </Drawer>
          </React.Fragment>
      </div>
    );
  }