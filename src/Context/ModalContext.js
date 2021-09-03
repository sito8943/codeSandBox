import * as React from "react";

const ModalForm = React.createContext();

const modalReducer = (modalState, action) => {
  switch (action.type) {
    case "openLoginForm": {
      return { stateForm: 1, stateModal: true };
    }
    case "closeModal": {
      return { stateModal: false};
    }
    case "openRegisterForm": {
      return { stateForm: 2, stateModal: true };
    }
    case "openNavDrawer": {
      return { navDrawer: true }
    }
    case "closeNavDrawer": {
      return { navDrawer: false }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ModalFormProvider = ({ children }) => {
  const [modalState, setModalState] = React.useReducer(modalReducer, {
    stateModal: false, //false is close and true is open
    stateForm: 1, //1 => login 2 => register
    navDrawer: false, //false is close and true is open
  });

  // TODO OPTIMIZE CONTEXT
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context

  const value = { modalState, setModalState };
  return <ModalForm.Provider value={value}>{children}</ModalForm.Provider>;
};

//Hooks
const useModalForm = () => {
  const context = React.useContext(ModalForm);
  if (context === undefined) {
    throw new Error("useModalState must be used within a Provider");
  }
  return context;
};
export { ModalFormProvider, useModalForm };
