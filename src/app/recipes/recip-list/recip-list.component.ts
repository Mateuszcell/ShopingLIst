import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recip/recipe.model";

@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.css']
})
export class RecipListComponent implements OnInit {
 @Output() recipWasSelested = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe("Kaczka","Faszerowana Kaczka","https://nck.pl/upload/thumb/2020/08/indyk_sie_rozindyczyl_auto_800x800.png")
];
  onRecipSelected(recip:Recipe){
    this.recipWasSelested.emit(recip);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
