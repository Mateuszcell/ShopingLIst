import {Ingredient} from "../../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsEmitter = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] =[
    new Ingredient("apples",5),
    new Ingredient("tomatoes",5),
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredient : Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.emit(this.ingredients.slice());
  }
  onAddIngredientsToShoppingList(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsEmitter.emit(this.ingredients.slice())
  }
}
