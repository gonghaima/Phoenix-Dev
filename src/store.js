import React, { useReducer, createContext } from "react";
import reducer from "./reducer";
export const StoreContext = createContext({});

const initialState = { fruits: [], vegetables: [] };

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};
