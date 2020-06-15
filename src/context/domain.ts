export type Donor = {
  emailAddress?: string,
};

export type Cart = {
  items: any[]
}

export enum ActionType {
  EmailAddress = 'EMAIL_ADDRESS',
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  ChangeItemQuantity = "CHANGE_ITEM_QUANTITY",
  UpdateMenu = 'UPDATE_MENU',
};

export type CartAction =
  | { type: ActionType.AddItem, item: any }
  | { type: ActionType.RemoveItem, item: any }
  | { type: ActionType.ChangeItemQuantity, item: any, quantity: number };

export type DonorAction =
  | { type: ActionType.EmailAddress, emailAddress: string };

export type Action =
  | CartAction
  | DonorAction
  | { type: ActionType.UpdateMenu };