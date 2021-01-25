import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchProd"
})
export class SearchProdPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value, args);

    if (args) {
      return value.filter((item, index) =>
        item["NAME"].toLowerCase().includes(args.toLowerCase())
      );
    } else {
      return value;
    }
  }
}
