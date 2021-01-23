import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ApiService } from "./services/api.service";
import { DummyDataService } from "./services/dummy-data.service";
import { MenuComponent } from "./component/menu/menu.component";
import { CartComponent } from "./component/cart/cart.component";
import { OrderComponent } from "./component/order/order.component";
import { NavComponent } from "./component/nav/nav.component";
import { CardComponent } from "./component/card/card.component";
import { HomeComponent } from "./component/home/home.component";
import { LoaderComponent } from "./component/loader/loader.component";
import { DishTypePipe } from "./pipes/dish-type.pipe";
import { CartService } from "./services/cart.service";
import { PricePipe } from './pipes/price.pipe';

const routes = [
  { path: "menu", component: MenuComponent },
  { path: "home", component: HomeComponent },
  { path: "order", component: OrderComponent },
  { path: "cart", component: CartComponent },
  { path: "", redirectTo: "/menu", pathMatch: "full" }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    RouterModule.forRoot(routes),

    HttpClientInMemoryWebApiModule.forRoot(DummyDataService)
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    CartComponent,
    OrderComponent,
    NavComponent,
    CardComponent,
    HomeComponent,
    LoaderComponent,
    DishTypePipe,
    PricePipe
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, CartService]
})
export class AppModule {}
