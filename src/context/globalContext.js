import { createContext,useReducer } from "react";

export const GlobalContext = createContext();

const initialStateGlobal = {
    statusLogin : false,
    user : {}
}

const reducer  = (state,action) => {

    const {type,payload} = action;

    switch(type){
        case 'SIGNUP_SUCCESS' :
            return {
                statusLogin : true,
                user : payload
            }
        case 'LOGIN_SUCCESS' :
            return {
                statusLogin : true,
            };
        case 'LOGOUT' : 
            return {
                statusLogin : false,
                user : {}
            }
        default :
            throw new Error();
    }

};

export const GlobalContextProviders = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialStateGlobal);
  
    return (
      <GlobalContext.Provider value={[state, dispatch]}>
        {children}
      </GlobalContext.Provider>
    );
  };