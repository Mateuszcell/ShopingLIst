import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recip/recipe.model";

@Component({
  selector: 'app-recip-dtails',
  templateUrl: './recip-dtails.component.html',
  styleUrls: ['./recip-dtails.component.css']
})
export class RecipDtailsComponent implements OnInit {
@Input() recip:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
