import { Donor, AppState, Cart, FulfillmentOption } from "../context/domain";

type ErrorContext = {
  donor: Donor,
  cart: Cart,
  errors: Partial<Donor>,
  generalErrors: string[]
};

const validateName = ({ donor, errors }: ErrorContext) => {
  if (!donor.fullName) {
    errors.fullName = 'Required';
  } else if (donor.fullName?.length > 20) {
    errors.fullName = 'Name is too long';
  }
};

const validateEmail = ({ donor, errors }: ErrorContext) => {
  if (!donor.emailAddress) {
    errors.emailAddress = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(donor.emailAddress)
  ) {
    errors.emailAddress = 'Invalid email address';
  } else if (donor.emailAddress?.length > 200) {
    errors.emailAddress = 'Invalid email address';
  }
};

const validateAddress = ({ donor, cart, errors }: ErrorContext) => {
  if (cart.fulfillment === FulfillmentOption.DropOff) {
    if (!donor.address) {
      errors.address = 'Required';
    } else if (donor.address?.length > 300) {
      errors.address = 'Address is too long';
    }
  }
};

const validateCart = ({ cart, generalErrors }: ErrorContext) => {
  if (cart.items.length == 0) {
    generalErrors.push("Your cart is empty.")
  }

  if (cart.items.length > 5) {
    generalErrors.push("Sorry, only a maximum of 5 different products may be ordered.");
  }

  cart.items.forEach(item => {
    if (!item.bakedGood.countRemaining || item.bakedGood.countRemaining < item.quantity) {
      generalErrors.push(`We're sorry, but we're unable to make enough '${item.bakedGood.name}' for your request. Please reduce the quanitity to the available amount to continue.`);
    }
  });

  if (cart.fulfillment === FulfillmentOption.None) {
    generalErrors.push(`Please select either pick-up or delivery to receive your items.`)
  }
}

const validate = ({ donor, cart }: {donor: Donor, cart: Cart}) => {
  const context: ErrorContext = {
    donor,
    cart,
    errors: {},
    generalErrors: []
  }

  validateName(context);
  validateEmail(context);
  validateAddress(context);
  validateCart(context);

  return context.errors;
};

export default validate;