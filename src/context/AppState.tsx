import React, { ReactNode } from "react";

export type AppState = {
  theme: string
};

const initialState: AppState = {
  theme: "light",
};

const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});

function reducer(state: any, action: { type: string, payload?: any }) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      }
    }
    default:
      throw new Error("Bad Action Type")
  }
};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
