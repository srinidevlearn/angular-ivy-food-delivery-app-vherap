import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
@Injectable({
  providedIn: "root"
})
export class DummyDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    let food = [
      {
        id: 1,
        NAME: "Dosa",
        TYPE: "Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["BREAKFAST", "LUNCH"],
        PRICE: "50"
      },
      {
        id: 2,
        NAME: "Chappathi",
        TYPE: "Veg",
        CUISINE: "NorthIndian",
        AVAILABILITY: ["BREAKFAST", "LUNCH"],
        PRICE: "40"
      },
      {
        id: 3,
        NAME: "Puri",
        TYPE: "Veg",
        CUISINE: "NorthIndian",
        AVAILABILITY: ["BREAKFAST", "LUNCH"],
        PRICE: "40"
      },
      {
        id: 4,
        NAME: "Chicken",
        TYPE: "Non-Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["BREAKFAST", "LUNCH", "DINNER"],
        PRICE: "100"
      },
      {
        id: 5,
        NAME: "Panner Briyani",
        TYPE: "Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "120"
      },
      {
        id: 6,
        NAME: "Mutton Briyani",
        TYPE: "Non-Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "160"
      },
      {
        id: 7,
        NAME: "Idli",
        TYPE: "Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["BREAKFAST", "DINNER"],
        PRICE: "50"
      },
      {
        id: 8,
        NAME: "Chicken Briyani",
        TYPE: "Non-Veg",
        CUISINE: "SouthIndian",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "140"
      },
      {
        id: 9,
        NAME: "Pasta",
        TYPE: "Veg",
        CUISINE: "Italian",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "140"
      },
      {
        id: 10,
        NAME: "Salad",
        TYPE: "Veg",
        CUISINE: "Italian",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "140"
      },
      {
        id: 11,
        NAME: "Platters",
        TYPE: "Veg",
        CUISINE: "Continental",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "400"
      },
      {
        id: 12,
        NAME: "Non-Veg Platters",
        TYPE: "Non-Veg",
        CUISINE: "Continental",
        AVAILABILITY: ["LUNCH", "DINNER"],
        PRICE: "450"
      }
    ];

    return { food };
  }
}
