import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('numberInput') numberInputRed: ElementRef;


  addItems() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value
      , this.numberInputRed.nativeElement.value);
    this.shoppingListService.addIngredients(newIngredient);
  }

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {

  }

}
