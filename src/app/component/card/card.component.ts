import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from "@angular/core";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";
import { Menu, ProductAction } from "../../interfaces";
import { CartService } from "../../services/cart.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() foodData;
  @Output() selectionEmit = new EventEmitter();
  defaultData: number = 0;
  sub: Subscription;

  constructor(public cart: CartService) {}

  ngOnInit() {
    this.cart
      .getCartDetails()
      .pipe(map(i => Object.values(i)))
      .subscribe(data => {
        // console.log(data, this.foodData);
        if (data.length) {
          let data2: any = data.find((item: any) => {
            if (item.ID === this.foodData.id) {
              this.defaultData = item.COUNT;
            }
          });
        } else {
          this.defaultData = 0;
        }
      });
  }

  ngOnDestroy() {}
  increment(id: number) {
    this.defaultData++;
    this.defaultData = this.defaultData <= 5 ? this.defaultData : 5;
    this.emitData({
      ID: id,
      COUNT: this.defaultData
    });
  }
  decrement(id: number) {
    this.defaultData--;
    this.defaultData = this.defaultData < 0 ? 0 : this.defaultData;

    this.emitData({
      ID: id,
      COUNT: this.defaultData
    });
  }

  emitData(data: ProductAction) {
    return this.selectionEmit.emit(data);
  }
}
