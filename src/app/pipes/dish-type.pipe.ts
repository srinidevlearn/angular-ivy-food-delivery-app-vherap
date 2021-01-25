import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dishType"
})
export class DishTypePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.toLowerCase().includes("indian"))
      return `${value.slice(0, 5)} Indian`;
    return value;
  }
}
