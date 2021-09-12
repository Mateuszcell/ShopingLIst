import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recip',
  templateUrl: './recip.component.html',
  styleUrls: ['./recip.component.css']
})
export class RecipComponent implements OnInit {
  selectedRecip: Recipe;

  constructor() {
  }

  ngOnInit(): void {
  }

}
