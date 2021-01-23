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
    },
    {
      id: 2,
      NAME: "Idli",
      TYPE: "Veg",
      CUISINE: "SouthIndian",
      AVAILABILITY: ["BREAKFAST", "LUNCH"],
      PRICE: "50",
      TIME: new Date().getTime()
    },
    {
      id: 3,
      NAME: "Puri",
      TYPE: "Veg",
      CUISINE: "NortIndian",
      AVAILABILITY: ["BREAKFAST", "LUNCH"],
      PRICE: "50",
      TIME: new Date().getTime()
    },
    {
      id: 4,
      NAME: "Salad",
      TYPE: "Veg",
      CUISINE: "Italian",
      AVAILABILITY: ["BREAKFAST", "LUNCH"],
      PRICE: "140",
      TIME: new Date().getTime()
    }
  ];
  constructor(public cart: CartService) {
    this.orders = this.orderdata;
  }
  orderPlace(data) {
    this.orders = this.orderdata;

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      item["TIME"] = new Date().getTime();
      this.orders.push(item);

      if (i == data.length) {
        this.cart.upsertCart({});
      }
    }
  }
}
