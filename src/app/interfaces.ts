export interface Menu {
  id?: number;
  NAME: string;
  TYPE: string;
  CUISINE: string;
  AVAILABILITY: Array<string>;
  PRICE: string;
  image?: string;
}

export interface Product {
  ID?: number;
  NAME: string;
  TYPE: string;
  CUISINE: string;
  AVAILABILITY: Array<string>;
  PRICE: string;
  IMAGE?: string;
  COUNT: Number;
}
export interface ProductAction {
  ID: Number;
  COUNT: Number;
}
