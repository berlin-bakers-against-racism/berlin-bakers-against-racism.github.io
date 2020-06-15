import React from "react";

import { Donor, Cart, Action, DonorAction, CartAction } from "./domain";
import { donorReducer, cartReducer } from "./reducers";

export type AppState = {
  donor: Donor,
  cart: Cart,
};

const initialState: AppState = {
  donor: {},
  cart: { items: [] },
};

const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

const reducer: (state: AppState, action: Action) => AppState = ({donor, cart}, action) => {
  console.log("reducer", action);
  return ({
    donor: donorReducer(donor, action as DonorAction),
    cart: cartReducer(cart, action as CartAction)
  });
}

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log("App Provider init");
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
