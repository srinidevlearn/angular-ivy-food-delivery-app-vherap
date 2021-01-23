import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dishType"
})
export class DishTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.toLowerCase() == "northindian") return "North Indian";
    if (value.toLowerCase() == "southindian") return "South Indian";
    return value;
  }
}
