import React, {createContext, useContext, useReducer } from 'react';

//prepare Data Layer
export const StateContext = createContext();

//Wrap our app and provide data all over the app
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pull Information from the data Layer
export const useStateValue = () => useContext(StateContext);