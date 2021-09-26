import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../shoppinglist/shopping-list/shopping-list.service";
@Injectable()
export class RecipService {
  recipSelected = new EventEmitter<Recipe>();
constructor(private shoppingService: ShoppingListService) {
}
  private recipes: Recipe[] = [
    new Recipe("Kaczka","Faszerowana Kaczka","https://nck.pl/upload/thumb/2020/08/indyk_sie_rozindyczyl_auto_800x800.png",[

      new Ingredient("Tasty Duck", 1),
      new Ingredient("Apples",4)
    ])
  ];

  getrecipes(): Recipe[] {
    return this.recipes.slice();// to return copy of array
  }
  OnaddToShoppingList(ingredietns: Ingredient[]){
    this.shoppingService.onAddIngredientsToShoppingList(ingredietns);




  }
}
