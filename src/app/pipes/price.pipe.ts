import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "price"
})
export class PricePipe implements PipeTransform {
  transform(price: any, count?: any): any {
    if (count) {
      return parseInt(price) * parseInt(count);
    }
    return price;
  }
}
