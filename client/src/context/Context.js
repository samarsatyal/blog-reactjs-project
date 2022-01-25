import React, { createContext, useEffect, useReducer } from "react";
import loginReducer from "./Reducer";

//The initial state before a user logs into the site
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

//this will let other components to get the initial state
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

  //In order to use 'Application' tab (in Chrome Dev tools) to store user informations
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}; //children = every other components that will use this state
