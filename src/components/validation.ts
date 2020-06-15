import { Donor, Cart, FulfillmentOption, Validation } from "../context/domain";

type ErrorContext = {
  donor: Donor,
  cart: Cart,
  validation: Validation,
};

const validateName = ({ donor, validation }: ErrorContext) => {
  const { donorErrors } = validation;
  if (!donor.fullName) {
    donorErrors.fullName = 'Required';
    validation.hasError = true;
  } else if (donor.fullName?.length > 20) {
    donorErrors.fullName = 'Name is too long';
    validation.hasError = true;
  }
};

const validateEmail = ({ donor, validation }: ErrorContext) => {
  const { donorErrors } = validation;
  if (!donor.emailAddress) {
    donorErrors.emailAddress = 'Required';
    validation.hasError = true;
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(donor.emailAddress)
  ) {
    donorErrors.emailAddress = 'Invalid email address';
    validation.hasError = true;
  } else if (donor.emailAddress?.length > 200) {
    donorErrors.emailAddress = 'Invalid email address';
    validation.hasError = true;
  }
};

const validateAddress = ({ donor, cart, validation }: ErrorContext) => {
  if (cart.fulfillment === FulfillmentOption.DropOff) {
    const { donorErrors } = validation;
    if (!donor.address) {
      donorErrors.address = 'Required';
      validation.hasError = true;
    } else if (donor.address?.length > 300) {
      donorErrors.address = 'Address is too long';
      validation.hasError = true;
    }
  }
};

const validateCart = ({ cart, validation }: ErrorContext) => {
  if (cart.items.length == 0) {
    validation.generalErrors.push("Your cart is empty.")
    validation.hasError = true;
  }

  if (cart.items.length > 5) {
    validation.generalErrors.push("Sorry, only a maximum of 5 different products may be ordered.");
    validation.hasError = true;
  }

  cart.items.forEach(item => {
    if (!item.bakedGood.countRemaining || item.bakedGood.countRemaining < item.quantity) {
      validation.generalErrors.push(`We're sorry, but we're unable to make enough '${item.bakedGood.name}' for your request. Please reduce the quanitity to the available amount to continue.`);
      validation.hasError = true;
    }
  });

  if (cart.fulfillment === FulfillmentOption.None) {
    validation.generalErrors.push(`Please select either pick-up or delivery to receive your items.`)
    validation.hasError = true;
  }
}

const validate = ({ donor, cart }: { donor: Donor, cart: Cart }) => {
  const context: ErrorContext = {
    donor,
    cart,
    validation: {
      hasError: false,
      donorErrors: {
        emailAddress: "",
        fullName: "",
        phoneNumber: "",
        address: "",
        specialInstructions: "",
      },
      generalErrors: []
    }
  }

  validateName(context);
  validateEmail(context);
  validateAddress(context);
  validateCart(context);

  return context.validation;
};

export const validateDonor = (donor: Donor) => {
  const context: ErrorContext = {
    donor,
    cart: {} as any,
    validation: {
      hasError: false,
      donorErrors: {
        emailAddress: "",
        fullName: "",
        phoneNumber: "",
        address: "",
        specialInstructions: "",
      },
      generalErrors: []
    }
  }
  validateName(context);
  validateEmail(context);
  validateAddress(context);
  return context.validation.donorErrors;
}

export default validate;