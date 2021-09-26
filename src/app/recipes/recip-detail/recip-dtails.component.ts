import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recip-list/recipe.model";
import {RecipService} from "../recip-list/recip.service";

@Component({
  selector: 'app-recip-dtails',
  templateUrl: './recip-dtails.component.html',
  styleUrls: ['./recip-dtails.component.css']
})
export class RecipDtailsComponent implements OnInit {
@Input() recip:Recipe;
  constructor(private recipeService: RecipService) { }

  ngOnInit(): void {
  }
  addToShoppingList(){
    this.recipeService.OnaddToShoppingList(this.recip.ingredients);

  }
}
