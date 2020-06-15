import { Donor, Cart, OrderResponse } from "../context/domain";

type Order = {
  donor: Donor,
  cart: Cart
}

type SheetOrder = {
  donorName: string,
  donorEmailAddress: string,
  donorPhoneNumber: string,
  donorAddress: string,
  donorSpecialInstructions: string,
  item1Id: string,
  item1Qty: number,
  item2Id: string,
  item2Qty: number,
  item3Id: string,
  item3Qty: number,
};

export const submitOrder = async ({ donor, cart }: Order): Promise<OrderResponse> => {
  const webAppUrl = "https://script.google.com/macros/s/AKfycbwv4qqUkmum0zL9WkOqNuv0A-ZeK5Fer1NVrIDD_w3wKhkOAVZ0/exec";

  try {
    const sheetOrder: Partial<SheetOrder> = {
      donorName: donor.fullName!!,
      donorEmailAddress: donor.emailAddress!!,
      donorPhoneNumber: donor.phoneNumber ?? "",
      donorAddress: donor.address!!,
      donorSpecialInstructions: donor.specialInstructions ?? "",
    };

    sheetOrder.item1Id = cart.items[0].bakedGood.id;
    sheetOrder.item1Qty = cart.items[0].quantity;

    const response = await fetch(webAppUrl,
      {
        method: "POST",
        headers: {
          'Content-Type': 'text/plain'
        },
        mode: "no-cors",
        redirect: "follow",
        body: JSON.stringify(sheetOrder),
    });
    return {
      isSuccess: true,
      message: "Submitted!"
    };
  } catch (e) {
    return {
      isSuccess: false,
      message: e.message
    };
  }
};