// React
import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer();

  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
