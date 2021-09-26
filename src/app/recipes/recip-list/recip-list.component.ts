import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipService} from "./recip.service";

@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.css']
})
export class RecipListComponent implements OnInit {
  recipes: Recipe[];



  constructor(private recipeServic: RecipService) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeServic.getrecipes();
  }

}
