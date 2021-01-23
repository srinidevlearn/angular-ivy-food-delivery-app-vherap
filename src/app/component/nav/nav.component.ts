import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { empty, from, pairs, Subscription } from "rxjs";
import { catchError, map, reduce, scan } from "rxjs/operators";
import { CartService } from "../../services/cart.service";
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit, OnDestroy {
  routerActive: string = "";
  sub: Subscription;
  constructor(public router: Router, public cartState: CartService) {}
  cartCount: number = 0;
  ngOnInit() {
    this.sub = this.cartState
      .getCartDetails()
      .pipe(map(item => Object.values(item).map((item: any) => item.COUNT)))
      .subscribe(item => {
        if (item.length) {
          this.cartCount = item.reduce(
            (accumulator, currentValue) => accumulator + currentValue
          );
        } else {
          this.cartCount = 0;
        }
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
