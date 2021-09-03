import * as React from 'react'

const UserLogin = React.createContext()

const userReducer=(state, action) => {
  switch (action.type) {
    case 'Login': {
      return {logged: true}
    }
    case 'Logout': {
      return {logged: false}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UserLoginProvider=({children})=>{
  const [state, dispatch] = React.useReducer(userReducer, {logged: false})

  // TODO OPTIMIZE CONTEXT
  // NOTE: you *might* need to memoize this value  
  // Learn more in http://kcd.im/optimize-context


  const value = {state, dispatch}
  return <UserLogin.Provider value={value}>{children}</UserLogin.Provider>
}

//Hooks
const useUserLogin=()=>{
  const context = React.useContext(UserLogin)
  if (context === undefined) {
    throw new Error('useUserState must be used within a Provider')
  }
  return context
}
export {UserLoginProvider , useUserLogin}