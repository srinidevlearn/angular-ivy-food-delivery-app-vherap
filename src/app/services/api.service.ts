import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  distinct,
  groupBy,
  map,
  mergeMap,
  pluck,
  take,
  toArray
} from "rxjs/operators";
import { Menu } from "../interfaces";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  baseUrl: string = `api/`;
  constructor(public http: HttpClient) {}

  getMenus() {
    return this.http.get<Menu>(this.baseUrl + "food");
  }
}
