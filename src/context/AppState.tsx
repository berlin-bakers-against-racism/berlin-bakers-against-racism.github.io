import React from "react";
import Papa from "papaparse";

import { AppState, Action, DonorAction, CartAction, ActionType, BakedGoods, MenuAction, FulfillmentOption, OrderState, OrderAction } from "./domain";
import { donorReducer, cartReducer, menuReducer, orderReducer } from "./reducers";

const initialState: AppState = {
  donor: {},
  cart: { items: [], fulfillment: FulfillmentOption.None, deliveryFee: 0, totalAmount: 0 },
  menu: { items: [] },
  status: { orderSuccess: false, currentStep: OrderState.None }
};

const AppContext = React.createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

const reducer: (state: AppState, action: Action) => AppState = ({ donor, cart, menu, status}, action) => {
  return ({
    donor: donorReducer(donor, action as DonorAction),
    cart: cartReducer(cart, action as CartAction),
    menu: menuReducer(menu, action as MenuAction),
    status: orderReducer(status, action as OrderAction),
  });
}

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQYgNbdw-Xi06OVEpuXZ4T9aBWZVzRV3yIq1tTgybXlaPMkDrVm8etZXw7yXD3QzHo5y1Fv2tUAZ40d/pub?gid=1261232964&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: ({ data }) => {
          const menu: BakedGoods = {
             items: data as any,
          };
          dispatch({ type: ActionType.UpdateMenu, menu})
        }
      });
  }, []);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
