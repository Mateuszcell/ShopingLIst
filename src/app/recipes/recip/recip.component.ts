import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recip-list/recipe.model";
import {RecipService} from "../recip-list/recip.service";

@Component({
  selector: 'app-recip',
  templateUrl: './recip.component.html',
  styleUrls: ['./recip.component.css'],
  providers: [RecipService]
})
export class RecipComponent implements OnInit {
  selectedRecip: Recipe;

  constructor(private  recipService: RecipService) {
  }

  ngOnInit(): void {
    this.recipService.recipSelected.subscribe(
      (recip:Recipe)=>{
        this.selectedRecip=recip;
      }
    )
  }

}
