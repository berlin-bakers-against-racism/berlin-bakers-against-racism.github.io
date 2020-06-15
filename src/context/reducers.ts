import { Donor, DonorAction, ActionType, Cart, CartAction, BakedGoods, MenuAction, CartItem, FulfillmentOption } from "./domain"

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

const calculateTotalAmount = (items: CartItem[], deliveryFee: number) =>
  items.reduce((total, item) => total += item.bakedGood.price!! * item.quantity, deliveryFee);

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

      return {
        ...state,
        items: newItems,
        totalAmount: calculateTotalAmount(newItems, state.deliveryFee),
      };
    
      case ActionType.ChooseFulfillment:
        let deliveryFee = 0;
        if (action.option === FulfillmentOption.DropOff) {
          deliveryFee = 5;
        }

        return {
          ...state,
          fulfillment: action.option,
          deliveryFee,
          totalAmount: calculateTotalAmount(state.items, deliveryFee),
        }

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