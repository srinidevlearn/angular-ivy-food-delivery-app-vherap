import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent implements OnInit {
  orders = [];
  constructor(public order: OrderService) {}

  ngOnInit() {
    this.orders = this.order.orders;
  }
}
