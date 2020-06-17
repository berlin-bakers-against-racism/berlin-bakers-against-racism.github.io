import { Donor, Cart, OrderResponse, FulfillmentOption } from "../context/domain";

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
  fulfillment: FulfillmentOption,
  item1Id: string,
  item1Qty: number,
  item2Id: string,
  item2Qty: number,
  item3Id: string,
  item3Qty: number,
  item4Id: string,
  item4Qty: number,
  item5Id: string,
  item5Qty: number,
  totalAmountQuoted: number
};

export const submitOrder = async ({ donor, cart }: Order): Promise<OrderResponse> => {
  throw Error("The sale is over. Thank you!");
  
  const webAppUrl = "https://script.google.com/macros/s/AKfycbwv4qqUkmum0zL9WkOqNuv0A-ZeK5Fer1NVrIDD_w3wKhkOAVZ0/exec";

  try {
    const sheetOrder: Partial<SheetOrder> = {
      donorName: donor.fullName!!,
      donorEmailAddress: donor.emailAddress!!,
      donorPhoneNumber: donor.phoneNumber || "",
      donorAddress: cart.fulfillment === FulfillmentOption.DropOff ? donor.address!! : '',
      donorSpecialInstructions: donor.specialInstructions || "",
      fulfillment: cart.fulfillment,
      totalAmountQuoted: cart.totalAmount,
      // Set Qty to zero to make querying in the sheets that much easier.
      item1Qty: 0,
      item2Qty: 0,
      item3Qty: 0,
      item4Qty: 0,
      item5Qty: 0,
    };

    cart.items.reduce((order, item, index) => {
      const { bakedGood, quantity} = item;

      switch(index) {
        case 0:
          order.item1Qty = quantity;  
          order.item1Id = bakedGood.id;
          break;
          
          case 1: 
          order.item2Qty = quantity;  
          order.item2Id = bakedGood.id;
          break;
          
          case 2: 
          order.item3Qty = quantity;  
          order.item3Id = bakedGood.id;
          break;
          
          case 3: 
          order.item4Qty = quantity;  
          order.item4Id = bakedGood.id;
          break;
          
          case 4: 
          order.item5Qty = quantity;  
          order.item5Id = bakedGood.id;
          break;
      }
      return order;
    }, sheetOrder);
    
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
      message: "Submitted!",
    };
  } catch (e) {
    return {
      isSuccess: false,
      message: e.message,
    };
  }
};