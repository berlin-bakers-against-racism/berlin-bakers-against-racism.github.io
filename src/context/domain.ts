export type Donor = {
  fullName?: string,
  emailAddress?: string,
  phoneNumber?: string,
  address?: string,
  specialInstructions?: string
};

export type CartItem = {
  bakedGood: BakedGood,
  quantity: number
}

export enum FulfillmentOption {
  Pickup = "PICKUP",
  DropOff = "DROP_OFF",
  None = ""
}
export type Cart = {
  items: CartItem[]
  fulfillment: FulfillmentOption,
  deliveryFee: number,
  totalAmount: number,
}

export type BakedGood = {
  id: string,
  name: string,
  description?: string,
  price?: number,
  maxAmount?: number,
  reservedCount?: number,
  countRemaining?: number,
  isAvailable: boolean
};

export type BakedGoods = {
  items: BakedGood[],
};

export type OrderResponse = {
  isSuccess: boolean,
  message?: string
};

export enum ActionType {
  EmailAddress = 'EMAIL_ADDRESS',
  ChangeItemQuantity = "CHANGE_ITEM_QUANTITY",
  ChooseFulfillment = "CHOOSE_FULFILLMENT",
  UpdateMenu = 'UPDATE_MENU',
};

export type CartAction =
  | { type: ActionType.ChangeItemQuantity, item: BakedGood, quantity: number }
  | { type: ActionType.ChooseFulfillment, option: FulfillmentOption };

export type DonorAction = { type: ActionType.EmailAddress, emailAddress: string };

export type MenuAction = { type: ActionType.UpdateMenu, menu: BakedGoods };

export type Action =
  | CartAction
  | DonorAction
  | MenuAction;