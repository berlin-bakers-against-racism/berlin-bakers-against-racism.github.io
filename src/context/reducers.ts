import { Donor, DonorAction, ActionType, Cart, CartAction, BakedGoods, MenuAction, CartItem, FulfillmentOption, OrderAction, OrderStatus, OrderState, AppState, Validation } from "./domain"

export const donorReducer = (state: Donor, action: DonorAction) => {
  switch (action.type) {
    case ActionType.UpdateDonor:
      return {
        ...state,
        ...action.donor,
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
      let newItems = [...state.items];

      if (quantity > 0) {
        const matchedIdx = state.items.findIndex((cartItem) => cartItem.bakedGood.id === item.id);
        if (matchedIdx >= 0) {
          newItems[matchedIdx] = {...newItems[matchedIdx], quantity};
        } else if (quantity > 0) {
          newItems.push({bakedGood: item, quantity});
        }
      } else {
        newItems = newItems.filter(cartItem => cartItem.bakedGood.id !== item.id)
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

export const orderReducer = (state: OrderStatus, action: OrderAction): OrderStatus => {
  switch (action.type){
    case ActionType.PlaceOrder:
      return {
        ...state,
        currentStep: OrderState.Submitting,
        orderSuccess: false,
        orderError: undefined,
      };
    
      case ActionType.OrderPlaced:
        return {
          ...state,
          currentStep: OrderState.Submitted,
          orderSuccess: action.response === undefined || action.response.isSuccess,
          orderError: action.response?.message
        };        

    default:
      return state;
  }
};

export const validationReducer = ({donor, cart, validation}: AppState, action: OrderAction): Validation => {
  switch (action.type) {
    case ActionType.Validation:
      return {
        ...action.result
      };
    default:
      return validation;
  }
};
