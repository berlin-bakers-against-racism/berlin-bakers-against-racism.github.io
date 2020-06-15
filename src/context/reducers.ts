
export enum ActionType {
  EmailAddress = 'EMAIL_ADDRESS',
  AddItem = 'ADD_ITEM',
  RemoveItem = 'REMOVE_ITEM',
  ChangeItemQuantity = "CHANGE_ITEM_QUANTITY",
  UpdateMenu = 'UPDATE_MENU',
};

type DonorActions =
  | { type: ActionType.EmailAddress, emailAddress: string };

type Action =
  | { type: ActionType.AddItem, item: any }
  | { type: ActionType.RemoveItem, item: any }
  | { type: ActionType.ChangeItemQuantity, item: any, quantity: number }
  | { type: ActionType.UpdateMenu };

type Donor = {
  emailAddress?: string,
};

export const donorReducer = (state: Donor, action: DonorActions) => {
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
