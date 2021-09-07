import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recip/recipe.model";

@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.css']
})
export class RecipListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe("Kaczka","Faszerowany indyk z kaczki","https://nck.pl/upload/thumb/2020/08/indyk_sie_rozindyczyl_auto_800x800.png")
];
  constructor() { }

  ngOnInit(): void {
  }

}
