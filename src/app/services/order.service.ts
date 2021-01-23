import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {
  orders = [];

  orderdata = [
    {
      id: 1,
      NAME: "Dosa",
      TYPE: "Veg",
      CUISINE: "SouthIndian",
      AVAILABILITY: ["BREAKFAST", "LUNCH"],
      PRICE: "50",
      TIME: new Date().getTime()
    }
  ];
  constructor(public cart: CartService) {}
  orderPlace(data) {
    this.orders = [];
    console.log(data);

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      item["timestamp"] = new Date().getTime();
      this.orders.push(item);

      if (i == data.length) {
        this.cart.upsertCart({});
      }
    }
  }
}
