import { Donor, DonorAction, ActionType, Cart, CartAction, BakedGoods, MenuAction, CartItem } from "./domain"

export const donorReducer = (state: Donor, action: DonorAction) => {
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

export const cartReducer = (state: Cart, action: CartAction): Cart => {
  switch(action.type) {
    case ActionType.ChangeItemQuantity:
      const { item, quantity } = action;
      const newItems = [...state.items];

      const matchedIdx = state.items.findIndex((cartItem) => cartItem.bakedGood.id === item.id);
      if (matchedIdx >= 0) {
        newItems[matchedIdx] = {...newItems[matchedIdx], quantity};
      } else {
        newItems.push({bakedGood: item, quantity});
      }

      const totalAmount = newItems.reduce((total, item) => total += item.bakedGood.price!! * item.quantity, 0);

      console.log(`New total is ${totalAmount}`);
      return {
        items: newItems,
        totalAmount,
      };

    default:
      return state;
  }
}

export const menuReducer = (state: BakedGoods, action: MenuAction) => {
  switch (action.type) {
    case ActionType.UpdateMenu:
      return {
        ...state,
        ...action.menu
      }
    default:
      return state;
  }
}