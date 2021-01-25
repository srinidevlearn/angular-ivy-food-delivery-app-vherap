import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  orders = [];
  cache = [];

  constructor(public order: OrderService) {}

  ngOnInit() {
    this.orders = this.order.orders;
    this.cache = [...this.orders];
  }

  filterFood(e: any) {
    let input = e.target.value;
    if (input) {
      let o: any = [...this.orders];
      o = o.filter(item => {
        console.log(item, input);
        if (item.NAME != undefined) {
          if (input.toLowerCase().includes(item.NAME.toLowerCase())) {
            return item;
          }
        }
      });

      this.orders = [...o];
    }
  }

  simpledataFilter(ip: any) {
    let ip2 = ip.target.value;
    if (ip2) {
      let o = this.orders.filter((item, ind: number, arr: any) => {
        if (ip2.toLowerCase() == item.TYPE.toLowerCase()) {
          return item;
        }
      });
      this.orders = [...o];
    }
  }
}
