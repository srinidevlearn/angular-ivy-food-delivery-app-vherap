import { Component, OnInit, OnDestroy } from "@angular/core";
import { delay } from "rxjs/operators";
import { Product } from "../../interfaces";
import { ApiService } from "../../services/api.service";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit, OnDestroy {
  categorizedFood: any = [];
  hotelSingle: any = "";
  foodsMenu: Array<Product> = [];
  loader: boolean = true;
  subscription_1: any;
  hotelBasedFood: any = [];
  items: any;

  constructor(public api: ApiService, public cart: CartService) {}

  ngOnInit() {
    this.subscription_1 = this.api
      .getMenus()
      .pipe(delay(0.75 * 1000))
      .subscribe((foods: any) => {
        this.foodsMenu = foods.map((item: any) => {
          let k = item["NAME"].toLowerCase();
          item.image = this.cart.foodsImages[k];
          return item;
        });
        this.loader = false;
      });
  }
  ngOnDestroy() {
    this.subscription_1.unsubscribe();
  }

  captureSelectedFood(e) {
    let currentFood = this.foodsMenu.find((food: any) => {
      if (food.id == e.ID) return food;
    });
    let data = { ...e, ...currentFood };

    this.cart.upsertCart(data);
  }
}
