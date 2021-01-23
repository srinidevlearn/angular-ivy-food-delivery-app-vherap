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
  }

  simpledataFilter(ip: any) {
    this.cache = [...this.orders];
    let ip2 = ip.target.value;

    if (ip2) {
      let o = this.orders.filter(item => {
        if (ip2.toLowerCase() == item.TYPE.toLowerCase()) return item;
      });
      console.log(o);
      this.orders = [];
    } else {
      this.orders = [...this.cache];
    }
  }
}
