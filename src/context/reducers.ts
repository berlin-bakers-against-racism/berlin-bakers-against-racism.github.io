import { Donor, DonorAction, ActionType, Cart, CartAction } from "./domain"

export const donorReducer = (state: Donor, action: DonorAction) => {
  console.log("donor reducer", action);
  switch (action.type) {
    case ActionType.EmailAddress:
      return {
        emailAddress: action.emailAddress,
        ...state
      };
    default:
      return state;
  }
};

export const cartReducer = (state: Cart, action: CartAction) => {
  return state;
}
