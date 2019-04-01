import React, { createContext, useReducer, useContext } from "react";

import { userInitialState, userActions } from "./userActions";
//import { countInitialState, countActions } from "./countActions";

// combine initial states
const initialState = {
  ...userInitialState,
  //...countInitialState
};

const StoreContext = createContext(initialState);

// combine actions
const Actions = {
  ...userActions,
  //...countActions
};

const reducer = (state, action) => {
  const act = Actions[action.type];
  const update = act(state, action.payload);
  return { ...state, ...update };
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = store => {
  const { state, dispatch } = useContext(StoreContext);
  return { state, dispatch };
};
