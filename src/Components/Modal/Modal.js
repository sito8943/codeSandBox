import React from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { makeStyles } from '@material-ui/core/styles';

import { useModalForm } from '../../Context/ModalContext';

import Login from '../Login/Login'
import Register from '../Register/Register'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));


const TbModal = (props) => {

    const classes = useStyles();

    const { modalState, setModalState } = useModalForm();

    const handleModalClose = () => {
        setModalState({ type: "closeModal" });    
    };

    return (
        <>
            <Modal
                className={classes.modal}
                open={modalState.stateModal}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                >
                {
                    modalState.stateForm === 1 ?
                    <Login texts = {props.texts.Login} />
                    :
                    <Register texts = {props.texts.Register} />
                }
            </Modal>
        </>
    )

}

export default TbModal