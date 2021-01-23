import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { foodsImages } from "../dynamic-assets";

@Injectable()
export class CartService {
  cart = new BehaviorSubject({});
  foodsImages: any;
  constructor() {
    this.foodsImages = foodsImages;
  }

  upsertCart(item) {
    let cart = this.cart.value;
    let key = item.id;
    let temp = {};
    temp[key] = item;
    let data = { ...cart, ...temp };

    this.cart.next(this.sanitizeZeroCartData(data));
  }

  getCartDetails() {
    return this.cart.asObservable();
  }

  sanitizeZeroCartData(data) {
    let temp = {};
    Object.values(data).map((item: any) => {
      if (item.COUNT > 0) {
        temp[item.ID] = item;
      }
    });
    return temp;
  }
}
