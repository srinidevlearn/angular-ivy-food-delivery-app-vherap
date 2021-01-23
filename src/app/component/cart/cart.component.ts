import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit, OnDestroy {
  sub: Subscription;
  cartPage: any = [];
  total = 0;
  constructor(public cart: CartService) {}

  ngOnInit() {
    this.sub = this.cart
      .getCartDetails()
      .pipe()
      .subscribe(cart => {
        this.cartPage = Object.values(cart);

        this.total = this.cartPage
          .map((i: any) => i.PRICE * i.COUNT)
          .reduce((a, v) => a + v, 0);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
