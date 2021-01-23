import { Injectable } from "@angular/core";
import { CartService } from "./cart.service";

@Injectable()
export class OrderService {
  orders = [];
  constructor(public cart: CartService) {}
  orderPlace(data) {
    this.orders = [];

    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      item["timestamp"] = new Date().getTime();
      this.orders.push(item);

      if(i == data.length){
        this.cart.upsertCart([]);
      }
    }
  }
}
